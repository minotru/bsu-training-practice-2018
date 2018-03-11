export default function reducer(prevState, action) {
    const state = Object.assign({}, prevState);
    switch (action.type) {
        case "ADD_POST": {
            state.posts.addPhotoPost(action.post);
            state.postsToShow = state.posts.getAllPosts();
            return state;
        }

        case "REMOVE_POST": {
            state.posts.removePhotoPost(action.postId);
            state.postsToShow = state.posts.getAllPosts();
            return state;
        }

        case "EDIT_POST": {
            if (state.posts.editPhotoPost(action.postId, action.options))
                state.postsToShow = state.posts.getAllPosts();
            return state;
        }

        case "ON_LIKE": {
            const state = Object
        }

        default:
            return prevState;
    }
}