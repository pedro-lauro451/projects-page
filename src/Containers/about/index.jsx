import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs';
import './styles.scss';

const jobSummary = "Hello, my name is Pedro and I am a programming student aiming to become a full stack developer."
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
    ,
    {
        label: 'Phone',
        value: "+55 (11) 98840-6610"
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