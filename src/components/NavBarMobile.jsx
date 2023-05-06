import { NavLink } from 'react-router-dom';
import background_mobile from '../assets/images/bg-sidebar-mobile.svg';

export default function NavBarMobile() {
  return (
    <>
      <img
        className='background-mobile'
        src={background_mobile}
        alt='background mobile'
      />
      <nav className='mobile'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'active_mobile' : 'navLink_mobile'
          }
        >
          1
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? 'active_mobile' : 'navLink_mobile'
          }
          to='/select-plan'
        >
          2
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? 'active_mobile' : 'navLink_mobile'
          }
          to='/add-ons'
        >
          3
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? 'active_mobile' : 'navLink_mobile'
          }
          to='/summary'
        >
          4
        </NavLink>
      </nav>
    </>
  );
}
