const { lookup } = require("dns");
const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const quesCollection = require("./firebase").quesCollection;
const fetch = require("node-fetch");
const questions = JSON.parse(rawdata);
const NUMBEROFQUESTIONS = 5;
const QUESTIONTIME = 10;
const CORRECT_ANSWER_TIME = 2;
const LEADERBOARD_TIME = 4;
const MIN_SCORE = 10;
const MAX_SCORE = 50;
class Player {
  constructor(id, username) {
    this.id = id;
    this.username = username;
    this.ready = false;
    this.score = 0;
    this.isAnswer = false;
    this.choose = Number;
    this.time = Date;
    this.setAnswerState();
  }
  getInfomation() {
    let data = {};
    data.id = this.id;
    data.ready = this.ready;
    data.username = this.username;
    data.isAnswerCorrect = this.isAnswerCorrect;
    data.score = this.score;
    return data;
  }
  setAnswerState() {
    this.isAnswer = false;
    this.choose = -1;
    delete this.isAnswerCorrect;
    this.time = Date;
  }
}

class Game {
  constructor({ id, name }) {
    this.id = id;
    this.name = name;
    this.canJoin = true;
    this.questions = [];
    this.currentQuestionIndex = Number;
    this.questionTimeLeft = Number;
    this.time = Date;
    this.players = {};
    this.view = String;
    this.trueAnswer = String;
  }
  async newGame() {
    // this.questions = getRandom(questions, NUMBEROFQUESTIONS);
    // let rawQuestion = await fetch(
    //   "https://opentdb.com/api.php?amount=10&type=multiple&difficulty=easy"
    // );
    // rawQuestion = await rawQuestion.json();

    // rawQuestion = rawQuestion.results;
    // rawQuestion.forEach((e, i) => {
    //   e.id = i;
    //   e.incorrect_answers.push(e.correct_answer);
    //   e.incorrect_answers.sort(() => Math.random() - 0.5);
    // });

    const snapshot = await quesCollection.get();
    this.questions = [];
    snapshot.forEach((doc) => {
      let data = doc.data();
      data.incorrect_answers = [];

      data.incorrect_answers.push(
        data.answerA,
        data.answerB,
        data.answerC,
        data.answerD
      );
      data.correct_answer =
        data.incorrect_answers[{ A: 0, B: 1, C: 2, D: 3 }[data.correctAnswer]];
      data.incorrect_answers.sort(() => Math.random() - 0.5);
      this.questions.push(data);
    });
    this.questions = getRandom(this.questions, NUMBEROFQUESTIONS);
    for (let i = 0; i < this.questions.length; i++) this.questions[i].id = i;
    this.canJoin = false;
    this.currentQuestionIndex = -1;
    this.trueAnswer = String;
    this.loop();
  }
  resetPlayerAnswer() {
    for (let id in this.players) this.players[id].setAnswerState();
  }
  updateScore() {
    for (let id in this.players) {
      let p = this.players[id];
      if (!p.isAnswer) continue;
      let timePass = p.time - this.time;
      p.isAnswerCorrect = this.trueAnswer == p.choose;
      if (!p.isAnswerCorrect) continue;
      p.score += Math.floor(
        mapNumber(timePass, 0, QUESTIONTIME * 1000, MAX_SCORE, MIN_SCORE)
      );
    }
  }
  async save() {
    await sleep(10000);
    this.canJoin = true;
    for (let id in this.players) this.players[id].ready = false;
  }
  loop() {
    this.currentQuestionIndex++;
    this.trueAnswer = false;
    if (this.currentQuestionIndex == NUMBEROFQUESTIONS) return this.save();
    this.view = "question";
    this.questionTimeLeft = QUESTIONTIME;
    this.time = Date.now();
    let interval = setInterval(async () => {
      this.questionTimeLeft--;
      if (this.questionTimeLeft < 0) {
        clearInterval(interval);
        let q = this.questions[this.currentQuestionIndex];
        this.trueAnswer = q.incorrect_answers.indexOf(q.correct_answer);
        await sleep(CORRECT_ANSWER_TIME * 1000);
        this.view = "leaderboard";
        await sleep(1000);
        this.updateScore();
        await sleep(LEADERBOARD_TIME * 1000);
        this.resetPlayerAnswer();
        this.loop();
      }
    }, 1000);
  }
  getInfomation() {
    let data = {};
    let question = { ...this.questions[this.currentQuestionIndex] };
    if (this.currentQuestionIndex > 0) {
      delete question.correct_answer;
    }
    data.id = this.id;
    data.name = this.name;
    data.canJoin = this.canJoin;
    data.question = question;
    data.questionTimeLeft = this.questionTimeLeft;
    data.players = [];
    for (let id in this.players)
      data.players.push(this.players[id].getInfomation());

    data.playersCount = data.players.length;
    data.view = this.view;
    data.trueAnswer = this.trueAnswer;
    return data;
  }
  playerAnswer({ id, questionID, choose }) {
    if (questionID != this.currentQuestionIndex || choose < 0 || choose > 3)
      return;
    let p = this.players[id];
    if (p.isAnswer) return;
    p.isAnswer = true;
    p.choose = choose;
    p.time = Date.now();
  }
  playerJoin({ id, username }) {
    if (!this.canJoin) return;
    let p = new Player(id, username);
    this.players[id] = p;
  }
  playerLeave(id) {
    delete this.players[id];
  }
  playerReady(id) {
    if (!this.canJoin) return;
    this.players[id].ready = !this.players[id].ready;
    let count = 0;
    for (let id in this.players) if (this.players[id].ready) count++;
    if (count == Object.keys(this.players).length) this.newGame();
  }
}

module.exports = Game;

function logger() {
  let temp;
  return (e) => {
    if (!temp) temp = e.getInfomation();
    let temp2 = e.getInfomation();
    for (let key in temp2) {
      if (JSON.stringify(temp2[key]) == JSON.stringify(temp[key])) continue;
      let log = {};
      log[key] = temp2[key];
      console.log(log);
    }
    temp = temp2;
  };
}

function mapNumber(value, in_min, in_max, out_min, out_max) {
  return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
function getRandom(arr = Array, n = Number) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
