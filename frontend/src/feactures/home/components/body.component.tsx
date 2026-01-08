import styles from "./styles/body.module.css";
import embarkidsLogo from "/camion-de-carga.png";
import SysAppsCenterLogo from "/galaxiIcon.png";

function Body(){
    return(
        <div className={styles.body}>
           <div className={styles.titleProjectContainer}> 
                <h1>Projects</h1>
           </div>

            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <img className={styles.cardLogo} src={embarkidsLogo}/>
                    <h1 className={styles.titleProject}>EMBARKIDS</h1>
                    <a className={styles.viewProyect} href="http://embarkids.glowcosmeticos.site">View Project</a>
                </div>

                <div className={styles.card}>
                    <img className={styles.cardLogo} src={SysAppsCenterLogo}/>
                    <h1 className={styles.titleProject}>SysAppsCenter</h1>
                    <a className={styles.viewProyect} href="http://embarkids.glowcosmeticos.site">View Project</a>
                </div>

                

            </div>

        </div>
    );
}

export default Body;