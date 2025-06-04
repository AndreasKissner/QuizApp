// console.table(questions[0]["answer_3"]); 

let questions = [
  {
    "question": "Welches dieser Lebensmittel enthält am meisten Vitamin C?",
    "answer_1": "Apfel",
    "answer_2": "Gurke",
    "answer_3": "Paprika",
    "answer_4": "Banane",
    "right_answer": 3
  },
  {
    "question": "Was ist eine gesunde Fettquelle?",
    "answer_1": "Schmalz",
    "answer_2": "Butter",
    "answer_3": "Palmöl",
    "answer_4": "Avocado",
    "right_answer": 4
  },
  {
    "question": "Was ist ballaststoffreich und fördert die Verdauung?",
    "answer_1": "Zucker",
    "answer_2": "Vollkornbrot",
    "answer_3": "Weißbrot",
    "answer_4": "Käse",
    "right_answer": 2
  },
  {
    "question": "Welches Getränk ist am besten für den Körper?",
    "answer_1": "Wasser",
    "answer_2": "Limonade",
    "answer_3": "Eistee",
    "answer_4": "Cola Light",
    "right_answer": 1
  },
  {
    "question": "Welches Mineral ist wichtig für starke Knochen?",
    "answer_1": "Eisen",
    "answer_2": "Kalzium",
    "answer_3": "Zink",
    "answer_4": "Magnesium",
    "right_answer": 2
  },
  {
    "question": "Wie viele Portionen Obst und Gemüse werden täglich empfohlen?",
    "answer_1": "2",
    "answer_2": "3",
    "answer_3": "5",
    "answer_4": "7",
    "right_answer": 3
  },
  {
    "question": "Welcher dieser Begriffe steht für eine gesunde Eiweißquelle?",
    "answer_1": "Frittierte Hähnchenteile",
    "answer_2": "Wurst",
    "answer_3": "Quinoa",
    "answer_4": "Zuckermais",
    "right_answer": 3
  }

];

let rightQuestion = 0;

let currentQuestion = 0;

function init() {
  document.getElementById("total_questions").innerHTML = questions.length;// Zähler mit allen Fragen Anzahl
  showQuestion();
}

function showQuestion() {

  if (currentQuestion >= questions.length) {
    document.getElementById("end_screen").style = ''; // CSS wird ausgeblendet Endscreen
    document.getElementById("question_body").style = 'display: none';

    document.getElementById("amountOfQuestions").innerHTML = questions.length;
    document.getElementById("amount_of_right_questions").innerHTML = rightQuestion;

    document.getElementById("new_image").src = "img/pokal.png";
  } else {//Show Question



    let percent = (currentQuestion + 1) / questions.length; // +1 weil wir ja bei 0 Anfangen
    percent = Math.round(percent * 100);

    document.getElementById("progress_bar").innerHTML = `${percent} %`
    document.getElementById("progress_bar").style = `width: ${percent}%`//Zugrif auf progress_bar id und dort auf Style


    console.log("Prozentualer Fortschritt", percent);

    let question = questions[currentQuestion];

    document.getElementById("question_number").innerHTML = currentQuestion + 1;
    document.getElementById("question_text").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function answer(auswahl) {//Auswahl steht für gedrückte Antwort
  let question = questions[currentQuestion];
  /*  console.log('Selected answer is:', auswahl); *///Auswahl steht für gedrückte Antwort
  let selectedQuestionNumber = auswahl.slice(-1);//Auswahl steht für gedrückte Antwort
  /* console.log('Selected Question Number is:', selectedQuestionNumber); */// Holt den letzten Buchstabe also hier Zahl raus
  /*  console.log('Current question is:', question["right_answer"]); */

  let idOfRightAnswer = `answer_${question["right_answer"]}`;// Hier wird die Richtige Antwort geholt

  if (selectedQuestionNumber == question["right_answer"]) { // True
    /*    alert("Right Answer!!");  */
    document.getElementById(auswahl).parentNode.classList.add('bg-success');
    rightQuestion++;
  } else {
    /*  alert("False Answer!!"); */
    document.getElementById(auswahl).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
  }
  document.getElementById("next_button").disabled = false;
}

function nextQuestion() {
  currentQuestion++  // von 0 auf 1 wird die Frage erhöht
  document.getElementById("next_button").disabled = true;  //Button wird wieder
  resetAnswerButton()
  showQuestion();
}

function resetAnswerButton() {
  document.getElementById("answer_1").parentNode.classList.remove('bg-danger');
  document.getElementById("answer_1").parentNode.classList.remove('bg-success');
  document.getElementById("answer_2").parentNode.classList.remove('bg-danger');
  document.getElementById("answer_2").parentNode.classList.remove('bg-success');
  document.getElementById("answer_3").parentNode.classList.remove('bg-danger');
  document.getElementById("answer_3").parentNode.classList.remove('bg-success');
  document.getElementById("answer_4").parentNode.classList.remove('bg-danger');
  document.getElementById("answer_4").parentNode.classList.remove('bg-success');
}

function restartGame(){
   document.getElementById("new_image").src = "img/logo.png";
     document.getElementById("question_body").style = '';  // Question Body wieder anzeigen
       document.getElementById("end_screen").style = 'display: none'; //enscreen wieder ausblendne
   
rightQuestion = 0;

currentQuestion = 0;

init();
}