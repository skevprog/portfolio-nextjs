import BaseLayout from '../../components/layouts/BaseLayout'
import API_URL from '../../utils/constants'

import { withRouter } from 'next/router'
import axios from 'axios'

function Blog({ post }) {
  return (
    <BaseLayout>
      <h1>I am the Blog number {post.id}</h1>
    </BaseLayout>
  )
}

Blog.getInitialProps = async({ query }) => { // This comes from the context object
  let post = {}
  try {
    const res = await axios.get(`${API_URL}/${query.id}`)
    post = res.data
    return { post }
  } catch (error) {
    console.log(error)
  }
}

export default withRouter(Blog)
