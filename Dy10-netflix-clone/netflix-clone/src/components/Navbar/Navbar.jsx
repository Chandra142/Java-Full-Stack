
import styles from './navbar.module.css'
import { useNavigate } from 'react-router-dom'
const Navbar = ()=>{

    let navigate = useNavigate()

    const buttonClickHandler = ()=>{
        navigate("/login")
    }

    return(
        <div className={styles.main}>
            <button onClick={buttonClickHandler}>Login</button>
        </div>
    )
}

export default Navbar