/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { addPlan, addPayment } from './formsSlice';
import { selectAllPlans, selectPayment } from './formsSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Plans from '../../components/Plans';
import PaymentToggle from '../../components/PaymentToggle';
import Button from '../../components/Button';

export default function SelectPlan() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const plans = useSelector(selectAllPlans);
  const payment = useSelector(selectPayment);

  const [error, setError] = useState({});

  const handlePlanClick = (plan) => {
    dispatch(addPlan(plan.id));
  };

  function onChange() {
    dispatch(addPayment());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasSelected = plans.some((plan) => plan.selected === true);
    if (hasSelected) {
      navigate('/add-ons');
    } else {
      setError({ message: 'Please select a plan' });
    }
  };

  const renderError = () => {
    if (error && error.message) {
      return <small className="planError error">{error.message}</small>;
    } else {
      return null;
    }
  };

  return (
    <section className="main_content">
      <div>
        <h2>Select your plan</h2>
        <p className="space">
          You have the option of monthly or yearly billing
        </p>
      </div>

      <form className="content" onSubmit={handleSubmit}>
        <Plans
          plans={plans}
          handlePlanClick={handlePlanClick}
          payment={payment}
        />
        {renderError()}
        <PaymentToggle payment={payment} onChange={onChange} />
        <Button />
      </form>
    </section>
  );
}
