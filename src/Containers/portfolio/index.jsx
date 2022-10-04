import imageOne from '../../images/pwd-generator.jpg';
import imageTwo from '../../images/mockup.jpg';
import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsBullseye } from 'react-icons/bs';
import './styles.scss';
import { useState } from 'react';

const portfolioData = [
    {
        id: 2,
        name: "Password Generator",
        link: "https://pedro-lauro451.github.io/password-generator/",
        image: imageOne
    },
    {
        id: 3,
        name: "Mockup",
        link: "https://pedro-lauro451.github.io/JSONPlaceholder-page/",
        image: imageTwo
    }
];

const Portfolio = (props) => {

    const toggled = props.toggled;

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
            label: 'Doing'
        }
    ];

    const filterDataPort = [
        {
            filterId: 1,
            label: 'Todos'
        },
        {
            filterId: 2,
            label: 'Feitos'
        },
        {
            filterId: 3,
            label: 'Fazendo'
        }
    ];

    const [filteredValue, setFilteredValue] = useState(1);
    const [hoverValue, setHoverValue] = useState();

    function handleFilter(currentId)
    {
        setFilteredValue(currentId);
    };

    function handleHover(index)
    {
        setHoverValue(index);
    };

    const filteredItems = filteredValue === 1 ? portfolioData : portfolioData.filter(item => item.id === filteredValue);

    return(
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText={props.projectsContentProp[0].content}
                icon={<BsBullseye size={30} />} />
            <div className="portfolio__content">
                <ul className='portfolio__content__filter'>

                    {
                        toggled ?
                        filterDataPort.map(item => (
                            <li className={item.filterId === filteredValue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                        :
                        filterData.map(item => (
                            <li className={item.filterId === filteredValue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }

                </ul>
                <div className='portfolio__content__cards'>
                    {
                        filteredItems.map((item,i)=>(
                            <div key={`cardItem${item.name.trim()}`} 
                            className="portfolio__content__cards__item"
                            onMouseEnter={()=>handleHover(i)}
                            onMouseLeave={()=>handleHover(null)}>

                                <div className='portfolio__content__cards__item__img-wrapper'>
                                    <a href={item.link} target="_blank">
                                        <img src={item.image}/>
                                    </a>
                                </div>
                                {/* <div className='overlay'>
                                    {
                                        i === hoverValue && (
                                            <a href={item.link} target="_blank">
                                            <div>
                                                <p>{item.name}</p>
                                            </div>
                                            </a>
                                        )
                                    }
                                </div> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio;  