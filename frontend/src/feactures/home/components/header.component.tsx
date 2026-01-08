import styles from "./styles/header.module.css";
import logo from "/galaxiIcon.png"

function Header(){
    return(
        <div className={styles.header}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={logo} alt="galaxi" />
                    <h1 className={styles.namePage}>SysApps <br></br>Center</h1>
                </div>


                <div className={styles.labelsContainer}>
                    <h1 className={styles.labels}>Embarkids</h1>
                </div>
        </div>
    );
}

export default Header;