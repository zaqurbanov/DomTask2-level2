


const questions = [
    {
        question: "5+5",
        level: "low",
        category: "Math",
        answers: [
            { answer: 10, correct: true },
            { answer: 12, correct: false },
            { answer: 17, correct: false },
            { answer: 19, correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        level: "low",
        category: "Geography",
        answers: [
            { answer: "Paris", correct: true },
            { answer: "Berlin", correct: false },
            { answer: "Madrid", correct: false },
            { answer: "Rome", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        level: "medium",
        category: "Literature",
        answers: [
            { answer: "Harper Lee", correct: true },
            { answer: "Mark Twain", correct: false },
            { answer: "F. Scott Fitzgerald", correct: false },
            { answer: "Ernest Hemingway", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        level: "low",
        category: "Science",
        answers: [
            { answer: "H2O", correct: true },
            { answer: "O2", correct: false },
            { answer: "CO2", correct: false },
            { answer: "NaCl", correct: false }
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        level: "medium",
        category: "History",
        answers: [
            { answer: 1912, correct: true },
            { answer: 1905, correct: false },
            { answer: 1898, correct: false },
            { answer: 1923, correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        level: "low",
        category: "Astronomy",
        answers: [
            { answer: "Jupiter", correct: true },
            { answer: "Saturn", correct: false },
            { answer: "Earth", correct: false },
            { answer: "Mars", correct: false }
        ]
    },
    {
        question: "Solve for x: 2x + 3 = 7",
        level: "medium",
        category: "Math",
        answers: [
            { answer: 2, correct: true },
            { answer: 1, correct: false },
            { answer: 4, correct: false },
            { answer: 5, correct: false }
        ]
    },
    {
        question: "What is the boiling point of water at sea level?",
        level: "medium",
        category: "Science",
        answers: [
            { answer: "100°C", correct: true },
            { answer: "90°C", correct: false },
            { answer: "110°C", correct: false },
            { answer: "80°C", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        level: "medium",
        category: "Art",
        answers: [
            { answer: "Leonardo da Vinci", correct: true },
            { answer: "Vincent van Gogh", correct: false },
            { answer: "Pablo Picasso", correct: false },
            { answer: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the most spoken language in the world?",
        level: "medium",
        category: "Languages",
        answers: [
            { answer: "Mandarin Chinese", correct: true },
            { answer: "English", correct: false },
            { answer: "Spanish", correct: false },
            { answer: "Hindi", correct: false }
        ]
    }
];


const container6 = document.querySelector('.container-6')

const start_Task_6 = ()=>{
    // category buttonlarinin hamisini cagiran funksiya
    const categoryBtnList = getCategoryBtnList()
    
  

 const categoryBtns = createCategoryBtns(categoryBtnList);
    container6.appendChild(categoryBtns)


}


const createCategoryBtns=(btns)=>{
    const quizCateogryDiv = document.createElement('div');
    quizCateogryDiv.className='quiz-category category';

    btns.forEach(btn => {
        const categoryBtn = createCategoryBtn(btn)
            quizCateogryDiv.appendChild(categoryBtn)
    });



    return quizCateogryDiv

}


// category buttonu yaradan funksiya 
const createCategoryBtn = (btn)=>{
    const button = document.createElement('button');
    button.classList.add('categoryBtn')
    button.textContent = btn
    button.addEventListener('click',showLevelByCategory)
    return button
}

const showLevelByCategory =(e)=>{
    let category = e.target.textContent

    // secilen categorye uygun olan butun suallari getirir
    const filterCategoryLevelBtns = getFilterCategoryLevelBtns(category)

    // Hemin categoryde olan levelleri getirir
        const levelBtnList = getLevelBtnListByCategory(filterCategoryLevelBtns)
        
        // level buttonlarini yaradan funksiya
        const createLevelBtn = getCreateLevelBtn(levelBtnList,category)

}
const getFilterCategoryLevelBtns = (selectedCategory)=>{
    return questions.filter(e=> e.category == selectedCategory)
}



const getCreateLevelBtn = (list,category)=>{
    const div = document.createElement('div');
    div.className = 'level-category category';

    list.forEach(item=>{
        const button = document.createElement('button');
        button.classList.add('levelBtn');
        button.textContent = item;
             
        // level buttonuna clickleyende uygun olan question containeri goster.
        button.addEventListener('click',(e)=>showQuestion(e,category))
        div.appendChild(button);
    })
    container6.innerHTML = "";
    container6.appendChild(div)
    
}


const showQuestion = (e,category)=>{
    
    const selectedLevel = e.target.textContent;
    const questionByLevel = getQuestionByLevel(selectedLevel,category)

    const createQuestion = getCretaeQuestion(questionByLevel)
    

    container6.innerHTML = ""
    container6.appendChild(createQuestion)
}

const getQuestionByLevel = (selectedLevel,category)=>{
   
            const questionByCategory = questions.filter(question=>{
                    return question.category == category
            })

           const questionByLevel = questionByCategory.filter(question=>{
                return question.level == selectedLevel


           })

          return questionByLevel

           
}

const getCretaeQuestion = (questions)=>{
let questionDiv = document.createElement('div');
        questionDiv.classList.add('question-container');
        ;
    questions.forEach(question=>{
            
            // verilen suralin, butun suallarin icerisinden idsini tapiriq
            const questionID = getQuestionIdByAllQuestion(question.question)

        const h1 = document.createElement('h1');
        h1.textContent = question.question
        const answers = createAnswers(question.answers,questionID)
        questionDiv.appendChild(h1)
        questionDiv.appendChild(answers)
    })

    return questionDiv
}

const createAnswers = (answers,questionID)=>{
    const answerContainer = document.createElement('div');
    answerContainer.classList.add('answer-container');
    answerContainer.id = questionID


        answers.forEach((answer,i)=>{
            const answerDiv = document.createElement('div');
            answerDiv.classList.add('answer');
            

            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `answer-${questionID}-${i}`
            input.name = `answer-${questionID}`;


            const label = document.createElement('label');
            label.setAttribute('for',`answer-${questionID}-${i}`)
            console.log(answer.answer);
            label.textContent = answer.answer;


            answerDiv.appendChild(input);
            answerDiv.appendChild(label)

            answerContainer.appendChild(answerDiv)
        })

    return answerContainer

    
}
const getLevelBtnListByCategory = (list) =>{
    const uniqueLevel = [];
    let levels= list.map(e=>e.level);
     levels.forEach(e=>{
        if(!uniqueLevel.includes(e)){
            uniqueLevel.push(e)
        }
     })
     return uniqueLevel
}
const getCategoryBtnList = ()=>{
    return questions.map(e=>{
        return e.category
    })
}

const getQuestionIdByAllQuestion =(question)=>{
    const id =questions.findIndex(e=>{
       return e.question ==question
    }) 
    return id
    
}
export default start_Task_6