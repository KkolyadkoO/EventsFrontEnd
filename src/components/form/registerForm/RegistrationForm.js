import './RegisterForm.css'

const RegistrationForm = () => {
    return (  
    <form className='RegistrationForm'>
        <h1>Registration</h1>
        <input type="text" placeholder="Enter Login"></input>
        <input type="text" placeholder="Enter Email"></input>
        <input type="password" placeholder="Enter Password"></input>
        <button type="submit">Register</button>
    </form> 
    );
}
 
export default RegistrationForm;