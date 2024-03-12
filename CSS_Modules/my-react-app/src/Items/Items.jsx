import ItemsCSS from './Items.module.css'

function Items(){
    const item1 = "Clothes";
    const item2 = "Shoes";
    const item3 = "Toys";
    return(
        <>
        <div className='card'>
        <ul className={ItemsCSS.items_ul}>
            <li>{item1.toUpperCase()}</li>
            <li>{item2.toUpperCase()}</li>
            <li>{item3.toUpperCase()}</li>
            
        </ul>
        </div>
        </>
    );
}

export default Items