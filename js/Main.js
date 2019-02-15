/* const worldMap = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,2,2,2,2,0,0,0,0,8,0,7,0,8,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,7,0,0,0,7,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,2,0,2,2,0,0,0,0,5,0,9,0,5,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,15,15,15,15,15,15,15,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,15,0,15,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,15,0,0,0,0,14,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,15,0,15,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,15,0,15,15,15,15,15,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,15,15,15,15,15,15,15,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
], */
const worldMap = [
  [8,8,8,8,8,8,8,8,8,8,8,4,4,6,4,4,6,4,6,4,4,4,6,4],
  [8,0,0,0,0,0,0,0,0,0,8,4,0,0,0,0,0,0,0,0,0,0,0,4],
  [8,0,3,3,0,0,0,0,0,8,8,4,0,0,0,0,0,0,0,0,0,0,0,6],
  [8,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
  [8,0,3,3,0,0,0,0,0,8,8,4,0,0,0,0,0,0,0,0,0,0,0,4],
  [8,0,0,0,0,0,0,0,0,0,8,4,0,0,0,0,0,6,6,6,0,6,4,6],
  [8,8,8,8,0,8,8,8,8,8,8,4,4,4,4,4,4,6,0,0,0,0,0,6],
  [7,7,7,7,0,7,7,7,7,0,8,0,8,0,8,0,8,4,0,4,0,6,0,6],
  [7,7,0,0,0,0,0,0,7,8,0,8,0,8,0,8,8,6,0,0,0,0,0,6],
  [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,6,0,0,0,0,0,4],
  [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,6,0,6,0,6,0,6],
  [7,7,0,0,0,0,0,0,7,8,0,8,0,8,0,8,8,6,4,6,0,6,6,6],
  [7,7,7,7,0,7,7,7,7,8,8,4,0,6,8,4,8,3,3,3,0,3,3,3],
  [2,2,2,2,0,2,2,2,2,4,6,4,0,0,6,0,6,3,0,0,0,0,0,3],
  [2,2,0,0,0,0,0,2,2,4,0,0,0,0,0,0,4,3,0,0,0,0,0,3],
  [2,0,0,0,0,0,0,0,2,4,0,0,0,0,0,0,4,3,0,0,0,0,0,3],
  [1,0,0,0,0,0,0,0,1,4,4,4,4,4,6,0,6,3,3,0,0,0,3,3],
  [2,0,0,0,0,0,0,0,2,2,2,1,2,2,2,6,6,0,0,5,0,5,0,5],
  [2,2,0,0,0,0,0,2,2,2,0,0,0,2,2,0,5,0,5,0,0,0,5,5],
  [2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,5,0,5,0,5,0,5,0,5],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
  [2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,5,0,5,0,5,0,5,0,5],
  [2,2,0,0,0,0,0,2,2,2,0,0,0,2,2,0,5,0,5,0,0,0,5,5],
  [2,2,2,2,1,2,2,2,2,2,2,1,2,2,2,5,5,5,5,5,5,5,5,5]
],
      mapWidth = mapHeight = 24,
      TURN_LEFT = "KeyQ",
      UP = "KeyW",
      TURN_RIGHT = "KeyE",
      LEFT = "KeyA",
      DOWN = "KeyS",
      RIGHT = "KeyD",
      ALT_LEFT = "ArrowLeft",
      ALT_UP = "ArrowUp",
      ALT_RIGHT = "ArrowRight",
      ALT_DOWN = "ArrowDown",
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
let wallTex = document.createElement("img"),
    textureSize = 64;
let position = glMatrix.vec2.fromValues(10.5,14.5),
    nextPosition = glMatrix.vec2.clone(position),
    dirIndex = 1,
    moveDirIndex = dirIndex,
    direction = glMatrix.vec2.fromValues(DIRS[dirIndex][0], DIRS[dirIndex][1]),
    nextDirection = glMatrix.vec2.clone(direction),
    plane = glMatrix.vec2.fromValues(PLANES[dirIndex][0], PLANES[dirIndex][1]),
    screenWidth = 512,
    screenHeight = 384,
    inverseWidth = 1 / screenWidth,
    gradient,
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
    const rotationSpeed = _deltaTime * 4.0,
          cos = Math.cos(rotationSpeed * turn),
          sin = Math.sin(rotationSpeed * turn);
          rotationMatrix = glMatrix.mat2.fromValues(cos, sin, -sin, cos);

    glMatrix.vec2.transformMat2(direction, direction, rotationMatrix);
    glMatrix.vec2.transformMat2(plane, plane, rotationMatrix);
    if(glMatrix.vec2.angle(direction, nextDirection) < 0.03) {
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
  screen.fillStyle = gradient;
  screen.fillRect(0,0, screenWidth, screenHeight);
  let cameraX,
      rayDirection = glMatrix.vec2.create(),
      deltaDistance = glMatrix.vec2.create(),
      sideDistance = glMatrix.vec2.create(),
      map = glMatrix.vec2.create(),
      step = glMatrix.vec2.create(),
      hit,
      side,
      perpendicularWallDistance,
      lineHeight,
      drawStart,
      drawEnd,
      color,
      leftNormal = glMatrix.vec2.create(),
      rightNormal = glMatrix.vec2.create(),
      normalXDelta = glMatrix.vec2.create();

  glMatrix.vec2.normalize(leftNormal, glMatrix.vec2.scaleAndAdd(leftNormal, direction, plane, -1));
  glMatrix.vec2.normalize(rightNormal, glMatrix.vec2.add(rightNormal, direction, plane));
  glMatrix.vec2.subtract(normalXDelta, rightNormal, leftNormal);
  glMatrix.vec2.scale(normalXDelta, normalXDelta, inverseWidth);
  glMatrix.vec2.copy(rayDirection, leftNormal);

  for(let x = 0; x < screenWidth; x++) {
    /* cameraX = 2 * x / screenWidth - 1;
    glMatrix.vec2.scaleAndAdd(rayDirection, direction, plane, cameraX);
    map[0] = Math.floor(position[0]);
    map[1] = Math.floor(position[1]); */

    glMatrix.vec2.floor(map, position);

    deltaDistance[0] = Math.abs(1 / rayDirection[0]);
    deltaDistance[1] = Math.abs(1 / rayDirection[1]);

    if(rayDirection[0] < 0) {
      step[0] = -1;
      sideDistance[0] = (position[0] - map[0]) * deltaDistance[0];
    } else {
      step[0] = 1;
      sideDistance[0] = (map[0] + 1 - position[0]) * deltaDistance[0];
    }
    if(rayDirection[1] < 0) {
      step[1] = -1;
      sideDistance[1] = (position[1] - map[1]) * deltaDistance[1];
    } else {
      step[1] = 1;
      sideDistance[1] = (map[1] + 1 - position[1]) * deltaDistance[1];
    }

    do {
      if(sideDistance[0] < sideDistance[1]) {
        sideDistance[0] += deltaDistance[0];
        map[0] += step[0];
        side = 0;
      } else {
        sideDistance[1] += deltaDistance[1];
        map[1] += step[1];
        side = 1;
      }
      if(worldMap[map[0]][map[1]] > 0) {
        break;
      }
    } while(true);

    if(side === 0) {
      perpendicularWallDistance = (map[0] - position[0] + (1 - step[0]) / 2) / rayDirection[0];
    } else {
      perpendicularWallDistance = (map[1] - position[1] + (1 - step[1]) / 2) / rayDirection[1];
    }

    lineHeight = Math.floor(screenHeight / perpendicularWallDistance);

    drawStart = Math.floor(-lineHeight / 2 + screenHeight / 2);
    if(drawStart < 0) {
      drawStart = 0;
    }
    drawEnd = Math.floor(lineHeight / 2 + screenHeight / 2);
    if(drawEnd >= screenHeight) {
      drawEnd = screenHeight;
    }

    /* switch(worldMap[map[0]][map[1]]) {
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
    } */
    //verticalLine(x, drawStart, drawEnd, color);

    textureLine(position, map, perpendicularWallDistance, rayDirection, side, x, drawStart, drawEnd, lineHeight, wallTex);
    let fadeIntensity = 1/perpendicularWallDistance * 2.5;
    verticalLine(x, drawStart, drawEnd, `rgba(10,10,10, ${1 - fadeIntensity})`);

    glMatrix.vec2.add(rayDirection, rayDirection, normalXDelta);
  }
}

function verticalLine(_x, _start, _end, _color) {
  screen.fillStyle = _color;
  screen.fillRect(_x, _start, 1, _end - _start);
}

function textureLine(_position, _map, _perpendicularWallDistance, _rayDirection, _side, _x, _start, _end, _lineHeight, _textureSheet) {
  let textureIndex = worldMap[_map[0]][_map[1]] - 1;
  let wallX;

  if(_side === 0) {
    wallX = _position[1] + _perpendicularWallDistance * _rayDirection[1];
  } else {
    wallX = _position[0] + _perpendicularWallDistance * _rayDirection[0];
  }
  wallX -= Math.floor(wallX);

  let textureX = Math.floor(wallX * textureSize);
  if(_side === 0 && _rayDirection[0] > 0) {
    textureX = textureSize - textureX - 1;
  }
  if(_side === 1 && _rayDirection[1] < 0) {
    textureX = textureSize - textureX - 1;
  }

  let textureSheetX = textureIndex % 3,
      textureSheetY = Math.floor(textureIndex / 3),
      heightRatio = screenHeight / _lineHeight,
      verticalTextureSegment = (heightRatio >= 1) ? 64 : heightRatio * textureSize,
      verticalTextureOffset = (verticalTextureSegment === 64) ? 0 : (textureSize - verticalTextureSegment) / 2;

  screen.drawImage(_textureSheet, (textureSheetX * (textureSize * 2)) + textureX, 
                    (textureSheetY * textureSize) + verticalTextureOffset,
                    1, verticalTextureSegment, _x, Math.round(_start), 1, _end - _start);
}

function keySet(_evt, _bool) {
  switch(_evt.code) {
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

function main() {
  screen = document.getElementById("screen").getContext("2d");
  screen.canvas.width = screen.canvas.clientWidth = screenWidth;
  screen.canvas.height = screen.canvas.clientHeight = screenHeight;
  screen.imageSmoothingEnabled = false;
  gradient = screen.createLinearGradient(0, 0, 0, screenHeight);
  gradient.addColorStop(0, "#333333");
  gradient.addColorStop(0.5, "#0A0A0A");
  gradient.addColorStop(1.0, "#7F7F7F");
  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);
  engine = new Engine(60, 60, update, render);
  engine.start();
}

window.onload = function() {
  wallTex.onload = main;
  wallTex.src = "./resources/Wolf3DWalls.png";
}