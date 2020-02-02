import {firestore} from '../config_firebase'

const getPosts = async () => {
    const posts = await firestore.collection('posts').get()
    return posts
}

export {
    getPosts
}