import iconError from '../images/icon-error.svg';

const Inputs = ({
 type,
 name,
 placeholder,
 onBlur,
 onChange,
 value,
 errors,
}) => {
 const className = () => {
  if (errors[name] === undefined || errors[name] === true) {
   return 'input';
  }
  return 'error';
 };

 return (
  <>
   <input
    className={className()}
    type={type}
    name={name}
    placeholder={placeholder}
    onBlur={onBlur}
    onChange={onChange}
    onKeyUp={onBlur}
    value={value[name]}
   />
   {errors[name] === undefined || errors[name] === true ? null : (
    <>
     <div className='parent'>
      <img className='iconError' src={iconError} alt='' />
     </div>
     <div className='error'>
      <p className='errorContent'> {errors[name]}</p>
     </div>
    </>
   )}
  </>
 );
};

export default Inputs;
