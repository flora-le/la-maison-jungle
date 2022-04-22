import '../styles/Categories.css'

function Categories({ categories, selectedCategory, updateSelectedCategory }) {
    function changeCategory(e) {
        console.log("changeCat",e.target.value)
        updateSelectedCategory(e.target.value)
    }
    
    return (
        <div className='lmj-categories'>
            <select className='lmj-categories-select' onChange={(e) => changeCategory(e)} value={selectedCategory} >
                <option key="all">all</option>
                {categories.map((cat) => (
                    // <option key={cat}>{cat[0].toUpperCase() + cat.slice(1)}</option>
                    <option key={cat}>{cat}</option>
                ))}
            </select>
            <button onClick={()=> updateSelectedCategory("all")}>Reset</button>
        </div>
      
    )
}

export default Categories