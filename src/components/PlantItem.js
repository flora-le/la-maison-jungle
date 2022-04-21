import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({name, cover,id,water,light,category,isBestSale,isSpecialOffer }){
  return (
 <li key={`${name}-${id}`} className='lmj-plant-item'>
                <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover"/>            { name }     
                  {(isBestSale || category === "classique") && <span>🔥</span>}
                                {isSpecialOffer  && <div className='lmj-sales'>Soldes</div>}
              <div>                  
              <CareScale careType='water' scaleValue={water} />
              <CareScale careType='light' scaleValue={light} />
              </div>
    </li>
    );
}

export default PlantItem