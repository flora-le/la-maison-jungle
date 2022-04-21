import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'

function ShoppingList() {
  var categoryList = [];
  plantList.forEach(p => {
    if (!categoryList.includes(p.category)) 
    categoryList.push(p.category)
  });
    return (<div>
        <ul>
          {categoryList.map((category, index) => (
                <li key={category}>{ category }</li>
            ))}
        </ul>
        <ul className='lmj-plant-list'>
          {plantList.map((plant, index) => (
                <li key={`${plant.name}-${index}`} className='lmj-plant-item'>{ plant.name }
                  {(plant.isBestSale || plant.category === "classique") && <span>🔥</span>}
                  {plant.isSpecialOffer  && <div className='lmj-sales'>Soldes</div>}
                </li>
            ))}
        </ul>
        </div>
    )
}

export default ShoppingList