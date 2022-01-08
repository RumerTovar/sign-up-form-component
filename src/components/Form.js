import React, { useState } from 'react';
import Inputs from './Inputs';

const initailForm = {
 firstName: '',
 firstNameValid: null,
 lastName: '',
 lastNameValid: null,
 email: '',
 emailValid: null,
 password: '',
 passwordValid: null,
 submit: 'CLAIM YOUR FREE TRIAL',
};

const errors = {
 firstName: 'You can only enter letters',
 lastName: 'You can only enter letters',
 email: 'Looks like this is not an email',
 password: 'The password must contain at least 4 digits, maximum 12',
};

const Form = () => {
 const [form, setForm] = useState(initailForm);
 const [error, setError] = useState(errors);

 const onSubmit = (e) => {
  e.preventDefault();

  if (
   form.firstNameValid === true &&
   form.lastNameValid === true &&
   form.emailValid === true &&
   form.passwordValid === true
  ) {
   console.log('ok');
  } else {
   if (!form.firstName.trim()) {
    console.log('firstName');
    setForm({ firstNameValid: false });
    setError({ firstName: 'First name cannot be empty' });
   }

   if (!form.lastName.trim()) {
    console.log('lastName');

    setForm({ lastNameValid: false });
    setError({ lastName: 'Last name cannot be empty' });
   }

   if (!form.email.trim()) {
    console.log('email');

    setForm({ emailValid: false });
    setError({ email: 'Email cannot be empty' });
   }

   if (!form.password.trim()) {
    console.log('password');

    setForm({ passwordValid: false });
    setError({
     password: 'The password must contain at least 4 digits, maximum 12',
    });
   }
  }
 };

 const expressions = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // letters, numbers, spaces and accents.
  password: /^.{4,12}$/, // 4 to 12 digits
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/, // 7 to 14 numbers.
 };

 return (
  <>
   <form onSubmit={onSubmit}>
    <Inputs
     name='firstName'
     type='text'
     placeholder='First Name'
     defaultValue={form.firstName}
     error={error}
     errors={errors}
     setError={setError}
     form={form}
     setForm={setForm}
     regularExpresion={expressions.name}
    />
    <Inputs
     name='lastName'
     defaultValue={form.lastName}
     type='text'
     placeholder='Last Name'
     error={error}
     errors={errors}
     setError={setError}
     form={form}
     setForm={setForm}
     regularExpresion={expressions.name}
    />
    <Inputs
     name='email'
     defaultValue={form.email}
     type='email'
     placeholder='Email Address'
     error={error}
     errors={errors}
     setError={setError}
     form={form}
     setForm={setForm}
     regularExpresion={expressions.email}
    />
    <Inputs
     name='password'
     defaultValue={form.password}
     type='password'
     placeholder='Password'
     error={error}
     errors={errors}
     setError={setError}
     form={form}
     setForm={setForm}
     regularExpresion={expressions.password}
    />
    <Inputs name='submit' type='submit' value={form.submit} />
   </form>
   <p>By clicking the button, you are agreeing to our Terms and Services</p>
  </>
 );
};

export default Form;
