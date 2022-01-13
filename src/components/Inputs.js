const Inputs = ({
 type,
 name,
 placeholder,
 onBlur,
 onChange,
 value,
 errors,
}) => {
 let styles = {
  fontWeight: 'bold',
  color: '#dc3545',
 };

 return (
  <>
   <input
    type={type}
    name={name}
    placeholder={placeholder}
    onBlur={onBlur}
    onChange={onChange}
    value={value}
   />
   {errors[name] && <p style={styles}>{errors[name]}</p>}
  </>
 );
};

export default Inputs;
