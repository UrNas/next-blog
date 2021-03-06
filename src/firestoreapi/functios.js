import firebase, {firestore} from '../config_firebase'
import 'firebase/auth'

// format date function
const formatDate = (date) => {
    const d = date.toDate()

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = d.getFullYear()
    const month = d.getMonth()
    const day = d.getDate()
    return `${year}-${months[month]}-${day}`
}

// function to handle delete function in post component 
// show it if currentUser.uid === postAuth.uid otherwise hide delete button
const belongsToCurrentUser = (currentUser, postAuth)=> {
    if (!currentUser)return false
    return currentUser.uid === postAuth.uid
}

// function return back all posts
const getPosts = async () => {
    const posts = await (await firestore.collection('posts').get()).docs
    return posts
}

// function to add post 
const addPostBlog = async (post) => {
    const refDoc = await firestore.collection('posts').add(post)
}
// addComment to add new comment
const addComment = async (comment, postID) => {
    await firestore.doc(`posts/${postID}`).collection('comments').add(comment)
}
// function to start post
const updatePost = (id, starCount) => {
    firestore.collection('posts').doc(id).update({star: starCount})
}

// functin to remove post
const removePost = (id) => {
    firestore.collection('posts').doc(id).delete()
}

// helper function to update star post
const starPost = (id, star) => {
    star !== undefined ? updatePost(id, star + 1) : updatePost(id, 1)
}
// firebase section 'start'
const provider = new firebase.auth.GoogleAuthProvider();
// end

// function to sign in with google.
const signInWithGoogle = async () => {
    const result = await firebase.auth().signInWithPopup(provider)
}

// function to sign in with email and password
const signInWithEmailAndPassword = async (email, password) => {
    const resutl = await firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(err => err.message)
    return resutl
}

// functin to handle create user with email and password.
const createNewUserWithEmailAndPass = async (email, password, disname) => {
    const userCredenial = await firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(err => console.log(err))
    return await craeteUserProfile(userCredenial.user, {displayName: disname})
}

// function to sign out user
const signOutUser = async () => {
    return await firebase.auth().signOut()
}

// functiion to create userProfile in data whether user sign in with provide or his email and password.
const craeteUserProfile = async (user, rest) => {
    if(!user) return null
    // return user document reference 
    const refUser = firestore.collection('users').doc(`${user.uid}`)
    // return user document snapshot
    const userDoc = await refUser.get()
    if (!userDoc.exists) {
        const {uid, displayName, email, photoURL} = user;
        const createdAt = new Date()
        try {
            await refUser.set({
                uid,
                displayName,
                email,
                photoURL,
                createdAt,
                ...rest
            })
        } catch (error) {
            console.error(error)
        }
    }
    return getUserProfile(user)
}
// function retrun back user
const getUserProfile = async(user) => {
    return firestore.collection('users').doc(`${user.uid}`)
}

// create function to return back post ref
const getPostRef = (postID) => {
    return firestore.doc(`posts/${postID}`)
}
// getRefComment return back comment ref
const getCommentRef = (postID)=> {
    const refPost = getPostRef(postID)
    return refPost.collection('comments')
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
    signOutUser,
    craeteUserProfile,
    formatDate,
    belongsToCurrentUser,
    getPostRef,
    getCommentRef,
    addComment
}