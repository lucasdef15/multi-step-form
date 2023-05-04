/* eslint-disable react/prop-types */
import { selectAllPlans, selectPayment, selectAllAddOns } from './formsSlice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Summary() {
  const plans = useSelector(selectAllPlans);
  const payment = useSelector(selectPayment);
  const addOns = useSelector(selectAllAddOns);

  function renderPlan() {
    let planContent = plans.find((plan) => plan.selected === true);

    if (planContent === undefined) {
      return null; // add a component to say that you havent yet chosen a plan
    }
    return (
      <div className='category_body'>
        <h4>{`${planContent.category} (${payment ? 'Yearly' : 'Monthly'})`}</h4>
        <Link to='/select-plan'>Change</Link>
        <p className='payment'>{`$${planContent.price}/${
          payment ? 'yr' : 'mo'
        }`}</p>
      </div>
    );
  }

  function renderAddOnd() {
    let addOnContent = addOns.filter((addOn) => addOn.selected === true);

    if (addOnContent === null) {
      return null;
    }

    return addOnContent.map((addOn) => {
      return (
        <div key={addOn.id}>
          <p>{addOn.service}</p>
          <p className='payment'>{`$${addOn.price}/${
            payment ? 'yr' : 'mo'
          }`}</p>
        </div>
      );
    });
  }

  return (
    <section className='main_content'>
      <h2>Finishing up</h2>
      <p className='space'>
        Double-check everything looks OK before cofirming.
      </p>
      {renderPlan()}
      {renderAddOnd()}
    </section>
  );
}
