import { useForm } from '../hooks/useForm';
import Inputs from './Inputs';

const initialForm = {
 firstName: '',
 lastName: '',
 email: '',
 password: '',
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
     value={form}
     errors={errors}
    />
    <Inputs
     type='text'
     name='lastName'
     placeholder='Last Name'
     onBlur={handleBlur}
     onChange={handleChange}
     value={form}
     errors={errors}
    />
    <Inputs
     type='email'
     name='email'
     placeholder='Email Address'
     onBlur={handleBlur}
     onChange={handleChange}
     value={form}
     errors={errors}
    />
    <Inputs
     type='password'
     name='password'
     placeholder='Password'
     onBlur={handleBlur}
     onChange={handleChange}
     value={form}
     onKeyUp={handleBlur}
     errors={errors}
    />
    <span>
     <input className='submit' type='submit' value='CLAIM YOUR FREE TRIAL' />
    </span>
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
