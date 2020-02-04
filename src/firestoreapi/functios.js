import {firestore} from '../config_firebase'

const getPosts = async () => {
    const posts = await (await firestore.collection('posts').get()).docs
    return posts
}

const addPostBlog = async (post) => {
    const refDoc = await firestore.collection('posts').add(post)
    const doc = await refDoc.get()
    return doc
}
export {
    getPosts,
    addPostBlog
}