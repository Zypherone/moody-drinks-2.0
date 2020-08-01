import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";

import app from "components/_Firebase";
import { AuthContext } from "components/_Auth";

//import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, Container } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

//import { Face, Fingerprint } from '@material-ui/icons'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  
  },
  App: {
    textAlign: 'center',
    backgroundColor: '#ffffff'
  },
  AppHeader: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  Login: {
    display: 'flex',
    flexDirection: 'column',
    alignitems: 'center',
    justifyContent: 'center',
    border: '1px solid lightgray',
    padding: '50px'
  },
  Button: {
    padding: '40px'
  }
}));

const Login = ({ history }) => {
  const classes = useStyles();
 // const [ message, setMessage ] = useState('')

   //   open: false

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <form className={classes.Login} noValidate autoComplete="off" onSubmit={handleLogin}>
          <TextField
            variant="standard"
            placeholder="Email"
            margin="normal"
            type="email"
            name="email"
            required
          />
          <TextField
            variant="standard"
            placeholder="Password"
            margin="normal"
            required
            type="password"
            name="password"
          />

          <div className={classes.Button}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Log In
            </Button>
          </div>
        </form>
      </header>
    </div>
  );  

  // return (
  //   <>
  //   <div>
  //     <h1>Log in</h1>
  //     <form onSubmit={handleLogin}>
  //       <label>
  //         Email
  //         <input name="email" type="email" placeholder="Email" />
  //       </label>
  //       <label>
  //         Password
  //         <input name="password" type="password" placeholder="Password" />
  //       </label>
  //       <button  >Log in</button>
  //     </form>
  //   </div>
  //   <form className={classes.root} noValidate autoComplete="off" onSubmit={handleLogin}>
  //     <input id="email" label="Email" type="email" name="email" />
  //     <input id="password" label="Password" type="password" name="password" />
  //     <Button variant="contained" color="primary" type="submit">
  //       Submit
  //     </Button>
  //   </form>
  //   </>
  // );
};

export default withRouter(Login);
