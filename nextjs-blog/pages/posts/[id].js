import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths : [
            {
                params: {
                    id:'pre-rendering'
                }
            },
            {
                params: {
                    id:'ssg-ssr'
                }
            }
        ],
        fallback : false
    }
}

export async function getStaticProps({params}) {
    const postData = getPostData(params.id)
    return {
        props : {
            postData,
            id: params.id
        }
    }
}


const Post = ({postData, id}) => {
    
    return ( 
        <Layout>
            <h1>{postData.title}</h1>
            <p>{postData.id}</p>
            <p>{postData.date}</p>
            <p>{id}</p>
        </Layout>
     );
}
 
export default Post;