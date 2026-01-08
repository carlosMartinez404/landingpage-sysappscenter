import Header from "../components/header.component";
import Footer from "../components/footer.component";
import styles from "../styles/home.page.module.css";
import Body from "../components/body.component";

function Home(){
    return(
        <>
            <div className={styles.root}>
                <Header />
                <Body />
                <Footer />
            </div>
        </>
    )
}

export default Home;