import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import ImageHome from '../../assets/ilustra.svg'
import Formulario from '../../components/Formulario/Formulario'
import Footer from '../../components/Footer/Footer'
const Home = () => {
    return(
    <>
        <Menu />
        <Header image={ImageHome}>Seja Bem-vinda</Header>
        <Formulario/>
        <Footer/>
    </>
    )
}

export default Home

