import '../css/navbar.css'

const Navbar=()=>{
    return(
        <div className="navbar">
            <h2>PORTFOLIO</h2>
            <ul>
                <li className="nav-list-item trans"><a href="#home">Home</a></li>
                <li className="nav-list-item trans"><a href="#about">About</a></li>
                <li className="nav-list-item trans"><a href="#skills">Skills</a></li>
                <li className="nav-list-item trans"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;