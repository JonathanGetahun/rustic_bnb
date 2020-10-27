import React from 'react';
import './loginContent.css';
import { useHistory } from 'react-router-dom'

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
    }
  }));



function LoginContent(props) {

  const { open, setLogin, setSignUp } = props;

  const history = useHistory();

  const switchSignup = (event) => {
    setLogin(false)
    setSignUp(true)
  }

  const classes = useStyles()

  return (
    //Seems like it handles a lot of things in the background like closing the 
    //overlay container and opening a new one.
    //---> uses open state built in to control whether it renders or not from other modules
    <Dialog className="login" aria-labelledby="simple-dialog-title" open={open} onClose={(event) => {setLogin(false)}}>
      
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
              console.log(logUser)
              window.localStorage.setItem(
                'loggedUser', JSON.stringify(logUser)
              )
              setLogin(false)
              // history.push('/home')
              history.go(0)
            }catch(e){
              console.error(e.message)
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit_demo}
          >
            Demo Login
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
  );
}


export default LoginContent

    // const [ open, setOpen ] = useState(false)
    // const { show, closeModal } = props;


    // function handleSubmit(e){
    //     e.preventDefault();
    // }

    // function handleSignUpButton(){
    //   closeModal();
    //   console.log(open)
    //   setOpen(!false)
    //   console.log(open)
    // }

    // useEffect( () => {
    //     console.log("works?")
    // }, [open])

    //added so that the component doesn't get affected by parent css
    //and is being rendered from the "modal-root" DOM node from the index.html file
    // return ReactDOM.createPortal(
    //   <>
    //   <div className={show ? "overlay" : "hide"} onClick={closeModal} />
    //     <div className={show ? "modal" : "hide"}>
    //       <button onClick={closeModal} id="close">X</button>
       
    //     <div className="login_form">
    //         <h1> Log in to Continue </h1>
    //         <form onSubmit={handleSubmit}>
    //             <input className="username" type='text' name='username' placeholder='Email Address' />
    //             <input className="password" type='password' name='password' placeholder='password' />
    //             <button className="login_button"> Sign In</button>
    //         </form>
    //     </div>
    //     <div className="login_demo">
    //         <h3 className="login_demo_pointer" type="submit">Demo Login</h3>
    //         </div>
    //     <hr />
    //     <div className="login_switch">Don't have an account. 
    //     <button className="signup_link" onClick={handleSignUpButton}>Sign Up</button>
    //     {open && <SignUpContent open={open} closeModal={closeModal} show={show} />} </div>
    //     </div>
    //   </>, document.getElementById("modal-root")
    // );