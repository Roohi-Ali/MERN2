import { Link } from "react-router-dom";

function NavBar() {
    return(
        <>
        <div className="nav-bar">
            <ul >
                <li><Link className='alink' to='/'>Home</Link></li>
                <li><Link className='alink' to='/about'>About</Link></li>
                <li><Link className='alink' to='/contact'>Contact Us</Link></li>
                <li><Link className='alink' to='/login'>Login</Link></li>
            </ul>
        </div>
        </>
    )
}

export default NavBar;