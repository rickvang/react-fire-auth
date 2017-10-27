import firebase from 'firebase'
import { FIREBASE_SETTINGS } from './constants'

firebase.initializeApp(FIREBASE_SETTINGS)

export const ref = firebase.database().ref()
const auth = firebase.auth()

export const Providers = {
  github: new firebase.auth.GithubAuthProvider(),
  google: new firebase.auth.GoogleAuthProvider(),
  twitter: new firebase.auth.TwitterAuthProvider(),
  facebook: new firebase.auth.FacebookAuthProvider(),
}

export const EmailVerication = () =>
  auth
    .currentUser
    .sendEmailVerification()

export const CreateAccount = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password)

export const AuthenticateWithPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)

export const Authenticate = provider =>
  auth.signInWithPopup(Providers[provider])

export const LinkWith = provider =>
  auth.currentUser
    .linkWithPopup(Providers[provider])

export const UnlinkFrom = provider =>
  auth.currentUser
    .unlink(provider)

export const UserProviders = () =>
  auth.currentUser.providerData
  
export const AuthStateChanged = callback =>
  auth.onAuthStateChanged(callback)

export const isAuthencated = () =>
  AuthStateChanged(user => user || false)

export const Logout = () =>
  auth.signOut()