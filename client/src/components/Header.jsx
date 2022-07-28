import { FaSignInAlt, FaSignOutAlt, FaUserAstronaut } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'><img alt='logo' src="https://renehuber.me/todo_logo1.png" height={55} /></Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login' className='topBtn'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register' className='topBtn'>
                <FaUserAstronaut /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
