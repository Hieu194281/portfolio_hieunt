import { BriefcaseBusiness, SchoolIcon } from 'lucide-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const EducationPage = () => {
    return (
        <div id='education' className='my-10 mx-16 quicksand-font'>
            <p className='font-serif quicksand-font tracking-[5px] uppercase text-sm'>MY JOURNEY</p>
            <VerticalTimeline layout='1-column-left'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"

                    date="8/2024 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BriefcaseBusiness />}
                >
                    <h3 className="vertical-timeline-element-title quicksand-font-bold">Software Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">VPBank, Hanoi</h4>
                    <p className='quicksand-font'>
                        Developing chatbots and ChatGPT-powered code generation systems using technologies like AWS, Queue, and GenAI.
                        Responsible for both frontend and backend development, building seamless UI/UX, optimizing backend performance,
                        integrating APIs, and handling large-scale data processing.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="8/2023 - 8/2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BriefcaseBusiness />}
                >
                    <h3 className="vertical-timeline-element-title quicksand-font-bold">Frontend Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Dasvision, Hanoi</h4>
                    <p>
                        Developed and optimized web applications using Vue.js, enhancing user experience and performance.
                        Focused on UI/UX design, SEO best practices, and seamless integrations to improve online visibility
                        and engagement. Collaborated closely with designers and backend developers to build scalable and
                        maintainable solutions.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="4/2023 - 7/2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BriefcaseBusiness />}
                >
                    <h3 className="vertical-timeline-element-title quicksand-font-bold">Frontend Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Dasvision, Hanoi</h4>
                    <p>
                        Gained hands-on experience in frontend development with a focus on user experience and visual design.
                        Assisted in building and optimizing UI components using Vue.js, improving responsiveness and
                        accessibility. Collaborated with senior developers to learn best practices in modern web development.
                        Took part in designing and developing landing pages, ensuring clean code structure, fast load times,
                        and seamless integration with backend services for a smooth user experience.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2019 - 2024"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title quicksand-font-bold">Computer Engineering (HUST)</h3>
                    <h4 className="vertical-timeline-element-subtitle">Engineering Degree</h4>
                    <p>
                        Pursuing a degree in Computer Engineering at Hanoi University of Science and Technology (HUST), I gained
                        in-depth knowledge in areas such as hardware design, software development, computer networks, and
                        embedded systems. The program equipped me with practical problem-solving skills, focusing on building
                        efficient and scalable systems, as well as leveraging modern technologies like IoT and artificial intelligence.
                        Additionally, I developed a strong foundation in algorithm design, data structures, and software engineering practices,
                        which I applied in real-world projects and internships. This program also emphasized strategy and social media in the context of technology,
                        allowing me to combine technical expertise with an understanding of market trends and digital communication.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="10/2024"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title quicksand-font-bold">Google AI Essentials</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                        Completed the Google AI Essentials certification, which provided foundational knowledge of artificial intelligence concepts
                        such as machine learning, natural language processing, and computer vision. Through the program, I gained practical skills
                        in using AI tools, understanding data-driven decision-making, and applying AI solutions to real-world problems. This certification
                        enhanced my ability to integrate AI into projects, improving overall creativity and user experience design in the process.
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}

export default EducationPage