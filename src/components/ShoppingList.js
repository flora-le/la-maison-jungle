import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import { useState } from 'react'

function ShoppingList({ cart, updateCart }) {
	const [selectedCategory, updateSelectedCategory] = useState("all")

	const categories = plantList.reduce(
    (acc, plant) =>//accumulator + currentVal
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
    )

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) { //if already in cart
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)//duplicate array without plant
			updateCart([
				...cartFilteredCurrentPlant, {name, price, amount : currentPlantAdded.amount +1}
			]) //combining array with (3 dots) spread operator  ,new qty = previous qty +1
		} else {
			updateCart([...cart, {name, price, amount:1}])
		}
	}

 	const filterCategory = plantList.filter((plant) => plant.category === selectedCategory)
	const displayPlant = plantList.map(({ id, cover, name, water, light, price }) => (
						<div key={id}>
							<PlantItem
								key={id}
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
						))
		
	return (
		<div className='lmj-shopping-list'>
			<Categories categories={categories} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory}/>
			<ul className='lmj-plant-list'>
				{selectedCategory === "all" ? displayPlant :
					filterCategory.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem
							key={id}
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
					))
				}
			</ul>
		</div>
	)
}

export default ShoppingList
