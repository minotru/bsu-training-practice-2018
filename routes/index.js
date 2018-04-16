const router = require('express').Router();
const postsController = require('../controllers/postsController');
const accountsController = require('../controllers/accountsController');

router.get('/posts/:id', (req, res) => {
  const post = postsController.getPost(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.sendStatus(404);
  }
});

router.get('/posts', (req, res) => {
  const { top = 10, skip = 0 } = req.query;
  const filterConfig = req.query.filterConfig ? JSON.parse(req.query.filterConfig) : {};
  const posts = postsController.getPosts(skip, top, filterConfig);
  res.json(posts);
});

router.put('/posts/:id/like', (req, res) => {
  const post = postsController.likePost(req.params.id, req.query.user);
  if (post) {
    res.json(post);
  } else {
    res.sendStatus(404);
  }
});

router.post('/posts', (req, res) => {
  const post = postsController.createPost(req.body);
  if (post) {
    res.json(post);
  } else {
    res.sendStatus(400);
  }
});

router.put('/posts/:id', (req, res) => {
  const post = postsController.updatePost(req.params.id, req.body);
  if (post) {
    res.json(post);
  } else {
    res.sendStatus(400);
  }
});

router.delete('/posts/:id', (req, res) => {
  if (postsController.removePost(req.params.id)) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

router.post('/auth', (req, res) => {
  const user = accountsController.findUser(req.body.email, req.body.password);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
