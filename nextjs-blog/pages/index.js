import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/layout';
// 정적 생성을 위해 작성
import { getSortedPostsData } from '../lib/posts';
import { useState } from 'react';

// 정적 생성을 위해서 getStaticPropse생성
export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  return {
    props : {
      // 객체안에 allPostData : [포스트데이터] 형식으로 들어감
      allPostData,
    }
  }
}


export default function Home({allPostData}) {
  const [name, setName] = useState("홍길동");
  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2> {name} Next.js를 이용하여 연습하는 중입니다</h2>
        <Link href='/posts/first-post'>포스트로 이동</Link>
        <ul>
          {
            allPostData.map(({id, date, title})=>(
              <li>{title} {id} {date}</li>
            ))
          }
        </ul>

      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  )
}