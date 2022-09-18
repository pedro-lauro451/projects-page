import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const data = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'About',
        to: '/about'
    },
    {
        label: 'Resume',
        to: '/resume'
    },
    {
        label: 'Skills',
        to: '/skills'
    },
    {
        label: 'Portfolio',
        to: '/portfolio'
    },
    {
        label: 'Contact',
        to: '/contact'
    }
];

const Navbar = () => {
    return(
        <div>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to={'/'} className='navbar__container__logo'>
                    <FaReact size={30}/>
                    </Link>
                </div>
                <ul className='navbar__container__menu'>
                    {
                        data.map((item, key)=>(
                            <li key={key} className='navbar__container__menu__item'>
                                <Link to={item.to} className='navbar__container__menu__item__links'>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;