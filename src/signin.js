import React from "react";
import { withRouter } from "react-router-dom";

// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import TextField from '@material-ui/core/TextField';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import './App.css';
const config = {
  apiKey: "AIzaSyBO-lR44grlyS7cfSOHinVG25FSy2-MKlw",
  authDomain: "zoomfresh-ops.firebaseapp.com",
  databaseURL: "https://zoomfresh-ops.firebaseio.com",
  projectId: "zoomfresh-ops",
  storageBucket: "zoomfresh-ops.appspot.com",
  messagingSenderId: "1072758282138",
  appId: "1:1072758282138:web:4d8da8987f2162704a0c23",
  measurementId: "G-63CN4R208D"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: 'https://master.dyqwuynarg9lx.amplifyapp.com//dashboard',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      // Invisible reCAPTCHA with image challenge and bottom left badge.
      recaptchaParameters: {
        type: 'image',
        size: 'invisible',
        badge: 'bottomleft'
      },
      whitelistedCountries: ['US'],
    }
  ],
};
class Login extends React.Component {
  handleClick = () => {
    this.props.history.push("/verifyotp");
  };
  render() {
    return (
        <section>
        <div className="">
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className="" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className="">
                    Studio Z
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
        <div className ="auth-container">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

        </div>           
        </section>
    );
  }
}
export default withRouter(Login);
