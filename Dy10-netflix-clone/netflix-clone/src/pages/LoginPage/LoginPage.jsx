

import styles from './login-page.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const LoginPage = () => {

        let nevigate = useNavigate()
        const [email, setEmail] = useState("")
        const [pass, setPass] = useState("")
        const emailChangeHandler = (e) => {
            setEmail(e.target.value)
        }

        const passChangeHandler = (e) =>
            setPass(e.target.value)
    
    const loginHandler = (e) => {
        e.preventDefault() // it will stop to reload the page
        const loginData = {
            email: email,
            password: pass
        }
        localStorage.setItem("username", email)
        nevigate("/user-page")
        setEmail("")
        setPass("")
        console.log(loginData)
    }
    return (
        <div className={styles.container}>
            <form className="card active" id="login">
                <h2>Login</h2>
                <div className={styles.field}>
                    <input type="email" required placeholder="" onChange={emailChangeHandler} />
                    <label>Email</label>
                </div>
                <div className={styles.field}>
                    <input type="password" required placeholder=" " onChange={passChangeHandler} />
                    <label>Password</label>
                </div>
                <button onClick={loginHandler}>Login</button>
                {/* <div class="links">
                    <span onclick="show('register')">Create account</span> |
                    <span onclick="show('forgot')">Forgot?</span>
                </div> */}
            </form>
            <form className={styles.card} id="register">
                <h2>Register</h2>
                <div className="field">
                    <input type="text" required placeholder=" " />
                    <label>Full Name</label>
                </div>
                <div className={styles.field}>
                    <input type="email" required placeholder=" " />
                    <label>Email</label>
                </div>

                <div className={styles.field}>
                    <input type="password" required placeholder=" " />
                    <label>Password</label>
                </div>

                <button>Create Account</button>
                <div className={styles.links}>
                    <span onClick={() => show('/login')}>Already have an account?</span>
                </div>
            </form>
            {/* <form className={styles.card} id="forgot">
                <h2>Reset Password</h2>
                <div class="field">
                    <input type="email" required placeholder=" "/>
                    <label>Email</label>
                </div>
                <button>Send Link</button>
                <div class={styles.links}>
                    <span onclick="show('login')">Back to Login</span>
                </div>
            </form> */}

        </div>
    )
}
export default LoginPage