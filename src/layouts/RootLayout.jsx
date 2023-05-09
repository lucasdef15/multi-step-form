import { Outlet } from 'react-router-dom';
import NavBarDesktop from '../components/NavBarDesktop';
import NavBarMobile from '../components/NavBarMobile';
import '../styles/RootLayout.css';
import '../styles/NavBarMD.css';

export default function FormLayout() {
  return (
    <>
      <div className="container">
        <NavBarMobile />
        <div className="app">
          <NavBarDesktop />
          <main className="main">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
