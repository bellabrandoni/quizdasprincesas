import { useState } from "react";

import Questions from "../../Data/Database"
import "./jogo.styles.css"


function Jogo () {
const [showScore, setshowScore] = useState(false);
const [score, setScore] = useState (0);
const [currentQuestion, setcurrentQuestion ] = useState(0);

function handleAnswer(isCorrect){
    if (isCorrect) {
        setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questions.length){
        setcurrentQuestion(nextQuestion);
    } else {
        setshowScore(true);
    }
}





    return(
        <>
        <div className="app">
            {showScore ? (
            <div className="score-section" >
                você pontuou {score} de {Questions.length}
            </div>
            ) : (
                <>
                <div className="question-section">

               <div className="question-count" >
               <span>Questão {currentQuestion + 1}</span>{Questions.length}
               </div>

               <div className="question-text">
                {Questions[currentQuestion].questionText}
               </div>
                    
                </div>
                <div className="answer-section">
                 {Questions[currentQuestion].answerOptions.map((answerOptions, index) =>(

                 <button onClick={()=> handleAnswer(answerOptions.isCorrect)} key={index}>
                     {answerOptions.answerText}
                 </button>

                 ))}
                </div>
                </>
            )}
        

        </div>
        </>
    )
}
export default Jogo
