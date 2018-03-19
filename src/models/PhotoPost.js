function isString(s) {
  return typeof s === 'string' || s instanceof String;
}

export default class PhotoPost {
/**
  * @param {String} description
  * @param {Date} createdAt
  * @param {String} author
  * @param {String} photoLink
  * @param {[String]} tags
  * @param {[String]} likes
  */
  constructor({ description, createdAt, author, photoLink, tags = [], likes = [] }) {
    this.id = PhotoPost.nextId();
    this.description = description;
    this.createdAt = createdAt;
    this.author = author;
    this.photoLink = photoLink;
    this.tags = tags;
    this.likes = likes;
  }

  getLikesCnt() {
    return this.likes.length;
  }

  /**
  * Like this post. Calling twice with same userName will unlike
  * @param {String} userName User who liked this post.
  */
  like(userName) {
    const ind = this.likes.indexOf(userName);
    if (ind === -1) {
      this.likes.push(userName);
    } else {
      this.likes.splice(ind, 1);
    }
  }

  static nextId() {
    let id = 0;
    this.nextId = () => (id++).toString();
    return this.nextId();
  }

  /**
  * @param {PhotoPost} post
  */
  static validate(post) {
    return (
      post instanceof PhotoPost &&
      isString(post.id) && post.id.length > 0 &&
      isString(post.description) && post.description.length < 200 &&
      (post.createdAt instanceof Date) &&
      isString(post.author) && post.author.length > 0 &&
      isString(post.photoLink) && post.photoLink.length > 0 &&
      post.tags instanceof Array &&
      post.likes instanceof Array
    );
  }
}
