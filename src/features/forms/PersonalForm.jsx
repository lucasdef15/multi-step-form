import { selectPersonalInfo } from './formsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { changePersonalInfo } from './formsSlice';
import Button from '../../components/Button';
import * as Yup from 'yup';
import { phoneRegExp, fullNameRegExp } from '../../utils/utilities';
import '../../styles/PersonalForm.css';

const schema = Yup.object().shape({
  fullName: Yup.string()
    .required('This field is required')
    .matches(fullNameRegExp, 'Invalid name'),
  email: Yup.string().required('This field is required').email('Invalid email'),
  phoneNumber: Yup.string()
    .required('This field is required')
    .matches(phoneRegExp, 'Invalid phone number'),
});

export default function PersonalForm() {
  const navigate = useNavigate();

  const personalInfo = useSelector(selectPersonalInfo);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: personalInfo,
  });

  const onSubmit = (data) => {
    dispatch(changePersonalInfo(data));
    navigate('/select-plan');
  };

  return (
    <section className="main_content">
      <div>
        <h2>Personal info</h2>
        <p className="space">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form className="personal-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullName">Name</label>
        <input
          {...register('fullName')}
          type="text"
          className={
            errors.fullName ? 'personal-input errorBorder' : 'personal-input'
          }
          placeholder="e.g.Stephen King"
        />
        {errors.fullName && (
          <small className="personalInfoError error">
            {errors.fullName.message}
          </small>
        )}

        <label htmlFor="email">Email Address</label>
        <input
          {...register('email')}
          type="text"
          className={
            errors.email ? 'personal-input errorBorder' : 'personal-input'
          }
          placeholder="e.g.stephenking@lorem.com"
        />
        {errors.email && (
          <small className="personalInfoError error">
            {errors.email.message}
          </small>
        )}

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          {...register('phoneNumber')}
          type="tel"
          className={
            errors.phoneNumber ? 'personal-input errorBorder' : 'personal-input'
          }
          placeholder="e.g.+1 234 567 8900"
        />
        {errors.phoneNumber && (
          <small className="personalInfoError error">
            {errors.phoneNumber.message}
          </small>
        )}
        <Button />
      </form>
    </section>
  );
}
