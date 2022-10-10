import Card from './Card';
import styles from '../../styles/Components/ProjectsAndAwards/ProjectsAndAwards.module.css';

const ProjectsAndAwards = () => {
    const projects = [
        {
            imageLink: '/assets/projects/GYMPOSE.jpeg',
            title: 'GYMPOSE',
            award: "People's Choice Award",
            content:
                'GYMPOSE is an AI web application that is able to classify an exercise based on video recordings. Using our ingenious platform, individuals can record themselves, or others, doing a specific exercise and our AI technology in a matter of seconds will provide them with the name, pros and cons, alternatives, and tutorials for that particular exercise.',
            projectLink: 'https://devpost.com/software/safedrop',
        },
        {
            imageLink: '/assets/projects/AudioEmotionDetector.jpeg',
            title: 'Audio Emotion Detector',
            award: 'Best Hack for Business Award',
            content:
                'An audio emotion detector AI that outputs the most accurate emotion by combining both speech-to-emotion model and text-to-emotion model. With the help of XGBoost and a few pre-existing datasets, we were able to create an AI that uses a simple but powerful algorithm to find the best path to the most accurate emotion.',
            projectLink: 'https://devpost.com/software/audio-emotion-dectector',
        },
        {
            imageLink: '/assets/projects/.jpeg',
            title: 'WordBay',
            award: '',
            content:
                'WordBay offers a platform for people who often read long and complicated texts online. It allows its users to quickly and easily find the definition to any word on a website by using a simple keyboard shortcut. By highlighting a word and using the shortcut, the user is presented with a beautiful graphical interface listing out the best definition, synonyms, examples and links related to the selected word.',
            projectLink: 'https://devpost.com/software/wordbay',
        },
        {
            imageLink: '/assets/projects/DropSafeLogo.png',
            title: 'DropSafe',
            award: '',
            content:
                'Using ai, safedrop can detect deliveries and allow you to make payments no matter where you are in the world. This ensures that your next-day delivery arrives exactly when you expect it.',
            projectLink: 'https://devpost.com/software/safedrop',
        },
    ];

    return (
        <div>
            <div className={styles.header}>
                <h1 id="projects-and-awards">PROJECTS AND AWARDS</h1>
            </div>
            <div className={styles.container}>
                {projects.map((project) => (
                    <Card
                        key={project}
                        {...project}
                        className={styles.flexElement}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsAndAwards;
