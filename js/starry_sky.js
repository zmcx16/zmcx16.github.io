var starrySkyConfig = {
  'id': 'starry-sky',
  'width': null,
  'getWidthById': 'menu-header',
  'height': 700,
  'getHeightById': null,
  'bg':{
    'color': '#110E19'
  },
  'star':{
    'color': '#ffffff',
    'sizeFactor': 2,
    'speedFactor': .05
  },
  'shootingStar':{
    'color': '#ffffff',
    'lenBase': 10,
    'lenFactor': 80,
    'speedBase': 10,
    'speedFactor': 6,
    'sizeBase': 0.1,
    'sizeFactor': 1,
    'delayBase': 500,
    'delayFactor': 3000
  }
};

(function () {
      var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
              window.setTimeout(callback, 1000 / 60);
          };
      window.requestAnimationFrame = requestAnimationFrame;
  })();

  // Terrain stuff.
  var background = document.getElementById(starrySkyConfig['id']),
      bgCtx = background.getContext("2d"),
      width = window.innerWidth,
      height = document.body.offsetHeight;

  if (starrySkyConfig['width'])
      width = starrySkyConfig['width'];
  else if (starrySkyConfig['getWidthById'])
      width = document.getElementById(starrySkyConfig['getWidthById']).offsetWidth;

  if (starrySkyConfig['height'])
      height = starrySkyConfig['height'];
  else if (starrySkyConfig['getHeightById'])
      height = document.getElementById(starrySkyConfig['getHeightById']).offsetHeight;
  
  background.width = width;
  background.height = height;

  // Second canvas used for the stars
  bgCtx.fillStyle = '#05004c';
  bgCtx.fillRect(0, 0, width, height);

  // stars
  function Star(options) {
      this.size = Math.random() * starrySkyConfig['star']['sizeFactor'];
      this.speed = Math.random() * starrySkyConfig['star']['speedFactor'];
      this.x = options.x;
      this.y = options.y;
  }

  Star.prototype.reset = function () {
      this.size = Math.random() * starrySkyConfig['star']['sizeFactor'];
      this.speed = Math.random() * starrySkyConfig['star']['speedFactor'];
      this.x = width;
      this.y = Math.random() * height;
  }

  Star.prototype.update = function () {
      this.x -= this.speed;
      if (this.x < 0) {
          this.reset();
      } else {
          bgCtx.fillRect(this.x, this.y, this.size, this.size);
      }
  }

  function ShootingStar() {
      this.reset();
  }

  ShootingStar.prototype.reset = function () {
      this.x = Math.random() * width;
      this.y = 0;
      this.len = (Math.random() * starrySkyConfig['shootingStar']['lenFactor']) + starrySkyConfig['shootingStar']['lenBase'];
      this.speed = (Math.random() * starrySkyConfig['shootingStar']['speedFactor']) + starrySkyConfig['shootingStar']['speedBase'];
      this.size = (Math.random() * starrySkyConfig['shootingStar']['sizeFactor']) + starrySkyConfig['shootingStar']['sizeBase'];
      // this is used so the shooting stars arent constant
      this.waitTime = new Date().getTime() + (Math.random() * starrySkyConfig['shootingStar']['delayFactor']) + starrySkyConfig['shootingStar']['delayBase'];
      this.active = false;
  }

  ShootingStar.prototype.update = function () {
      if (this.active) {
          this.x -= this.speed;
          this.y += this.speed;
          if (this.x < 0 || this.y >= height) {
              this.reset();
          } else {
              bgCtx.lineWidth = this.size;
              bgCtx.beginPath();
              bgCtx.moveTo(this.x, this.y);
              bgCtx.lineTo(this.x + this.len, this.y - this.len);
              bgCtx.stroke();
          }
      } else {
          if (this.waitTime < new Date().getTime()) {
              this.active = true;
          }
      }
  }

  var entities = [];

  function initStars(){
      entities = [];
      for (var i = 0; i < height; i++) {
          entities.push(new Star({
              x: Math.random() * width,
              y: Math.random() * height
          }));
      }

      entities.push(new ShootingStar());
      entities.push(new ShootingStar());
  }

  initStars();
  //animate background
  function animateStarrySky() {

      if (starrySkyConfig['getWidthById'] && document.getElementById(starrySkyConfig['getWidthById']).offsetWidth != width)
      {
        console.log('reset StarrySky width.');
        width = document.getElementById(starrySkyConfig['getWidthById']).offsetWidth;
        initStars();
      }
      if (starrySkyConfig['getHeightById'] && document.getElementById(starrySkyConfig['getHeightById']).offsetHeight != height)
      {
        console.log('reset StarrySky height.');
        height = document.getElementById(starrySkyConfig['getHeightById']).offsetHeight;
        initStars();
      }

      bgCtx.fillStyle = starrySkyConfig['bg']['color'];
      bgCtx.fillRect(0, 0, width, height);
      bgCtx.fillStyle = starrySkyConfig['star']['color'];
      bgCtx.strokeStyle = starrySkyConfig['shootingStar']['color'];

      var entLen = entities.length;

      while (entLen--) {
          entities[entLen].update();
      }
      requestAnimationFrame(animateStarrySky);
  }
