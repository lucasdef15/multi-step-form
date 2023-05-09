/* eslint-disable react/prop-types */
import { selectAllPlans, selectPayment, selectAllAddOns } from './formsSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import '../../styles/Summary.css';

export default function Summary() {
  const plans = useSelector(selectAllPlans);
  const payment = useSelector(selectPayment);
  const addOns = useSelector(selectAllAddOns);

  let planContent = plans.find((plan) => plan.selected === true);
  let addOnContent = addOns.filter((addOn) => addOn.selected === true);

  const navigate = useNavigate();

  function renderPlan() {
    if (planContent === undefined && addOnContent.length === 0) {
      return (
        <div>
          <h2 style={{ fontSize: '1rem', color: 'tomato' }}>
            Please select a plan
          </h2>
        </div>
      );
    } else if (planContent === undefined) {
      return (
        <div>
          <h2 style={{ fontSize: '1rem', color: 'tomato' }}>
            Please select a plan
          </h2>
        </div>
      );
    } else {
      return (
        <div className="plan_summary">
          <div>
            <h4>{`${planContent.category} (${
              payment ? 'Yearly' : 'Monthly'
            })`}</h4>
            <Link to="/select-plan">Change</Link>
          </div>
          <div>
            <p>{`$${planContent.price}/${payment ? 'yr' : 'mo'}`}</p>
          </div>
        </div>
      );
    }
  }

  function renderAddOnd() {
    if (addOnContent === null) {
      return null;
    }

    return addOnContent.map((addOn) => {
      return (
        <div key={addOn.id} className="addOn-summary">
          <h5>{addOn.service}</h5>
          <p>{`+$${addOn.price}/${payment ? 'yr' : 'mo'}`}</p>
        </div>
      );
    });
  }

  function renderTotal() {
    let totalAddOns = 0;
    let totalPlan = 0;
    if (addOnContent.length !== 0) {
      totalAddOns = addOnContent
        .map((addOn) => addOn.price)
        .reduce((acc, cur) => acc + cur);
    }
    if (planContent !== undefined) {
      totalPlan = planContent.price;
    }

    return (
      <div className="total-summary">
        <h6>{`Total ${payment ? '(per year)' : '(per month)'}`}</h6>
        <p>{`+$${totalAddOns + totalPlan}/${payment ? 'yr' : 'mo'}`}</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thanks-page');
  };

  return (
    <section className="main_content">
      <div>
        <h2>Finishing up</h2>
        <p className="space">
          Double-check everything looks OK before cofirming.
        </p>
      </div>
      <form className="content" onSubmit={handleSubmit}>
        <section className="summary">
          {renderPlan()}
          {renderAddOnd()}
        </section>
        {renderTotal()}
        <Button />
      </form>
    </section>
  );
}
