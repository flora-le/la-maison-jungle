import { useEffect, useState } from 'react'
import '../styles/Footer.css'

function Footer({cart}) {
	const [inputValue, setInputValue] = useState('')

	const handleBlur = (e) => checkEmail(e.target.value);
	
	function checkEmail(value) {
		if (!value.includes('@')) {
			const warning = `Attention, il n'y a pas d'@ dans ' ${value} ', ceci n'est pas une adresse valide.`;
			
			alert(warning);
		}
	}
	//each render
	// useEffect(() => {
	// 	console.log(`alerte s'affiche a chaque rendu`)
	// })
	//first render
	// useEffect(() => {
	// 	console.log(`alerte s'affiche au premier rendu`)
	// }, [])
	//first render and when update cart
	// useEffect(() => {
	// 	console.log(`alert shows first render and cart updates`)
	// }, [cart])
	//when component is removed from DOM
	useEffect(() => {
		return () =>
			console.log(`alert shows when Footer is removed from DOM`)
	},)

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