import { useState } from "react";
import { Container, Button } from "react-bootstrap";

export default function Education() {
    const education = [
        {
            'typeOfStudy': 'Bachelors',
            'schoolName': 'University of London',
            'qualification': 'BSc Computer Science',
            'studyDuration': '2022 October - current',
            'description': 'I am currently in my final year of study at the University of London pursuing a Bachelors Degree in Computer Science. Through my studies at the highly accredited university, I have developed skills in:',
            'skills': [
                'Interaction Design (UI/UX Design)',
                'Data Structures and Algorithms',
                'Web Design and Development',
                'Object Oriented Programming',
                'Databases, Networks and the Web',
                'Computer Security',
                'Agile Software Development',
                'Programming in JavaScript and Python'
            ]
        },
        {
            'typeOfStudy': 'Google IT Support',
            'schoolName': 'Google IT Support by Google on Coursera',
            'qualification': 'Certification',
            'studyDuration': '2022 September - 2022 November',
            'description': 'I completed a professional certification developed by Google that gave me a basic understanding of computer systems and how they function as well as how that knowledge can be used in IT support.',
            'skills': [
                'Git (Version Control Systems)',
                'Computer Networking',
                'Operating Systems',
                'IT infrastructure services',
                'Computer and Network Security',
                'Troubleshooting',
            ],
            'certificate': 'https://coursera.org/share/f511f3a687a171fa29ee928fcc90991b'
        },
    ]
    const [content, setContent] = useState(education[0])
    return(
        <Container id="education my-5">
            <hr className="border-white mt-5" />
            <h1 className="sectionTitles">Education</h1>
            <div className="d-flex w-75 mt-5" style={{ marginLeft: '20%' }}>
                <div className="d-flex flex-column">
                    {education.map((edu) => {
                        return <Button key={edu.typeOfStudy} className="mb-2 educationButton" onClick={() => setContent(edu)}>{edu.typeOfStudy}</Button>
                    })}
                </div>
                <div className="text-white text-start border-start px-2 mx-1">
                    <p><span className="fs-3">{content.schoolName}: </span><span className="fs-6">{content.qualification}</span></p>
                    <p className="text-secondary"><small>{content.studyDuration}</small></p>
                    <p>{content.description}</p>
                    <ul className="mb-5">
                        {content.skills?.map((skill) => {
                            return <li key={skill}> {skill}</li>
                        })}
                    </ul>
                    {content.certificate ? <div className="text-center"><a href={content.certificate} className="text-white text-decoration-none border p-2">View certificate</a></div> : null}
                </div>
            </div>
            <hr className="border-white mt-5" />
        </Container>
    )
}
