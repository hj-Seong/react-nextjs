import Head from 'next/head';
import styles from './layout.module.css';
import Image from 'next/image';

const Layout = ({children, home}) => {
    return ( 
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>layout next</title>
            </Head>
            <header>
                { home ? 
                <div>
                    <Image
                    src='/images/profile.jpg'
                    height={144}
                    width={144}
                    alt="프로필사진"
                    ></Image>
                    <h2>Green blog</h2>
                </div>
                :                 <div>
                <Image
                src='/images/profile.jpg'
                height={100}
                width={100}
                alt="프로필사진"
                ></Image>
                <h2>Green blog post</h2>
            </div>
            }
            </header>

            <div>{children}</div>
            
            <footer>
                <p>개인 블로그입니다</p>
            </footer>
        </div>
    );
}

export default Layout;