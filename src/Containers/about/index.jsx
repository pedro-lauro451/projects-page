import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs';
import './styles.scss';

const personalDetails = [
    {
        label: 'Name',
        value: 'Pedro Lauro Nunes Duarte'
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


const About = (props) => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText={props.AboutContentProp[0].content}
                icon={<BsInfoCircleFill size={30} />} />

            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <h3>{props.AboutContentProp[1].content}</h3>
                    <p>{props.AboutContentProp[2].content}</p>
                    <h3 className="personalInformation">{props.AboutContentProp[3].content}</h3>
                    <ul>
                        {personalDetails.map((item, i) => (
                            <li key={i}>
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