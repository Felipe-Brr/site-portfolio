import {Link} from 'react-router-dom'

import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/icons8-hacker-100.png'


function Navbar(){

    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/' element={<Home/>} >
                    <img src={logo}  alt="Home" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/' element={<Home/>} >Home</Link></li>
                    <li className={styles.item}><Link to='/projects' element={<Projects/>} >Projetos</Link></li>
                    <li className={styles.item}><Link to='/contact' element={<Contact/>} >Contato</Link></li>
                </ul>
            </Container>
        </nav>
    )
}
export default Navbar