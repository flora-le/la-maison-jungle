import Banner from './Banner'
//import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/App.css';
import logo from '../assets/logo.png'

function App() {
  return (<div>
  <Banner>
    <img src={logo} alt='La maison jungle' className='lmj-logo' />
		<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
    { /*<Cart/>*/}
       <ShoppingList/>
       <Footer/>
     </div>
  );
}

export default App;
