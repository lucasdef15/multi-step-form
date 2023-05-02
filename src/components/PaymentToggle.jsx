/* eslint-disable react/prop-types */
import '../styles/PaymentToggle.css';

export default function PaymentToggle({ payment, onChange }) {
  return (
    <section className='payment_toggle'>
      <span style={{ color: payment ? '#727171da' : '#112f56' }}>Monthly</span>
      <label className='switch'>
        <input type='checkbox' checked={payment} onChange={onChange} />
        <span className='slider round'></span>
      </label>
      <span style={{ color: payment ? '#112f56' : '#727171da' }}>Yearly</span>
    </section>
  );
}
