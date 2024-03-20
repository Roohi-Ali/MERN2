
import {NavLink} from 'react-router-dom'

function Sidebar({itemName}) {
    
    return(
    <div className='sidebar'>
        <ul>{itemName.map((e,index)=>
            <li key={index}><NavLink to={`/task6/${e}`}>{e}</NavLink></li>
            )}
        </ul>
    </div>
    )
}

export default Sidebar