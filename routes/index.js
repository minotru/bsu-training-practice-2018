const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const multer = require('multer');
const postsController = require('../controllers/postsController');
const passport = require('passport');

const photosDir = path.resolve(__dirname, '../data/photos');
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
  destination: (req, file, cb) => {
    cb(null, photosDir);
  },
});
const upload = multer({
  storage,
});

function needsAuthorization(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(401);
  }
}

function parseFormData(req, res, next) {
  if (req.file) {
    req.body.photoLink = `photos/${req.file.filename}`;
  }
  const makeArray = str => str.trim().split(',');
  req.body.likes = req.body.likes ? makeArray(req.body.likes) : [];
  req.body.tags = req.body.tags ? makeArray(req.body.tags) : [];
  next();
}

function deletePhotoFile(photoLink) {
  const photoPath = path.join(photosDir, path.basename(photoLink));
  fs.unlink(photoPath, () => {});
}

router.get('/photos/:id', (req, res) => {
  res.sendFile(path.join(photosDir, req.params.id));
});

router.get('/posts/:id', (req, res) => {
  const post = postsController.getPost(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.sendStatus(404);
  }
});

router.post('/posts', (req, res) => {
  const { top = 10, skip = 0 } = req.query;
  const filterConfig = req.body || {};
  const posts = postsController.getPosts(skip, top, filterConfig);
  res.json(posts);
});

router.put('/posts/:id/like', needsAuthorization, (req, res) => {
  const post = postsController.likePost(req.params.id, req.user.name);
  if (post) {
    if (post.author !== req.user.name) {
      res.sendStatus(401);
    }
    res.json(post);
  } else {
    res.sendStatus(404);
  }
});

router.post('/posts', needsAuthorization, upload.single('photoFile'), parseFormData, (req, res) => {
  const post = postsController.createPost(req.body);
  if (post) {
    res.json(post);
  } else {
    res.sendStatus(400);
  }
});

router.put('/posts/:id', needsAuthorization, upload.single('photoFile'), parseFormData, (req, res) => {
  const oldPost = postsController.getPost(req.params.id);
  if (!oldPost) {
    return res.sendStatus(404);
  } else if (req.user.name !== oldPost.author) {
    return res.sendStatus(403);
  }
  const post = postsController.updatePost(req.params.id, req.body);
  if (post) {
    deletePhotoFile(oldPost.photoLink); // delete old file
    return res.json(post);
  }
  return res.sendStatus(400);
});

router.delete('/posts/:id', needsAuthorization, (req, res) => {
  const post = postsController.getPost(req.params.id);
  if (!post) {
    return res.sendStatus(404);
  } else if (req.user.name !== post.author) {
    return res.sendStatus(403);
  }
  deletePhotoFile(post.photoLink);
  if (postsController.removePost(req.params.id)) {
    return res.sendStatus(200);
  }
  return res.sendStatus(404);
});


router.post('/auth', passport.authenticate('json'), (req, res) => {
  res.json(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
