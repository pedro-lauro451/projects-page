import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import './styles.scss';
import { resumeData } from "./utils";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import {MdWork} from 'react-icons/md';

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <PageHeaderContent
                headerText="Resume"
                icon={<BsFillFileEarmarkPersonFill size={30} />} />
            <div className="timeline">
                <div className="timeline__experience">
                    <h3 className="timeline__experience__header-text">Experience</h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--green-theme-main-color)">
                    {
                        resumeData.experience.map((item,i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__experience__vertical-timeline-element"
                            contentStyle={{
                                background: 'var(--green-theme-background-color)',
                                border: '1.5px solid var(--green-theme-main-color)',
                                boxShadow: 'none'
                            }}
                            date="2020 - Present"
                            icon={<MdWork/>}
                            iconStyle={{
                                color: 'var(--green-theme-main-color)',
                                display: 'none'
                            }}
                            >
                            <div className="vertical-timeline-element-title-wrapper">
                                <h3 className="vertical-timeline-element-title">{item.title}</h3>

                                <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>

                                <p className="vertical-timeline-element-description">{item.description}</p>
                            </div>
                            </VerticalTimelineElement>
                        ))
                    }
                    </VerticalTimeline>
                </div>

                <div className="timeline__experience">
                    <h3 className="timeline__experience__header-text">Education</h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--green-theme-main-color)">
                    {
                        resumeData.experience.map((item,i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__experience__vertical-timeline-element"
                            contentStyle={{
                                background: 'var(--green-theme-background-color)',
                                border: '1.5px solid var(--green-theme-main-color)',
                                boxShadow: 'none'
                            }}
                            date="2020 - Present"
                            icon={<MdWork/>}
                            iconStyle={{
                                color: 'var(--green-theme-main-color)',
                                display: 'none'
                            }}
                            >
                            <div className="vertical-timeline-element-title-wrapper">
                                <h3 className="vertical-timeline-element-title">{item.title}</h3>

                                <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>

                                <p className="vertical-timeline-element-description">{item.description}</p>
                            </div>
                            </VerticalTimelineElement>
                        ))
                    }
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}

export default Resume;