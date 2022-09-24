import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs';
import { skillsData } from "./utils";
import './styles.scss';

const Skills = () => {
    return(
        <section id="skills" className="skills">
            <PageHeaderContent 
            headerText="Skills"
            icon={<BsInfoCircleFill size={30}/>}/>
            <div className="skills__content-wrapper">
                {
                    skillsData.map((item,i) =>(
                        <div key={i} className="skills__content-wrapper__inner-content">
                            <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
                            <div className="skills__content-wrapper__inner-content__category-text__item-text">
                                {
                                    item.data.map((skillItem,j) =>(
                                        <p key={j}>{skillItem.skillName}</p>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills;