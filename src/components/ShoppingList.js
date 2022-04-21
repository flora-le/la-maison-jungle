import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList() {
  var categoryList = [];
  plantList.forEach(p => {
    if (!categoryList.includes(p.category)) 
    categoryList.push(p.category)
  });
    return (<div>
        <ul>
          {categoryList.map((cat, index) => (
                <li key={`cat-${index}`}>{cat}</li>
            ))}
        </ul>
        <ul className='lmj-plant-list'>
          {plantList.map((plant, index) => (
              <PlantItem key={`plant-${index}`} name={plant.name} cover={plant.cover} id={plant.id} water={plant.water} light={plant.light} category={plant.category} isBestSale={plant.isBestSale} isSpecialOffer={plant.isSpecialOffer}/> 
            ))}
        </ul>
        </div>
    )
}

export default ShoppingList