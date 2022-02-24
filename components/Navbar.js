import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react';
// import '../styles/Navbar.module.css'

function Navbar() {
  // const [session, loading] = useSession()
  const { data: session } = useSession()
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>Authentication</a>
      </h1>
      <ul className={`main-nav loaded`}>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
            <a>Dashboard</a>
          </Link>
        </li>
        { session && (<li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>)}

        { !session && (
          <li>
            <Link href='/api/auth/signin'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signIn('')
                }}>
                Sign In
              </a>
            </Link>
          </li>
        )}
        { session && (
          <li>
            <Link href='/api/auth/signout'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign Out
              </a>
            </Link>
          </li>
        )}   
      </ul>
    </nav>
  )
}

export default Navbar