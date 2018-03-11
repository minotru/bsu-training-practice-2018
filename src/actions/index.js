export function editPost(postId) {
    return {
        type: "EDIT_POST",
        postId
    }
}

export function removePost(postId) {
    return {
        type: "REMOVE_POST",
        postId
    }
}

export function addPost(post) {
    return {
        type: "ADD_POST",
        post
    }
}