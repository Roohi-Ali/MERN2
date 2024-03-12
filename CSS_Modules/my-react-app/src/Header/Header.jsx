import HeaderCSS from './Header.module.css'

function Header(){
    return(
        <>
        <header className="card">
            <h1>My-Shop</h1>
            <nav>
                <ul>
                    <li className={HeaderCSS.list}><a href="#">Home</a></li>
                    <li className={HeaderCSS.list}><a href="#">About</a></li>
                    <li className={HeaderCSS.list}><a href="#">Services</a></li>
                    <li className={HeaderCSS.list}><a href="#">Contact</a></li>
                </ul>
                
            </nav>
            
        </header>
        
        </>
    );
}

export default Header