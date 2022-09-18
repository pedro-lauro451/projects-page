import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs';

const Contact = () => {
    return(
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="contact"
                icon={<BsInfoCircleFill size={30} />} />
        </section>
    )
}

export default Contact;