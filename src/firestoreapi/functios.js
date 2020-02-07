import firebase, {firestore} from '../config_firebase'
import 'firebase/auth'

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
const provider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
    const result = await firebase.auth().signInWithPopup(provider)
}
const signInWithEmailAndPassword = async (email, password) => {
    const resutl = await firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(err => err.message)
    return resutl
}

const createNewUserWithEmailAndPass = async (email, password) => {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(err => console.log(err))
    return result
}
const signOutUser = async () => {
    await firebase.auth().signOut()
}


export {
    getPosts,
    addPostBlog,
    updatePost,
    removePost,
    starPost,
    signInWithGoogle,
    signInWithEmailAndPassword,
    createNewUserWithEmailAndPass,
    signOutUser
}