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
  <section className='formContainer'>
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
     placeholder='Email Address'
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

    <input className='submit' type='submit' value='CLAIM YOUR FREE TRIAL' />
   </form>
   <footer>
    <p>
     By clicking the button, you are agreeing to our
     <span className='Terms'> Terms and Services</span>
    </p>
   </footer>
  </section>
 );
};

export default ContactForm;
