import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import ImageQuiz from '../../assets/about.svg'
import Jogo from '../../components/Jogo/Jogo'
import Footer from '../../components/Footer/Footer'
const QuizJogo = () => {
    return(
        <>
            <Menu />
            <Header image={ImageQuiz}>Quiz das princesas</Header>
            <Jogo />
            <Footer/>
        </>
        )
}

export default QuizJogo