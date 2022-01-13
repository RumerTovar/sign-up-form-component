import { useForm } from '../hooks/useForm';
import Inputs from './Inputs';

const initialForm = {
 firstName: '',
 firstNameValid: null,
 lastName: '',
 lastNameValid: null,
 email: '',
 emailValid: null,
 password: '',
 passwordValid: null,
};

const ContactForm = () => {
 const { form, errors, handleChange, handleBlur, handleSubmit } =
  useForm(initialForm);

 return (
  <div>
   <form onSubmit={handleSubmit}>
    <Inputs
     type='text'
     name='firstName'
     placeholder='First Name'
     onBlur={handleBlur}
     onChange={handleChange}
     value={form.firstName}
     errors={errors}
    />
    <Inputs
     type='text'
     name='lastName'
     placeholder='Last Name'
     onBlur={handleBlur}
     onChange={handleChange}
     value={form.lastName}
     errors={errors}
    />
    <Inputs
     type='email'
     name='email'
     placeholder='email'
     onBlur={handleBlur}
     onChange={handleChange}
     value={form.email}
     errors={errors}
    />
    <Inputs
     type='text'
     name='password'
     placeholder='Password'
     onBlur={handleBlur}
     onChange={handleChange}
     value={form.password}
     errors={errors}
    />

    <input type='submit' value='CLAIM YOUR FREE TRIAL' />
   </form>
  </div>
 );
};

export default ContactForm;
