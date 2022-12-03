import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <>
    <nav>
      <h2>User Trip List</h2>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/users'>
          <li>Users</li>
        </Link>
      </ul>
    </nav>
  </>
)

export default MainNavbar;