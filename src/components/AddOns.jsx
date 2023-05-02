/* eslint-disable react/prop-types */

export default function AddOns({ addOn, onChangeCheck, checked, payment }) {
  return (
    <div>
      <form>
        <input type='checkbox' checked={checked} onChange={onChangeCheck} />
        <h3>{addOn.service}</h3>
        <p>{addOn.description}</p>
      </form>
      <span className='payment'>{`$${addOn.price}/${
        payment ? 'yr' : 'mo'
      }`}</span>
    </div>
  );
}
