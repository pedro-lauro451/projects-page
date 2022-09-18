import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs';
import './styles.scss';

const jobSummary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim leo non interdum tempus. Fusce aliquet mi tincidunt, iaculis eros sed, dapibus tellus. Nam malesuada, leo vel fringilla hendrerit, nibh dui fringilla lectus, sit amet auctor nisl eros sit amet ipsum. Vestibulum ut turpis malesuada, tincidunt dui eu, commodo arcu. Sed imperdiet euismod risus. Maecenas dignissim luctus ligula, in pellentesque ante tempor eget. Morbi sed pretium nisl. Ut facilisis mi a massa lacinia, in rhoncus ex aliquet. "
const personalDetails = [
    {
        label: 'Name',
        value: 'Pedro Lauro Nunes Duarte'
    },
    {
        label: 'Age',
        value: '25'
    },
    {
        label: 'Address',
        value: 'São Paulo, SP'
    },
    {
        label: 'Email',
        value: 'pedro.lauro451@gmail.com'
    }
];


const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About me"
                icon={<BsInfoCircleFill size={30} />} />

            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <h3>Front End Dev</h3>
                    <p>{jobSummary}</p>
                    <h3 className="personalInformation">Personal info</h3>
                    <ul>
                        {personalDetails.map((item, i) => (
                            <li key={i}>
                                <span className="title">{item.label + ":"}</span>
                                <span className="value">{item.value}</span>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About; 