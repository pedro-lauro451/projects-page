import './styles.scss';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate('/portfolio');
    }

    return(
            <section id="home" className="home">
                <div className="home__text-wrapper">
                    <h1>
                    plauro451 projects page
                    </h1>
                    <div className='home__text-wrapper__icons'>
                        <span>
                            <a href="https://www.linkedin.com/in/plauro-nunes/" target="_blank">
                                <BsLinkedin size={30}/>
                            </a>
                        </span>

                        <span>
                            <a href="https://github.com/pedro-lauro451" target="_blank">
                                <BsGithub size={30}/>
                            </a> 
                        </span>

                        <span>
                            <a href="https://www.instagram.com/lauronunes451/" target="_blank">
                                <BsInstagram size={30}/>
                            </a>
                        </span>
                    </div>

                    <span className="home__contact-me">
                        <button onClick={handleNavigate}>Projects</button>
                        <a href="mailto:pedro.lauro451@gmail.com">
                            <button>Contact Me</button>
                        </a>
                    </span>
                </div>
             </section>
    )
}

export default Home;