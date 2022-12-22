import {useLocation} from "react-router-dom";
import Message from "../layout/Message";
import styles from './Project.module.css';
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

function Projects (){

    const location = useLocation();
    let message = '';
    if(location.state){
        message = location.state.message;
    }

    return (
        <div>
            <div>
                <h1>Meus projetos</h1>
                <LinkButton to="/new-project" text="Criar projeto"/>
            </div>
            {message && <Message type="sucess" msg={message}/>}
            <Container customClass="start">
                <p>Projetos...</p>
            </Container>
        </div>
    )
}

export default Projects