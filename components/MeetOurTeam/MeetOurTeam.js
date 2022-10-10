import styles from '../../styles/Components/MeetOurTeam/MeetOurTeam.module.css';
import MemberCard from './MemberCard';

export default function MeetOurTeam() {
    const executives = [
        {
            name: 'Athavan Thambimuthu',
            position: 'Director of Projects',
            image: '/assets/members/Athavan.jpg',
            description: '',
            linkedin: 'https://www.linkedin.com/in/athavan-thambimuthu/',
            github: 'https://github.com/Arty2001',
            resume: '',
        },
        {
            name: 'Matthew Cabral',
            position: 'Co-President',
            image: '/assets/members/Matthew.jpeg',
            description: '',
            linkedin: 'https://www.linkedin.com/in/matthew-a-cabral/',
            github: 'https://github.com/mattcab2002',
            resume: '/assets/members/MatthewResume.pdf',
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title} id="meet-our-team">
                    MEET OUR TEAM
                </div>
            </div>
            <div className={styles.header2}>
                <div className={styles.title2}>EXECUTIVES</div>
            </div>
            <div className={styles.section}>
                {executives.map((executive) => (
                    <MemberCard
                        name={executive.name}
                        position={executive.position}
                        image={executive.image}
                        description={executive.description}
                        linkedin={executive.linkedin}
                        github={executive.github}
                        resume={executive.resume}
                    />
                ))}
            </div>
        </div>
    );
}
