import * as models from "./models"
import PhotoPost from "./components/PhotoPost"

const postsData = [
    {
        author: "simon_karasik",
        description: "That was a wonderful sunset in the middle of summer.",
        createdAt: new Date(2018, 2, 19),
        photoLink: "photo1.JPEG",
        tags: ["beautiful", "sunset", "worthten"],

    },
    {
        author: "Alex Mukharski",
        description: "post #2",
        createdAt: new Date(2018, 0, 0),
        photoLink: "http://google.by",
        tags: ["tag1", "tag2", "tag3"],
        likes: ["Simon Karasik", "Alex Kovalchuk"]
    },
    {
        author: "Alex Kovalchuk",
        description: "post #3",
        createdAt: new Date(2017, 0, 5),
        photoLink: "http://google.ru",
        tags: ["hello", "it's", "me", "tag2"]
    }
];

const posts = new models.PhotoPosts();
postsData.forEach(post => posts.addPhotoPost(new models.PhotoPost(post))); 
const post = PhotoPost(posts.getPhotoPost("0"));
const postsElement = document.getElementById("posts");
posts.getPhotoPosts().forEach(post => postsElement.appendChild(PhotoPost(post)));
