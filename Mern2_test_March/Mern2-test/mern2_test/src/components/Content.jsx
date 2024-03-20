import { Routes, Route} from 'react-router-dom'

function Content({menuDetails}) {

    const DynamicComp = ({name,items})=>{
        const a_item = items.filter((el)=>{return el.name == name})
        return (<div>{a_item.map((el)=>el.details)}</div>)
    }

    return (
        <div className='content'>
            <h3>Content</h3>
            <Routes>
                {menuDetails.map( (el,index)=>
                <Route key={index} path={`/${el.name}`} element={<DynamicComp name={el.name} items ={menuDetails}/>}></Route>   
                )}
            </Routes>

        </div>
    )
}
export default Content
