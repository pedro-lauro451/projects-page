import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs';

const Portfolio = () => {
    return(
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="portfolio"
                icon={<BsInfoCircleFill size={30} />} />
        </section>
    )
}

export default Portfolio;  