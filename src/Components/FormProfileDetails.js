import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class FormProfileDetails extends Component {
    next = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }
    back = ( event ) => {
        event.preventDefault();
        this.props.prevStep()
    }

    render() {
        const { values } = this.props
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar style={{ height: 50 }} className="AppBar">
                        <Typography variant="body2" style={{ float: "right" }}>Personal Details</Typography>
                    </AppBar>
                    <br /><br /><br />
                    <TextField
                        name="occupation"
                        type="text"
                        value={values.occupation}
                        label="Occupation"
                        fullWidth
                        onChange={this.props.handleChange}
                        style={styles.TextField}
                    ></TextField>

                    <TextField
                        name="bio"
                        type="text"
                        value={values.bio}
                        label="Bio"
                        fullWidth
                        onChange={this.props.handleChange}
                        style={styles.TextField}
                    ></TextField>
                    <TextField
                        style={styles.TextField}
                        name="city"
                        type="email"
                        value={values.city}
                        label="City"
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
                    <Button
                        variant="contained"
                        color="default"
                        onClick={this.back}
                        style={styles.Button}>
                        Back
                    </Button>
                    
                </div>

            </MuiThemeProvider>

        )
    }
}


const styles = {
    Button: {
        marginTop: 30,
        float: "right",
        marginLeft: 10
    },
    TextField: {
        marginTop: 15
    }
}

export default FormProfileDetails;