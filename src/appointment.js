import React from "react";
import { withRouter } from "react-router-dom";

// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import firestore from "./firestore";
class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
     name:'',
     appointmentdate: '',
     showalert: false
    };
  }
  handleClick = () => {
    this.props.history.push("/signin");
  };

  updateInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  addAppointment = e => {
    e.preventDefault();
    const db = firestore.firestore();
    const userRef = db.collection('appts').add({
      name: this.state.name,
      appointmentdate: this.state.appointmentdate
    });  
    this.setState({
      showalert: true
    });
  };

  render() {
    return (
    <div className="">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className="" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="">
              Studio Z
          </Typography>
          <Button color="inherit" onClick={this.handleClick}>Sign Out</Button>
        </Toolbar>
      </AppBar>
      <div className = "schedule-container schedule-container-card box-shadow ">
        {this.state.showalert && 
          <Alert severity="success">You successfully scheduled an appointment</Alert>
        }
          <FormControl className="margin-lft margin-tp">
            <InputLabel htmlFor="name" size="normal" className="">Name</InputLabel>
            <Input
              id="name"
              size="normal"
              onChange={this.updateInput}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
            <TextField
                id="appointmentdate"
                label="Appointment"
                type="datetime-local"
                onChange={this.updateInput}
                defaultValue=""
                className="margin-tp"
                InputLabelProps={{
                  shrink: true,
                }}
            />
            <Button variant="contained" color="primary" className="sc-btn" onClick={this.addAppointment}>
              Schedule an appointment
            </Button>
          </FormControl>
      </div>
               
    </div>
    );
  }
}
export default withRouter(Dashboard);
