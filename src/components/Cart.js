import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({ cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	function removeFromCart(name, price) {
		const plantToRemove = cart.find((plant) => plant.name === name)
		
		if (plantToRemove && plantToRemove.amount > 1) { //if already in cart
			const index = cart.indexOf(plantToRemove)
			const updatedCart = [...cart];
			console.log(updateCart)
			updatedCart[index] = {name, price, amount : plantToRemove.amount -1}
			updateCart([
				...updatedCart, 
			]) //combining array with (3 dots) spread operator  ,new qty = previous qty +1
		} else {
			const cartRemovedPlant = cart.filter(
			(plant) => plant.name !== name)//new array without plant
			updateCart([...cartRemovedPlant])
		}
	}
	useEffect(() => {
			document.title = `LMJ: ${total}€ d'achats`
		//alert(`J'aurai ${total}€ à payer 💸`)
	}, [total])
	
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			<h2>Cart</h2>
			{
				cart.length > 0 ?
				cart.map(({ name, price, amount }, index) => (
					<div key={`${name}-${index}`}>
						{name} {price}€ x {amount} <button onClick={() => removeFromCart(name, price)}>-</button>
					</div>)
				) 
					: <p>Empty</p>
			}
			<h3>Total : {total}€</h3>
    	<button onClick={() => updateCart([])}>Empty cart</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Open cart
			</button>
		</div>
	)
}

export default Cart
