import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Quiz from '../pages/Quiz/QuizJogo'
import Contato from '../pages/Contato/Contato'
import Portifolio from '../pages/Portifolio/Portifolio'

function Rotas () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path= "/" exact  component={Home}/>

                <Route path= "/quiz"  component={Quiz}/>

                <Route path= "/contato"  component={Contato}/>

                <Route path= "/portifolio"  component={Portifolio}/>
            </Switch>
        </BrowserRouter>

    )
}

export default Rotas