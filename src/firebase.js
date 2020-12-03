import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCjjnXVLraC6PPlqHW4fnMYA5B5tNlnpzE",
    authDomain: "idobatakaigi-with-ham-7921c.firebaseapp.com",
    databaseURL: "https://idobatakaigi-with-ham-7921c.firebaseio.com",
    projectId: "idobatakaigi-with-ham-7921c",
    storageBucket: "idobatakaigi-with-ham-7921c.appspot.com",
    messagingSenderId: "586295891447",
    appId: "1:586295891447:web:32f72e9f8a27a0a7db8af2"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()
const messageRef = database.ref('messages')

export const pushMessage = ({name, text}) => {messageRef.push({name, text})}