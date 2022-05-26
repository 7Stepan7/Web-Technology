// Constructor function for a Game

function Game(difficulty) {
  this.lives = 10;
  this.score = 0;
  this.bullet_count = 3;
  $("#white_flash").hide();
  $("#click").hide();

  // Set the difficulty- easy by default
  if(typeof(difficulty) === "undefined") {
    this.speed = this.difficulty.easy;
  }
  else {
    this.speed = this.difficulty[difficulty];
  }

  // Kick-off the first wave of Ducks
  this.nextRound();
}

// Maps difficulty to speed at which a Duck traverses the screen in milliseconds.
Game.prototype.difficulty = {
  easy: 8000,
  medium: 4000,
  hard: 2500
}

Game.prototype.nextRound = function() {

  var duck = new Duck(this);
  var duck = new Duck(this);
  var _this = this;
  _this.bullet_count = 0;
  _this.bullet_count = 20;
  
  $('#game').unbind("click");
  $('#game').click(function () {
    if (_this.bullet_count > 0) {
      $('#white_flash').show(0).delay(10).hide(2);
    } else { 
      $('#click').show(0).delay(30).hide(5);
    }
    _this.bullet_count -= 1;
   
  });

  var roundTimer = setTimeout(function() {
    if(_this.lives <= 0) {
      _this.gameOver();
    }
    else {
      _this.nextRound();
    }
  }, this.speed + 1000);
}

Game.prototype.gameOver = function() {
  $("#points").html(this.score);
  $("#game-over").toggle();
}

Game.prototype.addScore = function(points) {
  this.score += points;

  $('#score').text(this.score);
}