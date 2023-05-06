import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Button.css';

export default function Button() {
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isThanksPage, setIsThanksPage] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setIsFirstPage(true);
        setIsThanksPage(false);
        setIsLastPage(false);
        break;
      case '/summary':
        setIsLastPage(true);
        setIsThanksPage(false);
        setIsFirstPage(false);
        break;
      case '/thanks-page':
        setIsThanksPage(true);
        setIsLastPage(false);
        setIsFirstPage(false);
        break;
      default:
        setIsLastPage(false);
        setIsFirstPage(false);
        setIsThanksPage(false);
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

  const handleThankPage = () => {
    navigate('thanks-page');
  };

  return (
    <section
      className='buttons'
      style={{
        justifyContent: isFirstPage ? 'flex-end' : 'space-between',
        display: isThanksPage ? 'none' : null,
      }}
    >
      <button
        className='goBack btn'
        style={{ display: isFirstPage ? 'none' : 'block' }}
        onClick={goBack}
      >
        Go Back
      </button>
      <button
        className={isLastPage ? 'btn submit' : 'btn'}
        onClick={isLastPage ? handleThankPage : goNext}
      >
        {isLastPage ? 'Confimr' : 'Next Step'}
      </button>
    </section>
  );
}
