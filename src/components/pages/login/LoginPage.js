import Header from '../../header/Header';
import Footer from '../../footer';
import LoginForm from "../../form/loginForm/LoginForm";
import './LoginPage.css';


const LoginPage = () => {
    return ( 
        <div className='wrapper'>
      <Header />
      <div className='content'>
        <LoginForm />
      </div>
      <Footer />
    </div>
     );
}
 
export default LoginPage;