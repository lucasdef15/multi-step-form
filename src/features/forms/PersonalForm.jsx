import '../../styles/PersonalForm.css';

export default function PersonalForm() {
  return (
    <section className='main_content'>
      <h2>Personal info</h2>
      <p className='space'>
        Please provide your name, email address, and phone number.
      </p>

      <form className='personal-form'>
        <label htmlFor='fullName'>Name</label>
        <input
          className='personal-input'
          type='text'
          id='fullName'
          placeholder='e.g.Stephen King'
        />

        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          className='personal-input'
          id='email'
          placeholder='e.g.stephenking@lorem.com'
        />

        <label htmlFor='phoneNumber'>Phone Number</label>
        <input
          type='tel'
          id='phoneNumber'
          className='personal-input'
          placeholder='e.g.+1 234 567 890'
        />
      </form>
    </section>
  );
}
