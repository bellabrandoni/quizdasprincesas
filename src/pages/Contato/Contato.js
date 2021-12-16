import { TiSocialLinkedin, TiSocialInstagram} from 'react-icons/ti'
import { TiSocialGithub } from 'react-icons/ti'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import ImageContato from '../../assets/contato.svg'
import Footer from '../../components/Footer/Footer'
import '../Contato/contato.styles.css'

const Contato = () => {
    return(
        <>
            <Menu />
           <Header image ={ImageContato}>Vamos ser amigas nas redes?</Header>
        
           <div className='icones' >
                
            <a  href="https://github.com/bellabrandoni" target="_blank" rel="noreferrer">
            <TiSocialGithub size={100}  color="rgb(56, 56, 56)"  />
            </a>
            <a href="https://linkedin.com/in/isabella-brandao" target="_blank" rel="noreferrer">
            <TiSocialLinkedin size={100}  color="rgb(56, 56, 56)" />
            </a>
            <a href="https://www.instagram.com/bellabrandoni/"  target="_blank" rel="noreferrer">
            <TiSocialInstagram size={100} color="rgb(56, 56, 56)" />
            </a>


            </div>
            <Footer/>
        </>
         

    )       
   
}   

export default Contato