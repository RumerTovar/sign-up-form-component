import { useState } from 'react';

export const useForm = (initialForm) => {
 const [form, setForm] = useState(initialForm);
 const [errors, setErrors] = useState({});

 const validateForm = (form, target) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword = /^.{4,12}$/; // 4 to 12 digits

  const firstNameValid = () => {
   if (!form.firstName.trim()) {
    errors.firstName = 'First Name cannot be empty';
   } else if (!regexName.test(form.firstName.trim())) {
    errors.firstName = "The 'First Name' field only accepts letters and blanks";
   } else {
    form.firstNameValid = true;
   }
  };

  const lastNameValid = () => {
   if (!form.lastName.trim()) {
    errors.lastName = 'Last Name cannot be empty';
   } else if (!regexName.test(form.lastName.trim())) {
    errors.lastName = "The 'Last Name' field only accepts letters and blanks";
   } else {
    form.lastNameValid = true;
   }
  };

  const emailValid = () => {
   if (!form.email.trim()) {
    errors.email = 'Email cannot be empty';
   } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'Looks like this is not an email';
   } else {
    form.emailValid = true;
   }
  };

  const passwordValid = () => {
   if (!form.password.trim()) {
    errors.password = 'Password cannot be empty';
   } else if (!regexPassword.test(form.password.trim())) {
    errors.password = 'The password must contain at least 4 digits, maximum 12';
   } else {
    form.passwordValid = true;
   }
  };

  const checkAll = () => {
   firstNameValid();
   lastNameValid();
   emailValid();
   passwordValid();
  };

  const selectValidation = (target) => {
   const validations = {
    firstName: firstNameValid,
    lastName: lastNameValid,
    email: emailValid,
    password: passwordValid,
    undefined: checkAll,
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
  setErrors({
   ...errors,
   [Object.keys(validateForm(form, target))]: Object.values(
    validateForm(form, target)
   ),
  });
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  setErrors(validateForm(form, undefined));

  if (
   form.firstNameValid === true &&
   form.lastNameValid === true &&
   form.emailValid === true &&
   form.passwordValid === true
  ) {
   alert('enviando formulario');
  } else {
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
