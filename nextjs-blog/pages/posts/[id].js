import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback :false
    }
}

export async function getStaticProps({params}) {
    const postData = getPostData(params.id)
    return {
        props : {
            postData,
        }
    }
}


const Post = () => {
    
    return ( 
        <Layout>
            <h1>동적경로를 확인합니다</h1>
        </Layout>
     );
}
 
export default Post;