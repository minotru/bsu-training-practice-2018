import * as models from "./models"
import PhotoPost from "./components/PhotoPost"
import Store from "./store"
import reducer from "./reducers"
import * as actions from "./actions"
import {removeChildren} from "./util"

const initalState = {
    posts: new models.PhotoPosts(),
    filterOptions: null,
    postsToShow: [],
    userName: "simon_karasik",
    postsChangeCnt: 0
}

const store = new Store(reducer, initalState);

const examplePosts = [
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
].map(postData => new models.PhotoPost(postData));

const postsHandler = (function() {
    let nodesCash = {};
    let postsChangeCnt = null;
    const wrapper = document.getElementById("posts");
    return function() {
        if (store.getState().postsChangeCnt !== postsChangeCnt) {
            postsChangeCnt = store.getState().postsChangeCnt;
            removeChildren(wrapper);
            store.getState().postsToShow.forEach(post => {
                if (!nodesCash[post.id] || nodesCash[post.id].data.post !== post)
                    nodesCash[post.id] = PhotoPost({
                        post,
                        userName: store.getState().userName,
                        onRemove: () => store.dispatch(actions.removePost(post.id)),
                        onEdit: () => store.dispatch(actions.editPost(post.id))
                    });
                wrapper.appendChild(nodesCash[post.id]);
            });
        }
    
    }
})();

store.subscribe(postsHandler);
examplePosts.forEach(post => store.dispatch(actions.addPost(post)));
