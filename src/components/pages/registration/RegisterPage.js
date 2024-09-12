import Header from '../../header/Header';
import Footer from '../../footer';
import RegistrationForm from "../../form/registerForm/RegistrationForm";
import './RegisterPage.css';



const RegisterPage = () => {
    return ( 
        <div className='wrapper'>
      <Header />
      <div className='content'>
        <RegistrationForm />
      </div>
      <Footer />
    </div>
     );
}
 
export default RegisterPage;