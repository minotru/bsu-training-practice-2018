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
        photoLink: "https://scontent-frx5-1.cdninstagram.com/vp/83a88bb2d1dd5aa7deee0029f2f08e53/5B3087E3/t51.2885-15/e35/28152259_336454203529783_1822968559202992128_n.jpg",
        tags: ["tag1", "tag2", "tag3"],
        likes: ["simon_karasik", "Alex Kovalchuk"]
    },
    {
        author: "Alex Kovalchuk",
        description: "post #3",
        createdAt: new Date(2017, 0, 5),
        photoLink: "https://scontent-frx5-1.cdninstagram.com/vp/a0915c1f5dc07ee4b473032fd81a4b11/5B3A2469/t51.2885-15/e35/26864741_2070912839806455_6365971865814433792_n.jpg",
        tags: ["hello", "it's", "me", "tag2"]
    }
].map(postData => new models.PhotoPost(postData));

const postsHandler = (function() {
    let nodesCash = {};
    let postsToShow = null;
    const wrapper = document.getElementById("posts");
    return function() {
        if (store.getState().postsToShow !== postsToShow) {
            postsToShow = store.getState().postsToShow;
            removeChildren(wrapper);
            postsToShow.forEach(post => {
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
