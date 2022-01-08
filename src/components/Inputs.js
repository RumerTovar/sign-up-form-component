import React from 'react';

const Inputs = ({
 value,
 name,
 type,
 placeholder,
 defaultValue,
 form,
 setForm,
 regularExpresion,
 error,
 setError,
 errors,
}) => {
 const handleChange = (e) => {
  setForm({
   ...form,
   [e.target.name]: e.target.value,
  });
 };

 const validation = (e) => {
  if (regularExpresion) {
   if (regularExpresion.test(form[e.target.name])) {
    //all ok
    setForm({ ...form, [`${e.target.name}Valid`]: true });
   } else {
    console.log('false');
    setForm({ ...form, [`${e.target.name}Valid`]: false });
    setError({ ...errors });
   }
  }
 };

 return (
  <>
   <input
    name={name}
    type={type}
    placeholder={placeholder}
    defaultValue={defaultValue}
    value={value}
    onChange={handleChange}
    onKeyUp={validation}
    onBlur={validation}
   />
   {name === 'submit' ? null : form[`${name}Valid`] === false ? (
    <label htmlFor={name}>{error[name]}</label>
   ) : null}
  </>
 );
};

export default Inputs;
