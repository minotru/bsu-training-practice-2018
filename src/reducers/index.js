export default function reducer(prevState, action) {
    switch (action.type) {
        case "ADD_POST": {
            const state = Object.assign({}, prevState);
            state.posts.addPhotoPost(action.post);
            state.postsToShow = state.posts.getAllPosts();
            state.postsChangeCnt++;
            return state;
        }

        case "REMOVE_POST": {
            const state = Object.assign({}, prevState);
            state.posts.removePhotoPost(action.postId);
            state.postsToShow = state.posts.getAllPosts();
            state.postsChangeCnt++;
            return state;
        }

        default:
            return prevState;
    }
}