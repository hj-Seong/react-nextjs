import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";

// Nextjs에서 pages안의 내용은 
// 주소를 따라가기에 소문자로 작성한다

// 컴포넌트로 사용하는 이름규칙은 대문자
const FirstPost = () => {
    return ( 
        <Layout>
            <h1>First Post</h1>
            <Link href='/'>Back to home</Link>
            <Image
                src='/images/profile.jpg'
                height={144}
                width={144}
                >
            </Image>
        </Layout>

    );
}

export default FirstPost;