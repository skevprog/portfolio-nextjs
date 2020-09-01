import Header from '../shared/Header'

function BaseLayout({ children }) {
  return (<>
    <Header/>
    {children}
  </>)
}

export default BaseLayout
