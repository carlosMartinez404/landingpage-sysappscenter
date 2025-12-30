import styles from "../styles/home.page.module.css"
import logo from "../../../../public/principalIcon.png"

function HomePage() {
    return(
        <div className={styles.mainView}>
            <div className={styles.heroBg}>
                <div className={styles.header}>
                    <div className={styles.logoContainer}>
                        <img className={styles.logo} src={logo}/>
                        <h1 className={styles.textLogo}>SysApps Center</h1>
                    </div>


                    <div className={styles.optionsContainer}>
                        <h1 className={styles.option}>Sistemas</h1>
                        <a href="http://glowcosmeticos.site" className={styles.option}>Embarques</a>
                        <h1 className={styles.option}>Calidad</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;