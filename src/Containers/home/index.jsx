import './styles.scss';
import {useNavigate} from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/contact');
    }

    return(
            <section id="home" className="home">
                <div className="home__text-wrapper">
                    <h1>
                        Hello, I'm Pedro Lauro<br/>
                        Front End Dev
                    </h1>
                    <span className="home__contact-me">
                        <button onClick={handleNavigate}>Contact me</button>
                    </span>
                </div>
             </section>
    )
}

export default Home;