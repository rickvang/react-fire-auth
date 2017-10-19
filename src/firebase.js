import firebase from 'firebase'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
})


export const ref = firebase.database().ref()
export const auth = firebase.auth
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const twitterProvider = new firebase.auth.TwitterAuthProvider()

export const facebookAuth = () =>
  auth().signInWithPopup(facebookProvider)

export const GitHubAuth = () =>
  auth().signInWithPopup(githubProvider)

export const GoogleAuth = () =>
  auth().signInWithPopup(googleProvider)

export const TwitterAuth = () =>
  auth().signInWithPopup(twitterProvider)
  
export const authStateChanged = (cb) =>
  auth().onAuthStateChanged(cb)

export const logout = () =>
  auth().signOut()