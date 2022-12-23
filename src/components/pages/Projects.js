import {useLocation} from "react-router-dom";
import Message from "../layout/Message";
import styles1 from './Projects.module.css';
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import {useQuery} from "react-query";
import ProjectCard from "../project/ProjectCard";

import styles from './Home.module.css'

function Projects (){

    const location = useLocation();
    let message = '';
    if(location.state){
        message = location.state.message;
    }

    const { isLoading, error, data } = useQuery('projects', () =>
        fetch('http://localhost:5000/projects').then(res =>
            res.json()
        )
    )

    if (isLoading) return <div className={styles.home_container}>Carregando...</div>

    if (error) return <div className={styles.home_container}>Algo deu errado :(</div>

    console.log(data);
    return (
        <div className={styles1.project_container}>
            <div className={styles1.title_container}>
                <h1>Meus projetos</h1>

                <LinkButton to="/new-project" text="Criar projeto"/>
            </div>

            {message && <Message type="sucess" msg={message}/>}
            <Container customClass="start">
                {data.length >0 && data.map(project =>
                    <ProjectCard id={project.id}
                                 name={project.name}
                                 budget={project.budget}
                                 category={project.category.name}
                                 key={project.id}/>
                )}

            </Container>
        </div>
    )
}

export default Projects