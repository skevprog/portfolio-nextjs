import Link from 'next/link'

function Header() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link >
      <Link href="/portfolio">
        <a>Portfolios</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      <Link href="/cv">
        <a>Cv</a>
      </Link>
    </>
  )
}

export default Header
