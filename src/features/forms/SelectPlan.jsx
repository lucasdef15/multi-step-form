/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { addPlan, addPayment } from './formsSlice';
import { selectAllPlans, selectPayment } from './formsSlice';
import Plans from '../../components/Plans';
import PaymentToggle from '../../components/PaymentToggle';

export default function SelectPlan() {
  const dispatch = useDispatch();

  const plans = useSelector(selectAllPlans);
  const payment = useSelector(selectPayment);

  const handlePlanClick = (plan) => {
    dispatch(addPlan(plan.id));
  };

  function onChange() {
    dispatch(addPayment());
  }

  return (
    <section className='main_content'>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing</p>

      <Plans
        plans={plans}
        handlePlanClick={handlePlanClick}
        payment={payment}
      />
      <PaymentToggle payment={payment} onChange={onChange} />
    </section>
  );
}
