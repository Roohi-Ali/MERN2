import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'



function MainLayout(){

    const menuDetails = [
        { name: 'Fried Rice', details: 'Fried rice is a popular dish originating from Chinese cuisine, made with cooked rice stir-fried in a wok.' },
        { name: 'Chowmein', details: 'Chow mein is a Chinese stir-fried noodle dish often made with vegetables, meat, or seafood.' },
        { name: 'Noodles', details: 'Noodle Details' },
        { name: 'Beef Steak', details: 'Beef steak is a popular dish made from beef, usually a cut like sirloin, ribeye, or filet, cooked to desired doneness and often served with seasonings or sauces.' },
        { name: 'Fried Fish', details: 'Fried fish is a culinary preparation where fish is coated in batter or breadcrumbs and then deep-fried until crispy and golden brown, offering a delightful combination of tender fish with a crunchy exterior.' }
    ]

    const itemName= []
    const itemDetails=[]
    menuDetails.map((elem)=>{
        itemName.push(elem.name);
        itemDetails.push(elem.details)
    })

    return(
        <div className='mainlayout'>
            <Header/>
            <div className='mainContent'>
                <Sidebar itemName = {itemName}/>
                <Content menuDetails = {menuDetails}/>
            </div>
            
            <hr/>
        </div>
    )
}

export default MainLayout;