import React from "react";
import { withRouter } from "react-router-dom";

// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
class Home extends React.Component {

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
          <Button color="inherit" onClick={this.handleClick}>Sign In</Button>
        </Toolbar>
      </AppBar>
      {/* <div class="imgbox">
      <img  class="center-fit" src="bg.png" alt="Girl in a jacket"></img>
     </div> */}
    </div>
    );
  }
}
export default withRouter(Home);
