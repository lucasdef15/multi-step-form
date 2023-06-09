/* eslint-disable react/prop-types */
import "../styles/AddOns.css";

export default function AddOns({ addOns, onChangeCheck, payment }) {
  return (
    <div className='addOn-wrapper'>
      {addOns.map((addOn, index) => (
        <section
          key={addOn.service}
          className='addOn'
          style={{
            borderColor: addOn.selected ? '#544c97' : null,
            background: addOn.selected ? '#f8f9ff' : null,
          }}
        >
          <form>
            <input
              type='checkbox'
              id='addOn-checkbox'
              checked={addOn.selected}
              onChange={() => onChangeCheck(index, addOn.id)}
            />
            <span className='addOn-body'>
              <label htmlFor='addOn-checkbox' className='addOn-title'>
                {addOn.service}
              </label>
              <label htmlFor='addOn-checkbox' className='addOn-description'>
                {addOn.description}
              </label>
            </span>
          </form>
          <span className='addOn-payment'>{`+$${addOn.price}/${
            payment ? 'yr' : 'mo'
          }`}</span>
        </section>
      ))}
    </div>
  );
}
