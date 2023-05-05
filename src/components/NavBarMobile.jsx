import { Link } from 'react-router-dom';

export default function NavBarMobile() {
  return (
    <nav className='mobile'>
      <Link className='navLink_mobile' to='/'>
        1
      </Link>

      <Link className='navLink_mobile' to='/select-plan'>
        2
      </Link>

      <Link className='navLink_mobile' to='/add-ons'>
        3
      </Link>

      <Link className='navLink_mobile' to='/summary'>
        4
      </Link>
    </nav>
  );
}
