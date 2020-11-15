import firebase from 'firebase';

class AuthService {
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

  async login(providerName) {
    let provider = null;
    if(providerName === 'Google')
      provider = new firebase.auth.GoogleAuthProvider();
    else {
      provider = new firebase.auth.GithubAuthProvider();
    }
    return firebase.auth().signInWithPopup(provider);
  }

  async authChangeHandler(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        onUserChanged(user)
      } else {
        console.log('not login');
      }
    })
  }
}

export default AuthService;
