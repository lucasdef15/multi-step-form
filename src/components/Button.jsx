import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Button.css';

export default function Button() {
  const [isFirstPage, setIsFirstPage] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsFirstPage(true);
    } else {
      setIsFirstPage(false);
    }
  }, [location]);

  const goBack = () => {
    navigate(-1);
  };

  const goNext = () => {
    if (location.pathname === '/') {
      navigate('/select-plan');
    } else if (location.pathname === '/select-plan') {
      navigate('/add-ons');
    } else if (location.pathname === '/add-ons') {
      navigate('/summary');
    }
  };

  return (
    <section
      className='buttons'
      style={{ justifyContent: isFirstPage ? 'flex-end' : 'space-between' }}
    >
      <button
        className='goBack btn'
        style={{ display: isFirstPage ? 'none' : 'block' }}
        onClick={goBack}
      >
        Go Back
      </button>
      <button className='btn' onClick={goNext}>
        Next Step
      </button>
    </section>
  );
}
