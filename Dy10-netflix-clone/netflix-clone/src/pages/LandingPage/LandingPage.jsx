
import styles from "./landing-page.module.css"
import Accordian from '../../atoms/Accordian/Accordian'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { ACCORDIAN_DATA } from "../../utils/exportAccordianData"
import Navbar from "../../components/Navbar/Navbar"

const LandingPage = ()=>{
    let navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("username")){
            navigate("/user-page")
        }
    }, [])
    console.log(ACCORDIAN_DATA)

    return(
        <div className={styles.main}>
            <div className={styles.welcomeViewCtn}>
                <Navbar/>
            </div>
            <div className={styles.cardCtn}>
                <h2>Card Ctn</h2>
            </div>
            <div className={styles.accordianCtn}>
                {ACCORDIAN_DATA.map(item=><Accordian title={item.title} description={item.desc} key={item.id}/>)}
            </div>
            <div className={styles.footbarCtn}>

            </div>
        </div>
    )
}


export default LandingPage