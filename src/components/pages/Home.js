import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from "../layout/LinkButton";

function Home () {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Gerencie seus gastos de forma simples e eficiente</p>
            <LinkButton to="/new-project" text="Criar novo projeto"/>
            <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home;