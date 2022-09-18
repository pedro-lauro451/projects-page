import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs';

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <PageHeaderContent
                headerText="Resume"
                icon={<BsInfoCircleFill size={30} />} />
        </section>
    )
}

export default Resume;