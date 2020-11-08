import React from 'react';
import './loginContent.css';
// import { useHistory } from 'react-router-dom'

import { Button, 
  TextField, 
  Dialog, 
  DialogTitle,
  makeStyles,
  Box,
  Container,
  CssBaseline,
  Typography,
  Grid,
  Link } from '@material-ui/core';
  

  import * as yup from 'yup'
  import { Formik, Form } from 'formik'
  import { loginUser } from '../../services/userServices'

  import { useDispatch } from 'react-redux'
  import { fetchUser } from '../../actions/user_actions'

  let LoginSchema = yup.object().shape({
    email: yup.string().email().required("This field is required"),
    password: yup.string().min(6, "Password needs to be at least 6 characters").required("This field is required")
  })

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "green"
    },
    submit_demo: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "lightgreen",
      color: "black"
    },
    title: {
      padding:'5px',
      marginLeft:'6px',
      cursor:"pointer"
    }, 
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    }
  }));



function LoginContent(props) {

  const dispatch = useDispatch()

  const { open, setLogin, setSignUp } = props;

  // const history = useHistory();

  const switchSignup = (event) => {
    setLogin(false)
    setSignUp(true)
  }

  const loginSuccess = () => {
    setLogin(false)
  }
  const classes = useStyles()

  // const handleDemo = async (e) => {
    
  //   const demoLogin = await loginUser({
  //     email: 'demo@gmail.com',
  //     passsword: 'aaaaaa'
  //   })

  //   console.log("demologin", demoLogin)
  //   window.localStorage.setItem(
  //     'loggedUser', JSON.stringify(demoLogin))

  //     // dispatch(fetchUser({
  //     //   email: 'demo@gmail.com',
  //     //   passsword: 'aaaaaa'
  //     // }))

  //     // loginSuccess()
  // }

  return (

    //closing the overlay container and opening a new one.
    //---> uses open state built in to control whether it renders or not from other modules

      
    
    <Dialog className="login" aria-labelledby="simple-dialog-title" open={open} onClose={(event) => setLogin(false)}>
      
      <DialogTitle className={classes.title} onClick={() => setLogin(false)}>X</DialogTitle>
      <Container component="main" maxWidth="xs" spacing={5}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
            initialValues={{
              email:'',
              password:''
            }}
            validationSchema={LoginSchema}
            onSubmit={async (values) => {
            try{
              const logUser = await loginUser({
                ...values
              })
              
              window.localStorage.setItem(
                'loggedUser', JSON.stringify(logUser)
              )

              dispatch(fetchUser(values))
              loginSuccess()
              // history.push('/home')
              // history.go(0)
            }catch(e){
              console.error("NOPE",e.message)
              window.alert("Incorrect Credentials - please try again. Or create an account.")
              
            }

            }}
            >
              {({errors, handleChange, touched}) => (
        <Form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            autoFocus
            error={errors.email && touched.email}
            helperText={errors.email && touched.email ? errors.email : null}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            onChange={handleChange}
            error={errors.password && touched.password}
            helperText={errors.password && touched.password ? errors.password : null}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Box b={8}>
          <Grid container spacing={5}>
            <Grid item xs>
            </Grid>
            <Grid item>
              <div className="switchLink">
                <Link onClick={switchSignup}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </div>
            </Grid>
          </Grid>
          </Box>
        </Form>
              )}
      </Formik>

      </div>
    </Container>
    </Dialog>
    /* <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit_demo}
            onClick={(e) => handleDemo(e)}
          >
            Demo Login
          </Button> */
 
  );
}


export default LoginContent

