import Head from 'next/head';
import styles from './layout.module.css';

const Layout = ({children, home}) => {
    return ( 
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>layout next</title>
            </Head>
            <header>
                { home ? <h1>home</h1> : <h1>not home</h1>}
            </header>

            <div>{children}</div>
        </div>
    );
}

export default Layout;