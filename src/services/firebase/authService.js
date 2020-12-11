import firebaseApp from './config';
import firebase from 'firebase';

class AuthService {
  login(providerName) {
    console.log(providerName);
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebaseApp.auth().signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        onUserChanged(user)
      } else {
        console.log('not login');
      }
    });
  }
}

export default AuthService;
