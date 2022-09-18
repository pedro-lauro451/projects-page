import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs';

const Skills = () => {
    return(
        <section id="skills" className="skills">
            <PageHeaderContent 
            headerText="Skills"
            icon={<BsInfoCircleFill size={30}/>}/>
        </section>
    )
}

export default Skills;