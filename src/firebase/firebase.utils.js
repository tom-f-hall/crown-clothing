import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCiD1NuAD1kACS-428OtXUvykt8Oro52qU",
    authDomain: "crown-db-b3add.firebaseapp.com",
    databaseURL: "https://crown-db-b3add.firebaseio.com",
    projectId: "crown-db-b3add",
    storageBucket: "crown-db-b3add.appspot.com",
    messagingSenderId: "404400089978",
    appId: "1:404400089978:web:566fbdefd6c5d777af04c3",
    measurementId: "G-H06FR9G0WP"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
