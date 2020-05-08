import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class FormUserDetails extends Component {

    next = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values } = this.props
        return (
            <MuiThemeProvider>
                <div>
                   <AppBar style={{ height: 50}} className="AppBar">
                        <Typography variant="body2" style={{ float: "right" }}>Enter User Details</Typography>
                   </AppBar>
                    <br /><br /><br />
                    <TextField
                        name="firstName"
                        type="text"
                        value={values.firstName}
                        label="First Name"
                        fullWidth
                        onChange={this.props.handleChange}
                        style={styles.TextField}
                    ></TextField>

                    <TextField
                        name="lastName"
                        type="text"
                        value={values.lastName}
                        label="Last Name"
                        fullWidth
                        onChange={this.props.handleChange}
                        style={styles.TextField}
                    ></TextField>
                    <TextField
                        style={styles.TextField}
                        name="email"
                        type="email"
                        value={values.email}
                        label="Email"
                        fullWidth
                        onChange={this.props.handleChange}
                    ></TextField>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={this.next} 
                    style={styles.Button}>
                      Next
                    </Button>
                </div>
                
            </MuiThemeProvider>
            
        )
    }
}


const styles = {
    Button : {
        marginTop: 30,
        float: "right"
    },
    TextField : {
        marginTop: 15
    }
}
export default FormUserDetails;
