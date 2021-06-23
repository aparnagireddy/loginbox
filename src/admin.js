
import { withRouter } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import React , { Component }from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firestore from "./firestore";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import moment from 'moment'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
     name:'',
     appointmentdate: '',
     showalert: false,
     appointments: []
    };

    this.getAppointments = this.getAppointments.bind(this);
  }
  
  componentWillMount() {
    this.getAppointments();
  }

  formatDate (date) {
    var parseDate = moment(date , "YYYY-MM-DDTHH:mm");
    return parseDate.format('lll')
  }

  async getAppointments() {
    const db = firestore.firestore();
    var finalappts = [];
    db.collection("appts").get()
    .then((appts) => {
        appts.forEach((appt) => {
        finalappts.push({
            name: appt.data().name,
            appointmentdate: appt.data().appointmentdate
        });
        });
        this.setState({appointments: finalappts});   
    }).catch((error) => {
        console.log("Error getting documents: ", error);
    }); 
  }

  render() {
    return (
    <div className="">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className="" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="">
              Studio Z -Admin
          </Typography>
        </Toolbar>
      </AppBar>
     <div className = "schedule-container2 schedule-container-card box-shadow ">
     <TableContainer component={Paper}> 
     <Table className="" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Customer Name</strong></TableCell>
            <TableCell align="right"><strong>Appointment Date</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.appointments.map((row) =>{
              return ( <TableRow key={row.name}>
                 <TableCell component="th" scope="row">
                {row.name}
                </TableCell>
              <TableCell align="right">{this.formatDate(row.appointmentdate)}</TableCell>
              </TableRow> )
          })
        }
        </TableBody>
      </Table>
    </TableContainer>


    {/* <Table> 
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Customer Name</Table.HeaderCell>
            <Table.HeaderCell>Appointment</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.state.appointments.map((row) =>{
              return ( <Table.Row>
                <Table.Cell>{row.name}</Table.Cell>
                <Table.Cell>{row.appointmentdate}</Table.Cell>
            </Table.Row> )
          })
        }
        </Table.Body>
      </Table> */}
               
     </div>
     
    </div>
    );
  }
}
export default withRouter(Dashboard);
