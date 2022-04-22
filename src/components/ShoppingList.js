import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div className='lmj-shopping-list'>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price }) => (<div key={id}>
					<PlantItem
						key={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
						price={price}
					/>
					<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
