/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Button.css';

export default function Button() {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section
      className="buttons"
      style={{
        justifyContent:
          location.pathname === '/' ? 'flex-end' : 'space-between',
        display: location.pathname === '/thanks-page' ? 'none' : null,
      }}
    >
      <button
        className="goBack btn"
        style={{ display: location.pathname === '/' ? 'none' : 'block' }}
        onClick={goBack}
      >
        Go Back
      </button>
      <button
        className={location.pathname === '/summary' ? 'btn submit' : 'btn'}
        type="submit"
      >
        {location.pathname === '/summary' ? 'Confimr' : 'Next Step'}
      </button>
    </section>
  );
}
