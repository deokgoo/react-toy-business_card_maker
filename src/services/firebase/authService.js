import { firebaseAuth, githubProvider, googleProvider } from './config';

class AuthService {
  login(providerName) {
    console.log(providerName);
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  getUid() {
    return firebaseAuth.currentUser.uid;
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        onUserChanged(user)
      } else {
        console.log('not login');
      }
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not support provider: ${providerName}`);
    }
  }
}

export default AuthService;
