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
// import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
class Dashboard extends React.Component {

  handleClick = () => {
    this.props.history.push("/signin");
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
      <div className = "appt">
      <FormControl className="margin-tp">
        <InputLabel htmlFor="name" size="normal">Name</InputLabel>
        <Input
          id="name"
          size="normal"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        <TextField
            id="datetime-local"
            label="Appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="margin-tp"
            InputLabelProps={{
              shrink: true,
            }}
        />
        <Button variant="contained" color="primary">
           Schedule an appointment
        </Button>
      </FormControl>
      </div>
               
    </div>
    );
  }
}
export default withRouter(Dashboard);
