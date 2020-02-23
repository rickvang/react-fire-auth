import firebase from 'firebase/app'
import 'firebase/auth'

import { FIREBASE_SETTINGS } from './constants'

const app = firebase.initializeApp(FIREBASE_SETTINGS)

export const auth = firebase.auth(app)

auth.useDeviceLanguage()

// export const Providers = {
//   github: new firebase.auth.GithubAuthProvider(),
//   google: new firebase.auth.GoogleAuthProvider(),
//   twitter: new firebase.auth.TwitterAuthProvider(),
//   facebook: new firebase.auth.FacebookAuthProvider(),
// }

// export const EmailVerication = () =>
//   auth
//     .currentUser
//     .sendEmailVerification()

// export const AuthWith = provider =>
//   auth.signInWithPopup(Providers[provider])

// export const LinkWith = provider =>
//   auth.currentUser
//     .linkWithPopup(Providers[provider])

// export const UnlinkFrom = provider =>
//   auth.currentUser
//     .unlink(`${provider}.com`)

// export const UserProviders = () =>
//   auth.currentUser.providerData

// export const isLinked = service =>
//   UserProviders().find(({providerId}) => providerId === `${service}.com`)

// export const Logout = () =>
//   auth.signOut()

// export const resetPasswordEmail = email =>
//   auth.sendPasswordResetEmail(email)
