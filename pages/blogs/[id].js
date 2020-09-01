import BaseLayout from '../../components/layouts/BaseLayout'

import { withRouter } from 'next/router'

function Blog({ router: { query: { id } } }) {
  return (
    <BaseLayout>
      <h1>I am the Blog number {id}</h1>
    </BaseLayout>
  )
}

export default withRouter(Blog)
