import { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { GiBrazilFlag, GiUsaFlag } from "react-icons/gi";
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = (props) => {
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
            label: 'Projects',
            to: '/portfolio'
        },
        // {
        //     label: 'Contact',
        //     to: '/contact'
        // }
    ];
    const dataPort = [
        {
            label: 'Home',
            to: '/'
        },
        {
            label: 'Sobre',
            to: '/about'
        },
        {
            label: 'Currículo',
            to: '/resume'
        },
        {
            label: 'Conhecimentos',
            to: '/skills'
        },
        {
            label: 'Projetos',
            to: '/portfolio'
        },
    ];
    const [toggleIcon, setToggleIcon] = useState(false);
    const [toggleLangIcon, setToggleLangIcon] = useState(true);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    const handleToggleLangIcon = () => {
        setToggleLangIcon(!toggleLangIcon);
        props.onLangToggle(toggleLangIcon);
    };

    return(
        <div>
            <nav className={`navbar ${toggleIcon ? 'active' : ""}`}>
                <div className='navbar__container'>
                    <Link to={'/'} className='navbar__container__logo'>
                    <FaReact size={30}/>
                    </Link>

                    <Link className='navbar__container__logo'>
                    {
                        toggleLangIcon ? <GiBrazilFlag size={30} onClick={handleToggleLangIcon}/> : <GiUsaFlag size={30} onClick={handleToggleLangIcon}/>
                    }
                    </Link>
                </div>
                <ul className= {`navbar__container__menu ${toggleIcon ? 'active' : ""} ` }>
                    {
                        toggleLangIcon ?
                        data.map((item, key)=>(
                            <li key={key} className='navbar__container__menu__item'>
                                <Link to={item.to} className='navbar__container__menu__item__links'>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                        :
                        dataPort.map((item, key)=>(
                            <li key={key} className='navbar__container__menu__item'>
                                <Link to={item.to} className='navbar__container__menu__item__links'>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='nav-icon' onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar;