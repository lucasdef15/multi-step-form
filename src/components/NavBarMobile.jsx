import { NavLink } from 'react-router-dom';

export default function NavBarMobile() {
  return (
    <nav className='mobile'>
      <ol>
        <li>
          <NavLink className='navLink_mobile' to='/'></NavLink>
        </li>
        <li>
          <NavLink className='navLink_mobile' to='/select-plan'></NavLink>
        </li>
        <li>
          <NavLink className='navLink_mobile' to='/add-ons'></NavLink>
        </li>
        <li>
          <NavLink className='navLink_mobile' to='/summary'></NavLink>
        </li>
      </ol>
    </nav>
  );
}
