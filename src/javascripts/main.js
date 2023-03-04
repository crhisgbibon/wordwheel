"use strict";

function CalculateVh()
{
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

function TogglePanel(panel)
{
  if(panel.style.display === '') panel.style.display = 'none';
  else panel.style.display = '';
}

window.addEventListener('DOMContentLoaded', CalculateVh);
window.addEventListener('resize', CalculateVh);
window.addEventListener('orientationchange', CalculateVh);

// header controls
const ScoreDisplay = document.getElementById("ScoreDisplay");
const PlayButton = document.getElementById("PlayButton");
const PauseButton = document.getElementById("PauseButton");

const timerDisplay = document.getElementById("timerDisplay");

// game messages
const responseDisplay = document.getElementById("responseDisplay");

// answer display
const answerContainer = document.getElementById("answerContainer");

// wordwheel display
const canvasContainer = document.getElementById("canvasContainer");
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// bottom menu
const deleteButton = document.getElementById("deleteButton");
const submitButton = document.getElementById("submitButton");
const submitAnswerID = document.getElementById("submitAnswerID");

// assignments
PlayButton.onclick = function(){ Play() };
PauseButton.onclick = function(){ Pause() };

submitButton.onclick = function(){ ValidateAnswer() };
deleteButton.onclick = function(){ DeleteLetter() };

// wordwheel button locations and info
let buttonPoints = [];
// which buttons have been clicked
let tempButtons = [];
// holds temp colour
let col = undefined;

// monitors whether there is an active game
let playing = false;

// timer variables
let timer = 0;
let interval = undefined;
let gameTime = 300;

// game information arrays
// all possible words
let words = [];

// to pick the 9 letters
let consonants = [];
let vowels = [];

// the 9 letters
let choices = [];

// players answers
let answers = [];
// pool of possible answers
let possibleAnswers = [];

TogglePanel(PauseButton);

// get the word list and parse it into the words array
function Start()
{
  $.get('./src/assets/words.txt', function (data)
  {
    words = data.split("\n");
    for(let i = 0; i < words.length; i++)
    {
      words[i] = words[i].replace("\n", "");
      words[i] = words[i].replace(" ", "");
      words[i] = words[i].replace(/\s/g, '');
    }
  });
}

// switches between play game, stop game, start new game
function Play()
{
  if(!playing) // if playing, end
  {
    TogglePanel(PlayButton);
    TogglePanel(PauseButton);
    NewGame();
  }
}

function Pause()
{
  if(playing) // if playing, end
  {
    TogglePanel(PlayButton);
    TogglePanel(PauseButton);
    EndGame();
  }
}

// reset all UI, get a new word list and start the timer
function NewGame()
{
  answerContainer.innerHTML = '';
  let counter = 0;
  tempButtons.length = 0;
  possibleAnswers.length = 0;
  while(possibleAnswers.length < 10)
  {
    GetWords();
    counter++;
    if(counter > 100)
    {
      ToggleGame();
      break;
    }
  }
  ScoreDisplay.innerHTML = '<span style="color:var(--wordGot);">' + answers.length + '</span>' +'/' + '<span style="color:var(--wordMissed);">' +possibleAnswers.length + '</span>';
  responseDisplay.innerHTML = 'Game Started.';
  AnimatePop(responseDisplay);
  Draw();
  clearInterval(interval);
  interval = undefined;
  timer = gameTime;
  StartTimer();
  ShowTimer();
  col = RandomCol(200);
  playing = true;
}

function GetWords()
{
  answers.length = 0;
  possibleAnswers.length = 0;
  consonants.length = 0;
  consonants = [ "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", ];
  vowels.length = 0;
  vowels = [ "a", "e", "i", "o", "u" ];
  choices.length = 0;
  let count = 9;
  let pick = Math.floor(Math.random() * 4) + 1;
  count -= pick;
  for(let i = 0; i < pick; i++)
  {
    let picked = Math.floor(Math.random() * vowels.length);
    if(vowels[picked] != null)
    {
      choices.push(vowels[picked]);
      let perCent = Math.floor(Math.random() * 100);
      if(perCent < 5 && i < pick)
      {
        choices.push(vowels[picked]);
        i++;
      }
      vowels.splice(picked, 1);
    }
  }
  for(let i = 0; i < count; i++)
  {
    let picked = Math.floor(Math.random() * consonants.length);
    choices.push(consonants[picked]);
    let perCent = Math.floor(Math.random() * 100);
    if(perCent < 5 && i < count)
    {
      choices.push(consonants[picked]);
      i++;
    }
    consonants.splice(picked, 1);
  }
  choices = ShuffleArray(choices);
  if(choices.length > 9) choices.length = 9;
  let middle = choices[0].toString();
  for(let i = 0; i < words.length; i++)
  {
    if(!words[i].includes(middle) || words[i].length > 9 || words[i].length < 3) continue;
    let newList = [];
    let thisWord = words[i];
    let check = true;
    for(let c = 0; c < choices.length; c++)
    {
      let newC = choices[c];
      newList.push(newC);
    }
    for(let w = 0; w < thisWord.length; w++)
    {
      if(!newList.includes(thisWord[w])) check = false;
      if(newList.includes(thisWord[w]))
      {
        let iOf = newList.indexOf(thisWord[w]);
        newList.splice(iOf, 1);
      }
      if (newList.length <= 0) check = false;
    }
    if (!check) continue;
    else possibleAnswers.push(thisWord);
  }
}

function ShuffleArray(array)
{
  for(let i = array.length - 1; i > 0; i--)
  {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function StartTimer()
{
  interval = setInterval(DegradeTimer, 1000);
}

function DegradeTimer()
{
  if(timer > 1)
  {
    timer--;
    ShowTimer();
  }
  else
  {
    EndGame();
  }
}

function ShowTimer()
{
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  if(minutes > 0 && seconds < 10) seconds = "0" + seconds;
  if(minutes > 0) timerDisplay.innerHTML = minutes + ":" + seconds;
  else timerDisplay.innerHTML = seconds;
}

function CheckButton(x, y)
{
  for(let i = 0; i < buttonPoints.length; i++)
  {
    let b = buttonPoints[i];
    if(CircleIntersect(x, y, 1, b.x, b.y, b.r))
    {
      return i;
    }
  }
  return false;
}

function CircleIntersect(x1, y1, r1, x2, y2, r2)
{
  let squareDistance = ( x1 - x2 ) * ( x1 - x2 ) + ( y1 - y2 ) * ( y1 - y2 );
  return squareDistance <= ( ( r1 + r2 ) * ( r1 + r2 ) );
}

function GetCirclePoint(xStart, yStart, radius, angle)
{
  let x = xStart + radius * Math.cos(angle)
  let y = yStart + radius * Math.sin(angle)
  return {x:x, y:y, r:30};
}

function DegreeToRad(degrees)
{
  return degrees * ( Math.PI / 180 );
}

function AddLetter(index)
{
  if(submitAnswerID.value.length >= 9) return;
  if(tempButtons.includes(index)) return;
  tempButtons.push(index);
  submitAnswerID.value += buttonPoints[index].c;
  Draw();
}

function DeleteLetter()
{
  if(tempButtons.length > 0)
  {
    tempButtons.length = tempButtons.length - 1;
  }
  let current = submitAnswerID.value;
  current = current.substring(0, current.length - 1);
  submitAnswerID.value = current;
  Draw();
}

function CheckManualEntry()
{
  let txt = submitAnswerID.value;
  let tempChoices = [];

  for(let i = 0; i < choices.length; i++)
  {
    tempChoices.push(choices[i]);
  }
  let newStr = "";
  for(let i = 0; i < txt.length; i++)
  {
    if(tempChoices.includes(txt[i]))
    {
      newStr += txt[i];
      let iOf = tempChoices.indexOf(txt[i]);
      tempChoices.splice(iOf, 1);
    }
  }

  submitAnswerID.value = newStr;

  tempButtons.length = 0;
  let validate = false;

  for(let i = 0; i < newStr.length; i++)
  {
    let search = newStr[i].toLowerCase();
    if(search === choices[0])
    {
      validate = true;
      tempButtons.push(0);
      continue;
    }
    if(choices.includes(search))
    {
      let iOf = choices.indexOf(search);
      if(tempButtons.includes(iOf))
      {
        let counter = 0;
        let find = iOf;
        while(find === iOf)
        {
          iOf = choices.indexOf(search, find + 1);
          counter++;
          if(counter > 100) break;
        }
      }
      validate = true;
      tempButtons.push(iOf);
    }
  }
  Draw();
  return validate;
}

function Draw()
{
  buttonPoints.length = 0;
  c.clearRect(0,0,canvas.width,canvas.height);
  let w = canvasContainer.scrollHeight * 0.9;
  canvas.width = w;
  canvas.height = w;
  c.width = w;
  c.height = w;
  c.fillStyle = "black";
  c.strokeStyle = "black";
  c.lineWidth = 0.5;
  c.font = "16px Arial";
  c.textAlign = "center";
  c.textBaseline = 'middle';
  let buttonCircle = canvas.width/10;
  // main circle
  c.beginPath();
  c.arc((c.width/2), (c.height/2), ((c.width/2)-c.lineWidth * 4), 0, (2 * Math.PI));
  c.stroke();
  /// inner circle
  c.beginPath();
  c.arc((c.width/2), (c.height/2), ((c.width/5)-c.lineWidth), 0, (2 * Math.PI));
  c.stroke();
  // middle letter
  c.fillText(choices[0].toUpperCase(), (c.width/2), (c.height/2));
  let startPoint = {x:(c.width/2), y:(c.height/2), r:((c.width/5)-c.lineWidth), c:choices[0], i:0};
  buttonPoints.push(startPoint);
  // line angles
  let angles = [0, 45, 90, 135, 180, 225, 270, 315];
  // draw lines
  for(let i = 0; i < angles.length; i++)
  {
    let startPoint = GetCirclePoint((c.width/2), (c.height/2), ((c.width/5)-c.lineWidth), DegreeToRad(angles[i]));
    let endPoint = GetCirclePoint((c.width/2), (c.height/2), ((c.width/2)-c.lineWidth * 4), DegreeToRad(angles[i]));
    c.beginPath();
    c.moveTo(startPoint.x, startPoint.y);
    c.lineTo(endPoint.x, endPoint.y);
    c.stroke();
  }
  // outer button positions
  angles = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];
  if(tempButtons.includes(0))
  {
    c.fillStyle = "rgba(" + col.r + " , " + col.g + " , " + col.b + ", 1)";
    let startPoint = {x:(c.width/2), y:(c.height/2), r:((c.width/5)-c.lineWidth), c:choices[0], i:0};
    c.beginPath();
    c.arc(startPoint.x, startPoint.y, startPoint.r, 0, (2 * Math.PI));
    c.fill();
    c.fillStyle = "black";
    c.fillText(choices[0].toUpperCase(), startPoint.x, startPoint.y);
  }
  let counter = 1;
  c.strokeStyle = "grey";
  // draw outer buttons
  for(let i = 0; i < angles.length; i++)
  {
    let startPoint = GetCirclePoint((c.width/2), (c.height/2), ((c.width/3)-c.lineWidth), DegreeToRad(angles[i]));
    startPoint.c = choices[counter];
    startPoint.i = counter;
    if(tempButtons.includes(counter))
    {
      c.fillStyle = "rgba(" + col.r + " , " + col.g + " , " + col.b + ", 1)";
      c.beginPath();
      c.arc(startPoint.x, startPoint.y, buttonCircle, 0, (2 * Math.PI));
      c.fill();
    }
    c.beginPath();
    c.arc(startPoint.x, startPoint.y, buttonCircle, 0, (2 * Math.PI));
    c.stroke();
    c.fillStyle = "black";
    c.fillText(choices[counter].toUpperCase(), startPoint.x, startPoint.y);
    counter++;
    buttonPoints.push(startPoint);
  }
}

function RandomCol(floor)
{
  let r = (Math.floor(Math.random() * (255 - floor))) + floor;
  let g = (Math.floor(Math.random() * (255 - floor))) + floor;
  let b = (Math.floor(Math.random() * (255 - floor))) + floor;
  return {r, g, b};
}

function AnimatePop(panel)
{
  panel.animate([
    { transform: 'scale(110%, 110%)'},
    { transform: 'scale(109%, 109%)'},
    { transform: 'scale(108%, 108%)'},
    { transform: 'scale(107%, 107%)'},
    { transform: 'scale(106%, 106%)'},
    { transform: 'scale(105%, 105%)'},
    { transform: 'scale(104%, 104%)'},
    { transform: 'scale(103%, 103%)'},
    { transform: 'scale(102%, 102%)'},
    { transform: 'scale(101%, 101%)'},
    { transform: 'scale(100%, 100%)'}],
    {
      duration: 100,
    }
  );
}

function ValidateAnswer()
{
  if(!playing) return;
  let submission = submitAnswerID.value;
  if(submission.length == 0) return;
  for(let i = 0; i < submission.length; i++)
  {
    if(!choices.includes(submission[i]))
    {
      responseDisplay.innerHTML = 'Invalid Answer.';
      AnimatePop(responseDisplay);
      submitAnswerID.value = '';
      return;
    }
  }
  if(possibleAnswers.includes(submission) && !answers.includes(submission))
  {
    responseDisplay.innerHTML = 'Correct.';
    AnimatePop(responseDisplay);
    answers.unshift(submission);
    submitAnswerID.value = '';
    ShowAnswersSoFar();
  }
  else if(possibleAnswers.includes(submission) && answers.includes(submission))
  {
    responseDisplay.innerHTML = 'Already Got.';
    AnimatePop(responseDisplay);
    submitAnswerID.value = '';
  }
  else
  {
    responseDisplay.innerHTML = 'Invalid Answer.';
    AnimatePop(responseDisplay);
    submitAnswerID.value = '';
  }
  tempButtons.length = 0;
  Draw();
}

function ShowAnswersSoFar()
{
  if(answers.length > 0 && answerContainer != null && ScoreDisplay != null)
  {
    answerContainer.innerHTML = '';
    for(let i = 0; i < answers.length; i++)
    {
      let b2 = document.createElement("button");
      b2.className = "answerButtons p-2 m-2 rounded-lg";
      b2.style.fontSize = '20px';
      b2.style.backgroundColor = 'rgb(150,150,255)';
      b2.innerHTML = answers[i];
      b2.onclick = GetDefinition;
      answerContainer.appendChild(b2);
    }
    ScoreDisplay.innerHTML = '<span style="color:var(--wordGot);">' + answers.length + '</span>' +'/' + '<span style="color:var(--wordMissed);">' +possibleAnswers.length + '</span>';
  }
}

function GetDefinition(event)
{
  window.open("http://www.google.com/search?q=" + 'dictionary definition of ' + event.target.innerHTML); 
}

function EndGame()
{
  answerContainer.innerHTML = '';
  submitAnswerID.value = '';
  responseDisplay.innerHTML = 'Game Ended.';
  AnimatePop(responseDisplay);
  for(var i = 0; i < possibleAnswers.length; i++)
  {
    var b2 = document.createElement("button");
    b2.className = "answerButtons";
    b2.style.fontSize = '20px';
    if(answers.includes(possibleAnswers[i]))
    {
      b2.style.backgroundColor = 'rgb(150,150,255)';
    }
    else
    {
      b2.style.backgroundColor = 'rgb(255,150,150)';
    }
    b2.innerHTML = possibleAnswers[i];
    b2.onclick = GetDefinition;
    answerContainer.appendChild(b2);
  }
  timer = 0;
  clearInterval(interval);
  interval = undefined;
  timerDisplay.innerHTML = "0:00";
  tempButtons.length = 0;
  Draw();
  playing = false;
}

canvas.onmousedown = function(event)
{
  if(event.button === 0 && playing)
  {
    event.preventDefault();
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let index = CheckButton(x, y);
    if(index !== false)
    {
      AddLetter(index);
    }
  }
}

canvas.ontouchstart = function(event)
{
  if(event.touches !== undefined && playing)
  {
    let touch = event.touches[0] || event.changedTouches[0];
    let index = CheckButton(touch.clientX, touch.clientY);
    if(index !== false)
    {
      AddLetter(index);
    }
  }
};

submitAnswerID.onkeyup = function(event)
{
  if(!playing)
  {
    submitAnswerID.value = "";
    return;
  }
  CheckManualEntry();
  if(event.key == "Enter") ValidateAnswer();
}

window.onresize = function() { if(playing) Draw(); };
document.addEventListener("DOMContentLoaded", Start);