import { Outlet } from 'react-router-dom';
import Button from '../components/Button';
import NavBarDesktop from '../components/NavBarDesktop';
import NavBarMobile from '../components/NavBarMobile';
import ButtonsMobile from '../components/ButtonsMobile';
import '../styles/RootLayout.css';
import '../styles/NavBarMD.css';

export default function FormLayout() {
  return (
    <>
      <NavBarMobile />
      <div className='app'>
        <NavBarDesktop />
        <main className='main'>
          <Outlet />
          <Button />
        </main>
      </div>
      <ButtonsMobile />
    </>
  );
}
