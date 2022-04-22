import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
  console.log('✨ Ceci est un clic ✨');
  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`);
}

function PlantItem({name, cover,id,water,light,category,isBestSale,isSpecialOffer,price }){
  return (
    <li key={id} className='lmj-plant-item' >
      <span className='lmj-plant-item-price'>{price}€</span>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} onClick={() => handleClick(name)}/>
        { name }
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