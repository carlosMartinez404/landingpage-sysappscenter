import styles from "./styles/footer.module.css";
import logo from "/galaxiIcon.png"

function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.copyrightContainer}>
                <img className={styles.logo} src={logo}/>
                <h1 className={styles.namePage}>SysApps <br /> Center</h1>
                <h1 className={styles.copyright}>© 2026 Carlos Martinez</h1>
            </div>
        </div>
    )
}

export default Footer;