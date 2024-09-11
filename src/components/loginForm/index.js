import './style.css'

const LoginForm = () => {
    return (  
    <form>
        <h1>LOG IN</h1>
        <input type="text" placeholder="Enter Login"></input>
        <input type="password" placeholder="Enter Password"></input>
        <button type="submit">Log in</button>
    </form> 
    );
}
 
export default LoginForm;