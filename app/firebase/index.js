import firebase from 'firebase';

try {
  const config = {
    apiKey: "AIzaSyAmIzJSvIJVyGVzCr14_k0fcbfFk5ZnKhs",
    authDomain: "udemy-todo-app-1527a.firebaseapp.com",
    databaseURL: "https://udemy-todo-app-1527a.firebaseio.com",
    projectId: "udemy-todo-app-1527a",
    storageBucket: "udemy-todo-app-1527a.appspot.com",
    messagingSenderId: "463121488818"
  };

  firebase.initializeApp(config);

} catch (e) {
  console.log(e);
}

export const firebaseRef = firebase.database().ref();
export default firebase;

