import React, { Component } from 'react';
import UserForm from "./Components/UserForm"
import Grid from '@material-ui/core/Grid';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container style={{ padding: 10, justifyContent: "center"}}>
          <Grid item sm={9} md={4} xs={10}></Grid>
          <Grid item sm={9} md={4} xs={10}>
                <UserForm />
           </Grid>
          <Grid item sm={4} md={4} xs={10}></Grid>
        </Grid>
        
      </React.Fragment>
    )
  }
}


export default App;
