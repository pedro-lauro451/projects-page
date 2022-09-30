import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsChatSquareTextFill } from 'react-icons/bs';

const Contact = () => {
    return(
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="contact"
                icon={<BsChatSquareTextFill size={30} />} />
        </section>
    )
}

export default Contact;