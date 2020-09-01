import Link from 'next/link'

export default function Blogs({ posts }) {
  const renderPosts = (posts) => posts.map(post => (
    <li key={post.id}>
      <Link as={`/blogs/${post.id}`} href={'/blogs/[id]'}>
        <a>
          {post.title}
        </a>
      </Link>
    </li>
  ))
  return (
    <div>Hello from blogs!
      <ul>
        {renderPosts(posts)}
      </ul>
    </div>
  )
}

Blogs.getInitialProps = async() => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const json = await res.json()
    return { posts: json }
  } catch (error) {
    console.log(error)
  }
}
