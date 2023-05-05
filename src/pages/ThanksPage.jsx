import thankYou from '../assets/images/icon-thank-you.svg';
import '../styles/ThanksPage.css';

export default function ThanksPage() {
  return (
    <section className='thanksPage'>
      <img src={thankYou} alt='thank you' />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform.If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
}
