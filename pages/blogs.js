import API_URL from '../utils/constants'
import { Link } from '../routes'
import axios from 'axios'

export default function Blogs({ posts }) {
  const renderPosts = (posts) => posts.map(post => (
    <li key={post.id}>
      <Link route={`/blogs/${post.id}`} >
        <a>
          {post.title}
        </a>
      </Link>
    </li>
  ))
  return (
    <div>Hello from blogs!
      <ul>
        {posts ? renderPosts(posts) : <div>No posts availables</div>}
      </ul>
    </div>
  )
}

export async function getStaticProps() { // can receive context object
  try {
    const { data: posts } = await axios.get(`${API_URL}?_limit=10`)
    return { props: { posts } }
  } catch (error) {
    console.log(error)
  }
}
