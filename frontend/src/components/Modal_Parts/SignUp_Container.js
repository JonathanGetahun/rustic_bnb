import React from 'react';

import './signUpContent.css';
import { Button, 
  TextField, 
  Dialog, 
  DialogTitle,
  makeStyles,
  Container,
  CssBaseline,
  Typography,
  Grid,
  Link } from '@material-ui/core';

  import * as yup from 'yup'
  import { Formik, Form } from 'formik'
  import { signUpUser } from '../../services/userServices'

  let SignUpSchema = yup.object().shape({
    firstName: yup.string().required("This field is required"),
    lastName: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
    password: yup.string().required("This field is required").min(6, "Password needs to be at least 6 characters")
  })

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "green"
    },
    title: {
      padding:'5px',
      marginLeft:'6px',
      cursor:"pointer"
    }
  }));


function SignUpContent(props) {

  const { open, setSignUp, setLogin } = props;

  const switchLogin = (event) => {
    setSignUp(false);
    setLogin(true);
  }

  const classes = useStyles();

  return (
    <Dialog className="login" aria-labelledby="simple-dialog-title" open={open} onClose={(event) => {setSignUp(false)}}>
      <DialogTitle className={classes.title} onClick={() => setSignUp(false)}>X</DialogTitle>
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Formik
            initialValues={{
              firstName:'',
              lastName: '',
              email:'',
              password:''
            }}
            validationSchema={SignUpSchema}
            onSubmit={async(values) => {
              try {
                 await signUpUser({
                  ...values
                });
                switchLogin()
              } catch (e) {
                console.error(e.message)
              }
            }}
            >
              {({errors, handleChange, touched}) => (
      <Form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              onChange={handleChange}
              error={errors.firstName && touched.firstName}
              helperText={errors.firstName && touched.firstName ? errors.firstName: null}

            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              onChange={handleChange}
              error={errors.lastName && touched.lastName}
              helperText={errors.lastName && touched.lastName ? errors.lastName: null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              error={errors.email && touched.email}
              helperText={errors.email && touched.email ? errors.email : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              error={errors.password && touched.password}
              helperText={errors.password && touched.password ? errors.password : null}
            />
          </Grid>
 
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <div className="switchLink">
            <Link onClick={switchLogin}>
              Already have an account? Sign in
            </Link>
            </div>
          </Grid>
        </Grid>
      </Form>
    )}
    </Formik>
    </div>
  </Container>
  </Dialog>)


    //left for my own notes
    // const { show, closeModal } = props;

    // function handleSubmit(e){
    //     e.preventDefault();
    // }

    //added so that the component doesn't get affected by parent css
    //and is being rendered from the "modal-root" DOM node from the index.html file
    // return ReactDOM.createPortal(
    //   <>
    //   <div className={show ? "overlay" : "hide"} onClick={closeModal} />
    //     <div className={show ? "modalSignUp" : "hide"}>
    //       <button onClick={closeModal} id="close">X</button>
       
    //     <div className="login_form">
    //         <h1> Sign Up to Begin </h1>
    //         <form onSubmit={handleSubmit}>
    //             <input className="firstName" type='text' name='firstName' placeholder='First Name' />
    //             <input className="lastName" type='text' name='lastName' placeholder='Last Name' />
    //             <input className="email" type='email' name='email' placeholder="Email Address" />
    //             <input className="password" type='password' name="password" placeholder="password" />
    //             <button className="login_button_signup"> Sign Up</button>
    //         </form>
    //     </div>
    //     <hr />
    //     <div className="login_switch">Already Have an Account. Log In</div>
    //     </div>
    //   </>, document.getElementById("modal-root")
    // );
}

export default SignUpContent
