import {firestore} from '../config_firebase'

const getPosts = async () => {
    const posts = await (await firestore.collection('posts').get()).docs
    return posts
}

const addPostBlog = async (post) => {
    const refDoc = await firestore.collection('posts').add(post)
}
const updatePost = (id, starCount) => {
    firestore.collection('posts').doc(id).update({star: starCount})
}
const removePost = (id) => {
    firestore.collection('posts').doc(id).delete()
}

const starPost = (id, star) => {
    star !== undefined ? updatePost(id, star + 1) : updatePost(id, 1)
}

export {
    getPosts,
    addPostBlog,
    updatePost,
    removePost,
    starPost
}