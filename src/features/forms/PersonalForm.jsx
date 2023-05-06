import { useForm } from 'react-hook-form';
import '../../styles/PersonalForm.css';
import Button from '../../components/Button';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
});

export default function PersonalForm() {
  const { register, handleSubmit, formState } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const { errors, isSubmitting } = formState;

  console.log('errors', errors);

  const handleSubmitData = (data) => {
    console.log('submit', data);
  };

  return (
    <section className="main_content">
      <div>
        <h2>Personal info</h2>
        <p className="space">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <form className="personal-form" onSubmit={handleSubmit(handleSubmitData)}>
        <label htmlFor="fullName">Name</label>
        <input
          {...register('fullName')}
          className="personal-input"
          type="text"
          id="fullName"
          placeholder="e.g.Stephen King"
        />

        <label htmlFor="email">Email Address</label>
        <input
          {...register('email')}
          type="email"
          className="personal-input"
          id="email"
          placeholder="e.g.stephenking@lorem.com"
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          {...register('phoneNumber')}
          type="tel"
          id="phoneNumber"
          className="personal-input"
          placeholder="e.g.+1 234 567 890"
        />
        <Button />
      </form>
    </section>
  );
}
