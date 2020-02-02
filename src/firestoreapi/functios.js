import {firestore} from '../config_firebase'

const getPosts = async () => {
    const posts = await (await firestore.collection('posts').get()).docs
    return posts
}

export {
    getPosts
}