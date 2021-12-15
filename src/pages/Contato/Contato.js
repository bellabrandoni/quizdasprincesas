import { TiSocialLinkedinCircular, TiSocialInstagramCircular} from 'react-icons/ti'
import { DiGithubBadge } from 'react-icons/di'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import ImageContato from '../../assets/contato.svg'
import Footer from '../../components/Footer/Footer'

const Contato = () => {
    return(
        <>
            <Menu />
           <Header image ={ImageContato}>Vamos ser amigas nas redes?</Header>
        
           <div className='icones' >

            <a href="https://github.com/marciatkm" target="_blank" rel="noreferrer">
            <DiGithubBadge size={92} color="rgb(56, 56, 56)"/>
            </a>
            <a href="https://linkedin.com/in/marcia-tadakuma" target="_blank" rel="noreferrer">
            <TiSocialLinkedinCircular size={89} color="rgb(56, 56, 56)"/>
            </a>
            <a href="https://www.instagram.com/marcinhatkm/"  target="_blank" rel="noreferrer">
            <TiSocialInstagramCircular size={88} color="rgb(56, 56, 56)"/>
            </a>


            </div>
            <Footer/>
        </>
         

    )       
   
}   

export default Contato