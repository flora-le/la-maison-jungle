import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
	
	function checkEmail(value) {
    if (!value.includes('@')) {
        const warning = `Attention, il n'y a pas d'@ dans ' ${value} ', ceci n'est pas une adresse valide.`;
        
        alert(warning);
    }
}
	
const handleBlur = (e) => checkEmail(e.target.value);

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input className='lmj-footer-elem' type='email' name='your_email' value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onBlur={handleBlur}
			/>
			<button className='lmj-footer-elem' onClick={() => alert(inputValue)}>Subscribe</button>
		</footer>
	)
}

export default Footer