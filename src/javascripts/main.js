"use strict";

function CalculateVh()
{
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

window.addEventListener('DOMContentLoaded', CalculateVh);
window.addEventListener('resize', CalculateVh);
window.addEventListener('orientationchange', CalculateVh);

// GAME classes

class Vector
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
  }
}

class Cell
{
  constructor()
  {
    this.index = 0;

    this.up = true;
    this.down = true;
    this.left = true;
    this.right = true;

    this.leftIndex = -1;
    this.rightIndex = -1;
    this.upIndex = -1;
    this.downIndex = -1;

    this.visited = false;
    this.target = false;
    
    this.row = 0;
    this.column = 0;

    this.rowPos = 0;
    this.columnPos = 0;
  }
}

class Player
{
  constructor()
  {
    this.x = 0;
    this.y = 0;
    this.index = 0;
  }

  Move(DIRECTION)
  {
    if(this.CheckValidPos(DIRECTION))
    {
      ClearPlayer();
      if(DIRECTION === "UP")
      {
        this.y -= h;
        this.index = parseInt(this.index) - 1;
      }
      else if (DIRECTION === "DOWN")
      {
        this.y += h;
        this.index = parseInt(this.index) + 1;
      }
      else if (DIRECTION === "LEFT")
      {
        this.x -= w;
        this.index = parseInt(this.index) - parseInt(width);
      }
      else if (DIRECTION === "RIGHT")
      {
        this.x += w;
        this.index = parseInt(this.index) + parseInt(width);
      }
      ClearMaze();
      DrawMaze();
      DrawRoute();
      DrawPlayer();
      this.CheckWin();
    }
  }

  CheckValidPos(DIRECTION)
  {
     // players row
    let r = Math.floor(this.x / w);
    // players column
    let c = Math.floor(this.y / h);
    // index of the cell player is in
    let i = r * height + c;
    this.index = i;

    if(DIRECTION === "UP" && maze[i].up === true) return false;
    if(DIRECTION === "DOWN" && maze[i].down === true) return false;
    if(DIRECTION === "LEFT" && maze[i].left === true) return false;
    if(DIRECTION === "RIGHT" && maze[i].right === true) return false;
    return true;
  }

  CheckWin()
  {
    if(Math.floor(this.x) === Math.floor(maze[maze.length-1].rowPos + w/2) && 
       Math.floor(this.y) === Math.floor(maze[maze.length-1].columnPos - h/2))
	  {
      if(autoNew)
      {
        if(increment && width < 50)
        {
          width++;
          height++;
          display001.value = width;
        }
        NewMaze();
      }
    }
  }
}

// GENERATE CUSTOM MAZE

const generateMaze = document.getElementById("generateMaze");
generateMaze.onclick = function () { GenerateCustomMaze(); };

// RESET TO DEFAULT

const ResetButton = document.getElementById("ResetButton");
ResetButton.onclick = function () { NewMaze(); };

// HIDE CONTROLS

const ControllerButton = document.getElementById("ControllerButton");
ControllerButton.onclick = function () { HidePad(); };
let hideT = false;
const footerControls = document.getElementById("footerControls");

// THEME related references

const iUp = document.getElementById("iUp");
const iLeft = document.getElementById("iLeft");
const iRight = document.getElementById("iRight");
const iDown = document.getElementById("iDown");

let mazeColour = "rgba(50, 50, 60, 1)";
let playerColour = "rgba(150, 250, 150, 1)";
let exitColour = "rgba(250, 150, 150, 1)";
let routeColour = "rgba(46, 97, 113, 0.35)";

// TOGGLE CUSTOM MAZE MENU

let toggleS = false;
const settingsMenu = document.getElementById("settingsMenu");
settingsMenu.style.display = 'none';
const OptionsButton = document.getElementById("OptionsButton");
OptionsButton.onclick = function () { ToggleSettings(); };
const SearchButton = document.getElementById("SearchButton");
SearchButton.onclick = function () { Find(); };

// CUSTOM MENU INPUT

const aNew = document.getElementById("autonew");
aNew.onclick = function () { AutoNew(); };

const aIncrement = document.getElementById("autoincrement");
aIncrement.onclick = function () { AutoIncrement(); };

// TOUCHPAD CONTROLS

const upButton = document.getElementById("upButton");
upButton.onclick = function () { TouchPad('UP'); };
const downButton = document.getElementById("downButton");
downButton.onclick = function () { TouchPad('DOWN'); };
const leftButton = document.getElementById("leftButton");
leftButton.onclick = function () { TouchPad('LEFT'); };
const rightButton = document.getElementById("rightButton");
rightButton.onclick = function () { TouchPad('RIGHT'); };

// GENERAL CANVAS VARIABLES

const gameDiv = document.getElementById("gameDiv");
const canvas = document.getElementById("ctx");
const ctx = document.getElementById("ctx").getContext("2d");

// GAME VARIABLES

let width, height, size, w, h, index, nowCell, running, rnd, position, autoNew, t1, t2, t3, increment, cWidth, cHeight, factor;
let maze = [];
let history1 = [];
let mousePos = new Vector();
let player = new Player();

function ToggleSettings()
{
  toggleS = !toggleS;
  if(toggleS) settingsMenu.style.display = '';
  else settingsMenu.style.display = 'none';
}

// MAZE CODE

function DefaultSettings()
{
	display001.value = 5;

  width = 5;
  height = 5;

  if(hideT) factor = 0.925;
  else factor = 0.625;
  
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight * factor;

  let squareSize;
  
  if(screenWidth >= screenHeight) squareSize = screenHeight;
  else squareSize = screenWidth;
  
  squareSize = squareSize * 0.9;

  cWidth = squareSize;
  cHeight = squareSize;
  
  autoNew = true;
  increment = true;
  aNew.checked = true;
  aIncrement.checked = true;
  
  NewMaze();
}

function AutoNew()
{
  autoNew = !autoNew;
}

function AutoIncrement()
{
  increment = !increment;
}

function GenerateCustomMaze()
{
  width = Number(display001.value);
  height = Number(display001.value);

  autoNew = aNew.checked;
  increment = aIncrement.checked;

  ToggleSettings();

  NewMaze();
}

function NewMaze()
{
  maze.length = 0;
  history1.length = 0;
  activePath = new Path();

  width = Number(display001.value);
	height = Number(display001.value);
	
	autoNew = aNew.checked;
	increment = aIncrement.checked;

  canvas.width = cWidth;
  canvas.height = cHeight;

  size = width * height;
  
  w = canvas.width / width;
  h = canvas.height / height;
  
  index = 0;
  
  nowCell = maze[0];
  
  running = true;
  
  rnd = 0;
  
  t1 = Math.random();
  t2 = Math.random();
  t3 = Math.random();

  for(let x = 0; x < width; x++)
  {
    for(let y = 0; y < height; y++)
	  {
      let newCell = new Cell();
      newCell.row = x;
      newCell.column = y;
      newCell.rowPos = x * w;
      newCell.columnPos = y * h + h;
      newCell.index = index;
      if((index + height) <= (width * height)) newCell.rightIndex = index + height;
      else newCell.rightIndex = -1;
      if((index - height) >= 0) newCell.leftIndex = index - height;
      else newCell.leftIndex = -1;
      if(y < height - 1) newCell.downIndex = index + 1;
      else newCell.downIndex = -1;
      if(y > 0) newCell.upIndex = index - 1;
      else newCell.upIndex = -1;
      if(index === ( ( width * height ) - 1 )) newCell.target = true;
      maze.push(newCell);
      index++;
    }
  }
  MakeMaze();
}

function MakeMaze()
{
  rnd = Math.floor(Math.random() * maze.length);
  
  history1.push(rnd);
  
  position = history1.length - 1;

  let counter = 0;

  while(running)
  {
    counter++;

    if(counter > 100000000) break;

    let choose = [];

    maze[rnd].visited = true;

    let upI = rnd -1;
    let downI = rnd + 1;
    let leftI = rnd - height;
    let rightI = rnd + height;

    if(upI >= 0 && upI < maze.length && maze[rnd].column != 0)
      if(maze[upI].visited === false)
	    {
        choose.push(upI);
      }
    if(downI >= 0 && downI < maze.length && maze[rnd].column != height - 1)
      if(maze[downI].visited === false)
	    {
        choose.push(downI);
      }
    if(leftI >= 0 && leftI < maze.length && maze[rnd].row != 0)
      if(maze[leftI].visited === false)
	    {
        choose.push(leftI);
      }
    if(rightI >= 0 && rightI < maze.length && maze[rnd].row != width - 1)
      if(maze[rightI].visited === false)
	    {
        choose.push(rightI);
      }

    if(choose.length > 0)
	  {
      let pick = Math.floor(Math.random() * choose.length);
      if(choose[pick] === upI)
	    {
        maze[rnd].up = false;
        maze[upI].down = false;
      }
      if(choose[pick] === downI)
	    {
        maze[rnd].down = false;
        maze[downI].up = false;
      }
      if(choose[pick] === leftI)
	    {
        maze[rnd].left = false;
        maze[leftI].right = false;
      }
      if(choose[pick] === rightI)
	    {
        maze[rnd].right = false;
        maze[rightI].left = false;
      }
      history1.push(choose[pick]);
      maze[choose[pick]].visited = true;
      GetNext();
    }
    else
    {
      history1.splice(position, 1);
      GetNext();
    }
  }

  player.x = maze[0].rowPos + w / 2;
  player.y = maze[0].columnPos - h / 2;
  player.index = 0;

  ClearMaze();
  DrawMaze();
  DrawRoute();
  DrawPlayer();
}

function GetNext()
{
  if(history1.length > 0)
  {
    let type = Math.random();
    if(type >= t1)
	  {
      rnd = history1[history1.length - 1];
      position = history1.length - 1;
    }
    else if(type < t1 && type >= t3)
	  {
      rnd = history1[0];
      position = 0;
    }
    else if(type < t3)
    {
      let pickR = Math.floor(Math.random() * history1.length);
      rnd = history1[pickR];
      position = pickR;
    }
  } 
  else
  {
    running = false;
  }
}

// DRAW FUNCTIONS

function ClearMaze()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function DrawMaze()
{
  ctx.strokeStyle = mazeColour;
  ctx.lineWidth = 1;
  const half = ctx.lineWidth / 2;
  const extra = ctx.lineWidth;
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.stroke();
  
  for(let x = 0; x < maze.length; x++)
  {
    if(maze[x].visited === true)
	  {
      ctx.beginPath();
      ctx.fill();
    }
    if(maze[x].up === true)
	  {
      ctx.beginPath();
      ctx.moveTo(maze[x].rowPos + half, maze[x].columnPos - h + half);
      ctx.lineTo(maze[x].rowPos + w + half, maze[x].columnPos - h + half);
      ctx.stroke();
    }
    if(maze[x].down === true)
	  {
      ctx.beginPath();
      ctx.moveTo(maze[x].rowPos + half, maze[x].columnPos + half);
      ctx.lineTo(maze[x].rowPos + w + half, maze[x].columnPos + half);
      ctx.stroke();
    }
    if(maze[x].left === true)
	  {
      ctx.beginPath();
      ctx.moveTo(maze[x].rowPos, maze[x].columnPos - extra);
      ctx.lineTo(maze[x].rowPos, maze[x].columnPos - h);
      ctx.stroke();
    }
    if(maze[x].right === true)
	  {
      ctx.beginPath();
      ctx.moveTo(maze[x].rowPos + w, maze[x].columnPos + extra);
      ctx.lineTo(maze[x].rowPos + w, maze[x].columnPos - h);
      ctx.stroke();
    }
  }
  // fix borders so same width all around
  // left border
  ctx.beginPath();
  ctx.moveTo(0 + half, 0 + half);
  ctx.lineTo(0 + half, canvas.height + half);
  ctx.stroke();
  // bottom border
  ctx.beginPath();
  ctx.moveTo(0 - half, canvas.width - half);
  ctx.lineTo(canvas.height - half, canvas.width - half);
  ctx.stroke();
  // right border
  ctx.beginPath();
  ctx.moveTo(canvas.height - half, canvas.width - half);
  ctx.lineTo(canvas.height - half, 0 - half);
  ctx.stroke();
  // top border
  ctx.beginPath();
  ctx.moveTo(0 + half, 0 + half);
  ctx.lineTo(canvas.height + half, 0 + half);
  ctx.stroke();
}

function DrawRoute()
{
  if(activePath.path.length === 0) return;
  ctx.fillStyle = routeColour;
  for(let i = 0; i < activePath.path.length; i++)
  {
    ctx.fillRect(maze[activePath.path[i]].rowPos, maze[activePath.path[i]].columnPos - h, w + ctx.lineWidth / 16, h + ctx.lineWidth / 16);
  }
}

function ClearPlayer()
{
  ctx.clearRect(player.x - w/3, player.y - h/3, w/1.5, h/1.5);
}

function DrawPlayer()
{
  const quarter = ctx.lineWidth / 4;
  ctx.fillStyle = exitColour;
  ctx.fillRect(maze[maze.length-1].rowPos + w/4 + quarter, maze[maze.length-1].columnPos - h/2 - h/4 + quarter, w/2, h/2);
  ctx.fillStyle = playerColour;
  ctx.fillRect(player.x - w/4 + quarter, player.y - h/4 + quarter, w/2, h/2);
}

// PLAYER MOVEMENT

// KEYBOARD

document.onkeydown = function(event)
{
  if(event.key === "d" || event.key === "ArrowRight") player.Move("RIGHT");
  if(event.key === "s"  || event.key === "ArrowDown") player.Move("DOWN");
  if(event.key === "a"  || event.key === "ArrowLeft") player.Move("LEFT");
  if(event.key === "w"  || event.key === "ArrowUp") player.Move("UP");
}

// TOUCHPAD

function TouchPad(DIRECTION)
{
  if(DIRECTION === "UP") player.Move("UP")
  else if(DIRECTION === "DOWN") player.Move("DOWN");
  else if(DIRECTION === "LEFT") player.Move("LEFT");
  else if(DIRECTION === "RIGHT") player.Move("RIGHT");
}

// HIDE TOUCHPAD

function HidePad()
{
  hideT = !hideT;
  if(hideT)
  {
    footerControls.style.display = "none";
  }
  else
  {
    footerControls.style.display = "";
  }
  if(maze.length > 0)
  {
    ReSizeMaze();
  }
}

function ReSizeMaze()
{
  if(hideT) factor = 0.925;
  else factor = 0.625;

  let vhFactor;
  if(hideT) vhFactor = 92.5;
  else vhFactor = 62.5;
  
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight * factor;
  let squareSize;
  
  if(screenWidth >= screenHeight) squareSize = screenHeight;
  else squareSize = screenWidth;

  gameDiv.style.height = 'calc(var(--vh) * ' + vhFactor + ')';
  gameDiv.style.top = 'calc(var(--vh) * 7.5)';
  gameDiv.style.display = 'flex';
  gameDiv.style.justifyContent = 'center';
  gameDiv.style.alignItems = 'center';
  
  squareSize = squareSize * 0.9;

  cWidth = squareSize;
  cHeight = squareSize;

  canvas.width = cWidth;
  canvas.height = cHeight;

  size = width * height;
  
  w = canvas.width / width;
  h = canvas.height / height;

  let counter = 0;

  for(let x = 0; x < width; x++)
  {
    for(let y = 0; y < height; y++)
	  {
      maze[counter].rowPos = x * w;
      maze[counter].columnPos = y * h + h;
      counter++;
    }
  }

  player.x = maze[player.index].rowPos + w / 2;
  player.y = maze[player.index].columnPos - h / 2;

  if(maze.length > 0)
  {
    ClearMaze();
    DrawMaze();
    DrawRoute();
    DrawPlayer();
  }
}

// FLIP PAD

function FlipPad()
{
  if(flipState === "center")
  {
    footerControls.style.justifyContent = "right";
    flipState = "right";
  }
  else if (flipState === "right")
  {
    footerControls.style.justifyContent = "left";
    flipState = "left";
  }
  else if (flipState === "left")
  {
    footerControls.style.justifyContent = "center";
    flipState = "center";
  }
}

class Path
{
  constructor()
  {
    this.path = [];
    this.completed = false;
  }
}

let paths = [];
let activePath = new Path();
let currentPath = new Path();

function Find()
{
  paths = [];
  let check = player.index;
  let path = new Path();
  path.path.push(check);
  paths.push(path);
  let done = false;
  let iterator = 0;

  while(!done)
  {
    iterator++;
    if(iterator > 10000) break;

    // if there are any paths, sort them and select the shortest one. Set check to the last position of that path.
    if(paths.length > 0)
    {
      let smallest = paths[0].path.length;
      let index = 0;
      for(let i = 0; i < paths.length; i++)
      {
        if(paths[i].path.length < smallest)
        {
          smallest = paths[i].path.length;
          index = i;
        }
      }
      path = paths[index];
      check = path.path[path.path.length - 1];
    }

    // is there a cell in that direction and don't backtrack
    if(maze[check].left === false && !path.path.includes(maze[check].leftIndex))
    {
      if(maze[check].left === false) // can you walk to that cell
      {
        let newPath = new Path();
        for(let i = 0; i < path.path.length; i++)
        {
          newPath.path.push(path.path[i]);
        }
        newPath.path.push(maze[check].leftIndex);
        paths.push(newPath);
        if(maze[maze[check].leftIndex].target === true) // is that cell the target destination, in which case end
        {
          newPath.completed = true;
          currentPath = paths.indexOf(newPath);
          activePath = newPath;
          done = true;
          break;
        }
      }
    }
    if(maze[check].right === false && !path.path.includes(maze[check].rightIndex))
    {
      if(maze[check].right === false) // can you walk to that cell
      {
        let newPath = new Path();
        for(let i = 0; i < path.path.length; i++)
        {
          newPath.path.push(path.path[i]);
        }
        newPath.path.push(maze[check].rightIndex);
        paths.push(newPath);
        if(maze[maze[check].rightIndex].target === true) // is that cell the target destination, in which case end
        {
          newPath.completed = true;
          currentPath = paths.indexOf(newPath);
          activePath = newPath;
          done = true;
          break;
        }
      }
    }
    if(maze[check].up === false && !path.path.includes(maze[check].upIndex))
    {
      if(maze[check].up === false) // can you walk to that cell
      {
        let newPath = new Path();
        for(let i = 0; i < path.path.length; i++)
        {
          newPath.path.push(path.path[i]);
        }
        newPath.path.push(maze[check].upIndex);
        paths.push(newPath);
        if(maze[maze[check].upIndex].target === true) // is that cell the target destination, in which case end
        {
          newPath.completed = true;
          currentPath = paths.indexOf(newPath);
          activePath = newPath;
          done = true;
          break;
        }
      }
    }
    if(maze[check].down === false && !path.path.includes(maze[check].downIndex))
    {
      if(maze[check].down === false) // can you walk to that cell
      {
        let newPath = new Path();
        for(let i = 0; i < path.path.length; i++)
        {
          newPath.path.push(path.path[i]);
        }
        newPath.path.push(maze[check].downIndex);
        paths.push(newPath);
        if(maze[maze[check].downIndex].target === true) // is that cell the target destination, in which case end
        {
          newPath.completed = true;
          currentPath = paths.indexOf(newPath);
          activePath = newPath;
          done = true;
          break;
        }
      }
    }
    let removeAt = paths.indexOf(path);
    paths.splice(removeAt, 1);
  }
  ClearMaze();
  DrawMaze();
  DrawRoute();
  DrawPlayer();
}

window.addEventListener('resize', ReSizeMaze);

// Intialisation
document.addEventListener('DOMContentLoaded', DefaultSettings);