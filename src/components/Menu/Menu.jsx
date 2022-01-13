import { Link } from 'react-router-dom'
import './menu.styles.css'
const Menu = () => {
    return(
        <ul className="navbar">
            <li>
                <Link to=''>Home</Link>
            </li>

            <li>
                <Link to='/Quiz'>Quiz</Link>
            </li>

            <li>
                <Link to='/Contato'>Contato</Link>
            </li>

            <li>
                <Link to='/Portifolio'>Portfólio</Link>
            </li>
        </ul>
    )
}

export default Menu