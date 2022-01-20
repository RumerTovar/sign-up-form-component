import { useState } from 'react';

export const useForm = (initialForm) => {
 const [form, setForm] = useState(initialForm);
 const [errors, setErrors] = useState({});

 const validateForm = (form, target) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword = /^.{4,12}$/; // 4 to 12 digits

  const firstNameValidation = () => {
   if (!form.firstName.trim()) {
    errors.firstName = 'First Name cannot be empty';
   } else if (!regexName.test(form.firstName.trim())) {
    errors.firstName = "The 'First Name' field only accepts letters and blanks";
   } else {
    errors.firstName = true;
   }
  };

  const lastNameValidation = () => {
   if (!form.lastName.trim()) {
    errors.lastName = 'Last Name cannot be empty';
   } else if (!regexName.test(form.lastName.trim())) {
    errors.lastName = "The 'Last Name' field only accepts letters and blanks";
   } else {
    errors.lastName = true;
   }
  };

  const emailValidation = () => {
   if (!form.email.trim()) {
    errors.email = 'Email cannot be empty';
   } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'Looks like this is not an email';
   } else {
    errors.email = true;
   }
  };

  const passwordValidation = () => {
   if (!form.password.trim()) {
    errors.password = 'Password cannot be empty';
   } else if (!regexPassword.test(form.password.trim())) {
    errors.password = 'The password must contain at least 4 digits, maximum 12';
   } else {
    errors.password = true;
   }
  };

  const validateAll = () => {
   firstNameValidation();
   lastNameValidation();
   emailValidation();
   passwordValidation();
  };

  const selectValidation = (target) => {
   const validations = {
    firstName: firstNameValidation,
    lastName: lastNameValidation,
    email: emailValidation,
    password: passwordValidation,
    undefined: validateAll,
   };

   const select = validations[target];

   return select();
  };

  selectValidation(target);

  return errors;
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({
   ...form,
   [name]: value,
  });
 };

 const handleBlur = (e) => {
  let target = e.target.name;
  let objKey = Object.keys(validateForm(form, target));
  let objValue = Object.values(validateForm(form, target));
  setErrors({
   ...errors,
   [objKey[0]]: objValue[0],
  });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  setErrors(validateForm(form, undefined));
  if (
   errors.firstName === true &&
   errors.lastName === true &&
   errors.email === true &&
   errors.password === true
  ) {
   alert('submitting form');
  } else {
   console.log('wrong form');
   return;
  }
 };

 return {
  form,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
 };
};
