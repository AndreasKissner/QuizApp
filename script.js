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



let currentQuestion = 0;

function init() {
    document.getElementById("total_questions").innerHTML = questions.length;// Zähler mit allen Fragen Anzahl
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById("question_text").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];

}