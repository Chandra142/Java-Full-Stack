

import { use, useState } from 'react'
import styles from './accordian.module.css'

const Accordian = ({title,description})=>{
    console.log("Inside")
    const [toggleSymbol,setToggleSymbol] = useState('+')
    const [isDesCtnVisible,setIsDescCtnVisible] = useState(false)
    const toggleHandler = ()=>{
        if(isDesCtnVisible){
            setToggleSymbol('+')
        }else{
            setToggleSymbol('-')
        }
        setIsDescCtnVisible(!isDesCtnVisible)
        
    }
    return(
        <div className={styles.main}>
            <div className={styles.titleCtn}>
                <h2 className={styles.title}>{title}</h2>
                <a className={styles.toggleBtn} onClick={toggleHandler}>{toggleSymbol}</a>
            </div>
            {isDesCtnVisible && <div className={styles.descCtn}>
                <p className={styles.desc}>
                    {description}
                </p>
            </div>}
        </div>
    )
}

export default Accordian