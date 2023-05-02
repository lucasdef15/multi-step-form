import { NavLink } from 'react-router-dom';

export default function NavBarDesktop() {
  return (
    <nav className='navBar'>
      <ol>
        <li className='hey'>
          <span className='steps'>STEP 1</span>
          <NavLink className='navLink steps' to='/'>
            YOUR INFO
          </NavLink>
        </li>
        <li>
          <span className='steps'>STEP 2</span>
          <NavLink className='navLink steps' to='/select-plan'>
            SELECT PLAN
          </NavLink>
        </li>
        <li>
          <span className='steps'>STEP 3</span>
          <NavLink className='navLink steps' to='/add-ons'>
            ADD-ONS
          </NavLink>
        </li>
        <li>
          <span className='steps'>STEP 4</span>
          <NavLink className='navLink steps' to='/summary'>
            SUMMARY
          </NavLink>
        </li>
      </ol>
    </nav>
  );
}
