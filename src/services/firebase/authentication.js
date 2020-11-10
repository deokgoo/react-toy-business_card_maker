import firebase from 'firebase';

class Authentication {
  constructor() {
    let firebaseConfig = {
      apiKey: "AIzaSyA59RzXLSK59SbARWpW-qSNwrmNKwgq7AM",
      authDomain: "business-card-c43e9.firebaseapp.com",
      databaseURL: "https://business-card-c43e9.firebaseio.com",
      projectId: "business-card-c43e9",
      storageBucket: "business-card-c43e9.appspot.com",
      messagingSenderId: "628600874312",
      appId: "1:628600874312:web:f21ccf6f94d4a1e9b13f7d",
      measurementId: "G-K8SS867DF1"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  async googleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    let res = await firebase.auth().signInWithPopup(provider)
    try {
      let {user, credential: accessToken} = res;
    } catch(err) {
      var errorCode = err.code;
      var errorMessage = err.message;
      // The email of the user's account used.
      var email = err.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = err.credential;
      console.log(errorMessage);
    }
  }
}

export default Authentication;