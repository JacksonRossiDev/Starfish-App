import {USER_STATE_CHANGE} from '../constants/index'
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";



import firebase from 'firebase/compat/app'

export function fetchUser() {
    return ((dispatch)=> {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot)=> {
            if(snapshot.exists){
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
            }
            else {
                console.log('does not exist')
            }
        })
        
    })
}