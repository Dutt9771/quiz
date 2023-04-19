import React,{useState} from 'react';


export default function Questions(){
  let questions=  [ {
        question: 'What is the capital of France?',
        options: ['Paris', 'Madrid', 'Rome', 'Berlin'],
        answer: 'Paris'
      },
      {
        question: 'What is the largest planet in the solar system?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        answer: 'Jupiter'
      },
      {
        question: 'What is the highest mountain in the world?',
        options: ['Everest', 'Kilimanjaro', 'Denali', 'Aconcagua'],
        answer: 'Everest'
      },
      {
        question: 'Who wrote the Harry Potter series of books?',
        options: ['J.K. Rowling', 'Stephen King', 'Dan Brown', 'George R.R. Martin'],
        answer: 'J.K. Rowling'
      }
  ]
  let  [question,setQuestions]=useState(questions[0])
  const [currentQuestion,setCurrentQuestion]=useState(1)
  const [score,setScore]=useState(1)
  const [open, setOpen] = useState(false);
  
  
//   question=questions[0]

let btn="Next Question"
  let answer
  const answerCheck=(e)=>{
    answer=e.target.value
    console.log("Answer",answer)
    console.log("questions[currentQuestion].answer",questions[currentQuestion-1].answer)
    
}
const nextQuestion=()=>{
    if(answer===questions[currentQuestion-1].answer){
        setScore(score+1)
        console.log("questions[currentQuestion].answer",questions[currentQuestion-1].answer)
        console.log("scrore",score)
        if((currentQuestion-1)===questions.length){
            btn="Finish"
    }else{
        
        setCurrentQuestion(currentQuestion+1)
        setQuestions(questions[currentQuestion])
        console.log("question",question)
    }}else{
        if((currentQuestion-1)===questions.length){
            console.log("(currentQuestion-1)",(currentQuestion-1))
            setOpen(false)
            btn="Finish"
    }else{
        
        setCurrentQuestion(currentQuestion+1)
        setQuestions(questions[currentQuestion])
        console.log("question",question)
    }
    }
      
}
    return (
<div>


    <div>
        {open?(
<>
            <h1>{question.question}</h1>
            {question.options.map((option,index)=>{
                return(
                    <div>

            <label htmlFor="{option}">{option}</label>
            <input id='{option}' type='radio' name='questions' value={option} onChange={answerCheck}/>
            </div>
        )
    })}
    <button type='button' id='btn' onClick={nextQuestion}>{btn}</button>
    </>
    ):null}
    </div>
{/* <div >Scrore is {score}</div> */}
</div>
    );
}