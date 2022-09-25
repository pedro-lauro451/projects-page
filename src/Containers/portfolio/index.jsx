import imageOne from '../../images/pwd-generator.png';
import imageTwo from '../../images/mockup.png';
import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs';
import './styles.scss';
import { useState } from 'react';

const portfolioData = [
    {
        id: 2,
        name: "Password Generator",
        image: imageOne
    },
    {
        id: 3,
        name: "Mockup",
        image: imageTwo
    }
];

const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Done'
    },
    {
        filterId: 3,
        label: 'In-Progress'
    }
];

const Portfolio = () => {

    const [filteredValue, setFilteredValue] = useState(1);

    function handleFilter(currentId)
    {
        setFilteredValue(currentId);
    };

    return(
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="portfolio"
                icon={<BsInfoCircleFill size={30} />} />
            <div className="portfolio__content">
                <ul className='portfolio__content__filter'>

                    {
                        filterData.map(item => (
                            <li onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }

                </ul>
                <div className='portfolio__content__cards'>
                    {
                        portfolioData.map((item)=>(
                            <div key={item.id} className="portfolio__content__cards__item">

                                <div className='portfolio__content__cards__item__img-wrapper'>
                                    <a>
                                        <img src={item.image}/>
                                    </a>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio;  