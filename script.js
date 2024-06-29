// musics
let newQuestionMusic = new Audio("./assets/sounds/newQuestion.m4a");
let checkAnswerMusic = new Audio("./assets/sounds/finalAnswer.m4a");
let trueAnswerMusic = new Audio("./assets/sounds/trueAnswer.m4a");
let wrongAnswerMusic = new Audio("./assets/sounds/wrongAnswer.m4a");
let timeoutMusic = new Audio("./assets/sounds/timeoutMusic.m4a");

let timeoutText = document.querySelector(".timeoutText");

let moneyText = document.querySelector(".moneyText");

let questIndex = 0;
let money = 0;
let time = 30;
let timer;
let variantSelected = false;

let strtBtn = document.querySelector(".strtBtn");
let contentQuestions = document.querySelector(".contentQuestions");

function getAnswer(data) {
  if (!variantSelected) {
    variantSelected = true;
    data.style.backgroundColor = "#3e74b5";
    data.style.color = "#fff";
    itemId = data.id;
    // this.classList.add("active");
    newQuestionMusic.pause();
    newQuestionMusic.currentTime = 0;
    checkAnswerMusic.play();
    stopTime();

    let timeout = setTimeout(() => {
      // this.classList.remove("active");
      console.log("happen after 3 sec");
      checkAnswerMusic.pause();
      checkAnswerMusic.currentTime = 0;
      checkAnswer(questIndex, data.innerHTML, data);
    }, 6000);
  } else{
    return
  }
}

function checkAnswer(index, answer, html) {
    
  console.log(index, answer);
  let correctAnswer = questions[index].answer;
  if (answer == correctAnswer) {
    html.style.backgroundColor = "#148f62";
    trueAnswerMusic.play();
    money += 10;
    console.log(money);
    moneyText.innerHTML = `${money} ₼`;
    console.log("it is true answer");
    questions.splice(index, 1);
    stopTime();
    setTimeout(() => {
      newQuestion();
      variantSelected = false;
    }, 5000);
  } else {
    wrongAnswerMusic.play();
    console.log(correctAnswer);
    html.style.backgroundColor = "brown";
    setTimeout(() => {
      endGame();
    }, 3000);
  }
}

function startRace() {
  let userName = prompt("Zehmet olmasa adinizi daxil edin");

  if (userName) {
    newQuestion();
  } else {
    return;
  }
}

function startTime() {
  timeoutText.style.visibility = "visible";
  moneyText.style.visibility = "visible";
  timeoutMusic.play();

  timer = setInterval(() => {
    if (time > 0) {
      time--;
      timeoutText.innerHTML = time;
    } else {
      clearInterval(timer);
      timeoutMusic.pause();
      timeoutMusic.currentTime = 0;
      timeoutText.innerHTML = 0;

      endGame();
    }
  }, 1000);
}

function stopTime() {
  clearInterval(timer);
  timeoutMusic.pause();
  timeoutMusic.currentTime = 0;
  timeoutText.innerHTML = time;
}

function endGame() {
    variantSelected = false;
  alert(`Oyun bitdi. Məbləğiniz: ${money} ₼`);
  money = 0;
}

function newQuestion() {
  time = 30;
  startTime();
  let randomIndex = Math.floor(Math.random() * (questions.length - 2));
  console.log(randomIndex);
  let newQuest = questions[randomIndex];
  questIndex = randomIndex;
  contentQuestions.innerHTML = `
    <div class="questionCnt">
          <h1 class="question">
            ${newQuest.question}
          </h1>
        </div>
        

        <div class="answers">
          <div class="answerVariant" id="a" onclick="getAnswer(this)">${newQuest.options[0]}</div>
          <div class="answerVariant" id="b" onclick="getAnswer(this)">${newQuest.options[1]}</div>
          <div class="answerVariant" id="c" onclick="getAnswer(this)">${newQuest.options[2]}</div>
          <div class="answerVariant" id="d" onclick="getAnswer(this)">${newQuest.options[3]}</div>
        </div>`;

  newQuestionMusic.play();
  trueAnswerMusic.pause();
  trueAnswerMusic.currentTime = 0;
}

// startRace();

strtBtn.addEventListener("click", startRace);
