document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('main');
  const ctx = canvas.getContext('2d');
  let brushSize = 5;
  let color = 'black';
  let isDrawing = false;

  // Set initial brush size display
  document.getElementById('brushSize').innerText = brushSize;

  // Function to draw on canvas
  function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = color;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = brushSize;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }

  // Event listeners for mouse actions
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  });

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);

  // Function to clear canvas
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Button click event listeners
  document.getElementById('new').addEventListener('click', clearCanvas);

  document.getElementById('erase').addEventListener('click', function() {
    color = 'white';
  });

  document.getElementById('black').addEventListener('click', function() {
    color = 'black';
  });

  document.getElementById('pink').addEventListener('click', function() {
    color = '#F50057';
  });

  document.getElementById('blue').addEventListener('click', function() {
    color = '#2979FF';
  });

  document.getElementById('yellow').addEventListener('click', function() {
    color = '#FFD600';
  });

  // Slider event listener
  document.getElementById('slider').addEventListener('input', function() {
    brushSize = this.value;
    document.getElementById('brushSize').innerText = brushSize;
  });
});
