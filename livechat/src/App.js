import firebase from './firebase'
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Footer from './components/Footer'
import 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'
import HomePage from './components/HomePage';

function App() {
  
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  
  const LoginWithGoogle = () => {
    auth
    .signInWithPopup(provider)
    .then(result => {
        console.log(result.user.displayName)
    }) 
    .catch(err => {
        throw err
    })
  }
  const [user] = useAuthState(auth)
  
  const logOut = () =>{
    if(auth.currentUser){
      auth.signOut()
      window.location.href = '/'
    }
  }

return (
    <div className="App">
      <div className="container">
        <Header />
        {user ?  <HomePage user={user} onLogOut={logOut}/> : <Login onLogin={LoginWithGoogle}/> }
      </div>
    </div>
  );
}

export default App;
