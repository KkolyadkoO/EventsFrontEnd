import Header from '../../header/header';
import Footer from '../../footer/footer';
import LoginForm from '../../loginForm';
import './style.css';


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