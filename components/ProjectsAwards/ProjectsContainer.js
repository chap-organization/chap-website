import Card from './Card';
import styles from '../../styles/Components/ProjectsAwards/ProjectsContainer.module.css';

const ProjectsContainer = () => {
    const red_border = 'ED1B2F';

    const project_one = {
        title: ' blabla ',
        content:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33',
        color: red_border,
    };

    return (
        <div className={styles.ProjectCOntainer} id="projects-and-awards">
            <div className="container">
                <div className="row g-3">
                    <div className="col-md-6 col-lg-4">
                        <Card {...project_one} />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Card {...project_one} />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Card {...project_one} />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Card {...project_one} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsContainer;
