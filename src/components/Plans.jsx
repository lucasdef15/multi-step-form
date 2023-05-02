/* eslint-disable react/prop-types */
import '../styles/Plans.css';
export default function Plan({ plans, handlePlanClick, payment }) {
  return (
    <section className='plans'>
      {plans.map((plan) => (
        <div
          key={plan.category}
          className='category'
          onClick={() => handlePlanClick(plan)}
          style={{ borderColor: plan.selected ? '#112f56' : '#e3e1ef' }}
        >
          <img src={plan.img} className='icon' />
          <div className='category_body'>
            <h4>{plan.category}</h4>
            <p className='payment'>{`$${plan.price}/${
              payment ? 'yr' : 'mo'
            }`}</p>
            {payment ? <p className='blue'>2 months free</p> : null}
          </div>
        </div>
      ))}
    </section>
  );
}
