import React from "react";
import { withRouter } from "react-router-dom";

// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import './App.css';
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
                    Aparna Studio
                </Typography>
                <Button color="inherit">Sign out</Button>
                </Toolbar>
            </AppBar>
        </div>

        <form className="login-container" noValidate autoComplete="off">
            <div>
              <TextField  id="ph-no" label="Phone Number" defaultValue="" />
            </div>
            <div className = "btn-padding">
            <Button variant="contained" color="primary" onClick= {this.handleClick}>
                Request OTP
            </Button>
            </div>
        </form>
                 
        </section>
    );
  }
}
export default withRouter(Login);
