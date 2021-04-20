import Head from "next/head";
import styles from "./Layout.module.css";

const Layout = ({children, title = "Country Info"}) => {
    return (
        <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}> 

      </header>

      <main className={styles.main}>{children}
       
      </main>

      <footer className={styles.footer}>
       Padraig Foran
      </footer>
    </div>
    )
}

export default Layout;