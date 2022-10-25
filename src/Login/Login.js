import React, { useEffect, useState } from 'react'
import styles from './login.module.css'
import TextField from '@mui/material/TextField';
import instance from '../Helpers/Axios';
import {useNavigate} from 'react-router-dom'
function Login() {

    const [step , setStep] =  useState(0)
    const [form, setForm ] = useState({
        userName:"",
        password:""
    })
    const navigate = useNavigate()

    const logIn = async () => {
        try {
            const res = await instance({method:"POST",url:"/api/approval",data:form})
            console.log(res)
            if(res.status === 200){
                navigate("/form")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setForm({...form,[e.target.name] : e.target.value})
    }

    useEffect(() => {
        if(step > 1){
            logIn()
        }
    },[step])

    const handleLogin = () => {
        setStep(step + 1)
        console.log(form)
    }

    const {userName, password} = form

  return (
    <div className={styles.mainDiv}>
      <div className={styles.loginForm}>
        <div className={styles.heading}>
          <h2>Sign in</h2>
          <h3>A world of possibility in an app</h3>
        </div>
        <div className={styles.actualForm}>
          {/* <TextField
            id="outlined-name"
            fullWidth
            size="small"
            type={"text"}
            // onChange={handleChange}
            // value={value}
            className={styles.input}
          /> */}
          {/* <TextField className={styles.input} id="outlined-basic" label="Outlined" variant="outlined" /> */}

          { step === 0 ? 
            <input name='userName' value={userName} onChange={handleChange} className={styles.input} placeholder={"Enter User Name"} />
            :
            <input name="password" value={password} onChange={handleChange} className={styles.input} placeholder={"Enter Password"} />
            }
          <br />
            <p
              style={{ color: "white", cursor: "pointer" }}
            >
              Forgot Password?
            </p>
          <br />
        </div>
        <button
          className={styles.submit}
          onClick = {handleLogin}
        >
          {/* {logging ? (
            <CircularProgress size={20} color={"inherit"} />
          ) : (
            "Submit"
          )} */}
          
          Submit
        </button>
      </div>
    </div>
  )
}

export default Login