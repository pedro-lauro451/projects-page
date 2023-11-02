import imageZero from '../../images/planet_facts.png';
import imageOne from '../../images/pwd-generator.jpg';
import imageFour from '../../images/sales-dashboard.jpg';
import imageFive from '../../images/countries-list.jpg';
import PageHeaderContent from "../../Components/pageHeaderContent";

import { BsBullseye } from 'react-icons/bs';

import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiJson } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

import './styles.scss';
import { useState } from 'react';

const Portfolio = (props) => {

    const HtmlIcon = SiHtml5;
    const CssIcon = SiCss3;
    const JavascriptIcon = SiJavascript;
    const JSONIcon = SiJson;
    const ReactIcon = FaReact;
    const MongoIcon = SiMongodb;

    const portfolioData = [
        {
            id: 2,
            name: props.projectsContentProp[1].content,
            link: "https://pedro-lauro451.github.io/planet_facts/",
            description: props.projectsContentProp[4].content,
            image: imageZero,
            uses: [HtmlIcon,CssIcon,JavascriptIcon,JSONIcon]
        },
        {
            id: 2,
            name: "Dashboard",
            link: "https://sales-dashboard.onrender.com",
            description: props.projectsContentProp[9].content,
            image: imageFour,
            uses: [ReactIcon,CssIcon,MongoIcon]
        },
        {
            id: 2,
            name: props.projectsContentProp[2].content,
            link: "https://pedro-lauro451.github.io/password-generator/",
            description: props.projectsContentProp[5].content,
            image: imageOne,
            uses: [HtmlIcon,CssIcon,JavascriptIcon]
        },
        {
            id: 2,
            name: props.projectsContentProp[12].content,
            link: "https://whereintheworld-alhx.onrender.com/",
            description: props.projectsContentProp[13].content,
            image: imageFive,
            uses: [ReactIcon, CssIcon, JSONIcon]
        }
    ];

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

    function handleFilter(currentId)
    {
        setFilteredValue(currentId);
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
                            className="portfolio__content__cards__item">

                                <div className="portfolio__content__cards__item__name">
                                    <a href={item.link} target="_blank">
                                        {item.name}
                                    </a>
                                </div>

                                <div className='portfolio__content__cards__item__img-wrapper'>
                                    <a href={item.link} target="_blank">
                                        <img src={item.image}/>
                                    </a>
                                </div>

                                <div className="portfolio__content__cards__item__description">
                                    <a href={item.link} target="_blank">
                                        {item.description}
                                    </a>
                                </div>

                                <div className="portfolio__content__cards__item__icon">
                                <a href={item.link} target="_blank">
                                {item.uses.map((icon, index) => 
                                {
                                    const IconTag = icon;
                                    return(
                                        <IconTag size={30} key={index}></IconTag>
                                    );
                                }
                                )}
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