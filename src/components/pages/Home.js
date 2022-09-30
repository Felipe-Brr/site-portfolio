import styles from './Home.module.css'

function Home(){

    return(
        <div className={styles.home_container} >
            <h1>Olá, eu sou <span>Felipe</span>!</h1>
            <p>Sou técnico em automação e estudante de Engenharia de Controle e Automação. Em 2016, quando entrei para o curso técnico, tive meu primeiro contato com as áreas da tecnologia. Desde então, venho procurando formas de me atualizar e aprofundar cada vez mais meus conhecimentos. Em 2021, decidi reunir com um grupo de amigos para iniciar a start-up de um aplicativo e foi assim que eu comecei minha carreira Dev.</p>
        </div>
    )
}

export default Home