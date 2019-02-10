const worldMap = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,2,2,2,2,0,0,0,0,3,0,3,0,3,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,3,0,0,0,3,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,2,0,2,2,0,0,0,0,3,0,3,0,3,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,0,0,0,5,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
],
      mapWidth = mapHeight = 24,
      TURN_LEFT = 81,
      UP = 87,
      TURN_RIGHT = 69,
      LEFT = 65,
      DOWN = 83,
      RIGHT = 68,
      ALT_LEFT = 37,
      ALT_UP = 38,
      ALT_RIGHT = 39
      ALT_DOWN = 40,
      DIRS = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1]
      ],
      PLANES = [
        [0, 0.66],
        [-0.66, 0],
        [0, -0.66],
        [0.66, 0],
      ];

glMatrix.glMatrix.setMatrixArrayType(Array);
let screen, engine;
let position = glMatrix.vec2.fromValues(11.5,11.5),
    nextPosition = glMatrix.vec2.clone(position),
    dirIndex = 0,
    moveDirIndex = dirIndex,
    direction = glMatrix.vec2.fromValues(DIRS[dirIndex][0], DIRS[dirIndex][1]),
    nextDirection = glMatrix.vec2.clone(direction),
    plane = glMatrix.vec2.fromValues(PLANES[dirIndex][0], PLANES[dirIndex][1]),
    screenWidth = 512,
    screenHeight = 384,
    turnLeft = turnRight = goLeft = goRight = goForward = goBack = turningLeft = turningRight = moving = false,
    renderNextFrame = true;

function update(_deltaTime) {
  let turn = 0,
      turnStep = 0;
  if(!turningLeft && !turningRight && !moving) {
    if(turnLeft) {
      turningLeft = true;
      dirIndex = changeDirection(1);
      glMatrix.vec2.set(nextDirection, DIRS[dirIndex][0], DIRS[dirIndex][1]);
    }

    if(turnRight) {
      turningRight = true;
      dirIndex = changeDirection(-1);
      glMatrix.vec2.set(nextDirection, DIRS[dirIndex][0], DIRS[dirIndex][1]);
    }

    if(turnLeft && turnRight) {
      turningLeft = turningRight = false;
    }

    if(goLeft) {
      turnStep = 1;
    }

    if(goBack) {
      turnStep = 2;
    }

    if(goRight) {
      turnStep = -1;
    }

    if(goLeft || goForward || goRight || goBack) {
      moveDirIndex = changeDirection(turnStep);
      if(worldMap[Math.floor(position[0] + DIRS[moveDirIndex][0])][Math.floor(position[1] + DIRS[moveDirIndex][1])] === 0) {
        glMatrix.vec2.add(nextPosition, position, DIRS[moveDirIndex]);
        moving = true;
      }
    }

    if((goForward && goBack) || (goLeft && goRight)) {
      moving = false;
    }
  }

  if(turningLeft) {
    turn = 1;
  }

  if(turningRight) {
    turn = -1;
  }

  const moveSpeed = _deltaTime * 5.0;

  if(moving) {
    glMatrix.vec2.scaleAndAdd(position, position, DIRS[moveDirIndex], moveSpeed);
    if(glMatrix.vec2.equals(position, nextPosition)) {
      glMatrix.vec2.copy(position, nextPosition);
      moving = false;
      renderNextFrame = true;
    }
  }

  if(turningLeft || turningRight) {
    const rotationSpeed = _deltaTime * 5.0,
          cos = Math.cos(rotationSpeed * turn),
          sin = Math.sin(rotationSpeed * turn);
          rotationMatrix = glMatrix.mat2.fromValues(cos, sin, -sin, cos);

    glMatrix.vec2.transformMat2(direction, direction, rotationMatrix);
    glMatrix.vec2.transformMat2(plane, plane, rotationMatrix);
    if(glMatrix.vec2.angle(direction, nextDirection) < 0.025) {
      glMatrix.vec2.copy(direction, nextDirection);
      glMatrix.vec2.set(plane, PLANES[dirIndex][0], PLANES[dirIndex][1]);
      moveDirIndex = dirIndex;
      turningLeft = turningRight = false;
      renderNextFrame = true;
    }
  }
}

function changeDirection(_turnStep) {
  return (dirIndex + 4 + _turnStep) % 4;
}

function render() {
  if(!turningLeft && !turningRight && !moving && !renderNextFrame) {
    return;
  }
  if(renderNextFrame) {
    renderNextFrame = false;
  }
  screen.fillStyle = "#333333";
  screen.fillRect(0,0, screenWidth, screenHeight / 2);
  screen.fillStyle = "#7f7f7f";
  screen.fillRect(0,screenHeight / 2, screenWidth, screenHeight / 2);
  let cameraX,
      rayDirection = glMatrix.vec2.create(),
      deltaDistance = glMatrix.vec2.create(),
      sideDistance = new Vector(0,0),
      map = new Vector(0,0),
      step = new Vector(0,0),
      hit,
      side,
      perpendicularWallDistance,
      lineHeight,
      drawStart,
      drawEnd,
      color;

  for(let x = 0; x < screenWidth; x++) {
    cameraX = 2 * x / screenWidth - 1;
    rayDirection = glMatrix.vec2.scaleAndAdd(rayDirection, direction, plane, cameraX);

    map.x = Math.floor(position[0]);
    map.y = Math.floor(position[1]);

    deltaDistance[0] = Math.abs(1 / rayDirection[0]);
    deltaDistance[1] = Math.abs(1 / rayDirection[1]);

    if(rayDirection[0] < 0) {
      step.x = -1;
      sideDistance.x = (position[0] - map.x) * deltaDistance[0];
    } else {
      step.x = 1;
      sideDistance.x = (map.x + 1 - position[0]) * deltaDistance[0];
    }
    if(rayDirection[1] < 0) {
      step.y = -1;
      sideDistance.y = (position[1] - map.y) * deltaDistance[1];
    } else {
      step.y = 1;
      sideDistance.y = (map.y + 1 - position[1]) * deltaDistance[1];
    }

    hit = 0;
    while(hit === 0) {
      if(sideDistance.x < sideDistance.y) {
        sideDistance.x += deltaDistance[0];
        map.x += step.x;
        side = 0;
      } else {
        sideDistance.y += deltaDistance[1];
        map.y += step.y;
        side = 1;
      }
      if(worldMap[map.x][map.y] > 0) {
        hit = 1;
      }
    }

    if(side === 0) {
      perpendicularWallDistance = (map.x - position[0] + (1 - step.x) / 2) / rayDirection[0];
    } else {
      perpendicularWallDistance = (map.y - position[1] + (1 - step.y) / 2) / rayDirection[1];
    }

    lineHeight = Math.floor(screenHeight / perpendicularWallDistance);

    drawStart = -lineHeight / 2 + screenHeight / 2;
    if(drawStart < 0) {
      drawStart = 0;
    }
    drawEnd = lineHeight / 2 + screenHeight / 2;
    if(drawEnd >= screenHeight) {
      drawEnd = screenHeight;
    }

    switch(worldMap[map.x][map.y]) {
      case 1:
        if(side === 1) {
          color = "#7F0000";
        } else {
          color = "#FF0000";
        }
      break;
      case 2:
        if(side === 1) {
          color = "#007F00";
        } else {
          color = "#00FF00";
        }
      break;
      case 3:
        if(side === 1) {
          color = "#00007F";
        } else {
          color = "#0000FF";
        }
      break;
      case 4:
        if(side === 1) {
          color = "#7F7F00";
        } else {
          color = "#FFFF00";
        }
      break;
      default:
        if(side === 1) {
          color = "#7F7F7F";
        } else {
          color = "#FFFFFF";
        }
      break;
    }

    verticalLine(x, drawStart, drawEnd, color);
  }
}

function verticalLine(_x, _start, _end, _color) {
  screen.fillStyle = _color;
  screen.fillRect(_x, _start, 1, _end - _start);
}

function keySet(_evt, _bool) {
  switch(_evt.keyCode) {
    case TURN_LEFT:
    case ALT_LEFT:
      turnLeft = _bool;
    break;
    case TURN_RIGHT:
    case ALT_RIGHT:
      turnRight = _bool;
    break;
    case LEFT:
      goLeft = _bool;
    break;
    case UP:
    case ALT_UP:
      goForward = _bool;
    break;
    case RIGHT:
      goRight = _bool;
    break;
    case DOWN:
    case ALT_DOWN:
      goBack = _bool;
    break;
  }
}

function keyPressed(_evt) {
  keySet(_evt, true);
  _evt.preventDefault();
}

function keyReleased(_evt) {
  keySet(_evt, false);
}

window.onload = function() {
  screen = document.getElementById("screen").getContext("2d");
  screen.canvas.width = screen.canvas.clientWidth = screenWidth;
  screen.canvas.height = screen.canvas.clientHeight = screenHeight;
  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);
  engine = new Engine(60, 60, update, render);
  engine.start();
}