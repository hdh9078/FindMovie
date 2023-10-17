import {Link} from "react-router-dom";
import styles from "../css/HeadMain.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen} from "@fortawesome/free-solid-svg-icons";

export default function HeaderMain() {
    

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>Find Movie</div>
                <div className={styles.btnCover}>
                    <Link className={styles.link} to="/main"><FontAwesomeIcon className={styles.icon} icon={faDoorOpen} /></Link>
                </div>
                
            </div>
        </>
    )
}