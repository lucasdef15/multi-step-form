/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectAllAddOns, addAddOns, selectPayment } from './formsSlice';
import AddOns from '../../components/AddOns';

export default function AddOnsForm() {
  const addOns = useSelector(selectAllAddOns);
  const payment = useSelector(selectPayment);

  const dispatch = useDispatch();

  const [checkedList, setCheckedList] = useState(addOns.map(() => false));

  const onChangeCheck = (index, id) => {
    const newCheckedList = [...checkedList];
    newCheckedList[index] = !newCheckedList[index];
    setCheckedList(newCheckedList);

    dispatch(addAddOns(id, newCheckedList[index]));
  };

  return (
    <section className='main_content'>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <section>
        {addOns.map((addOn, index) => {
          return (
            <AddOns
              key={addOn.service}
              addOn={addOn}
              payment={payment}
              onChangeCheck={() => onChangeCheck(index, addOn.id)}
              checked={addOn.selected}
            />
          );
        })}
      </section>
    </section>
  );
}
