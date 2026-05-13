<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Bubble Sort Visualizer</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      text-align: center;
    }

    .visualise {
      height: 350px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: 5px;
      margin-top: 30px;
      border: 1px solid #ccc;
      padding: 20px;
    }

    .bar {
      width: 40px;
      background: black;
      transition: height 0.3s ease;
    }

    .controls {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 20px;
    }

    button {
      padding: 10px 18px;
      cursor: pointer;
      border: none;
      background: black;
      color: white;
      border-radius: 5px;
    }

    button:hover {
      opacity: 0.8;
    }
  </style>
</head>
<body>

  <h1>Bubble Sort Visualizer</h1>

  <div class="controls">
    <button onclick="start()">Start</button>
    <button onclick="pauseSort()">Pause</button>
    <button onclick="resumeSort()">Resume</button>
    <button onclick="stopSort()">Stop</button>
  </div>

  <div class="visualise" id="container"></div>

  <script>

    const originalArray = [10, 16, 3, 2, 64, 32, 11];

    const container = document.getElementById("container");

    let frames = [];

    let currentFrame = 0;

    let paused = false;

    let stopped = false;

    // render bars
    function render(arr) {

      container.innerHTML = "";

      arr.forEach((num) => {

        const div = document.createElement("div");

        div.classList.add("bar");

        div.style.height = `${num * 4}px`;

        container.appendChild(div);
      });
    }

    // generate frames
    function bubbleSort(arr) {

      const result = [...arr];

      const tempFrames = [[...result]];

      for (let i = 0; i < result.length - 1; i++) {

        for (let j = 0; j < result.length - i - 1; j++) {

          if (result[j] > result[j + 1]) {

            [result[j], result[j + 1]] =
            [result[j + 1], result[j]];

            tempFrames.push([...result]);
          }
        }
      }

      return tempFrames;
    }

    // delay helper
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function start() {

      stopped = false;
      paused = false;

      currentFrame = 0;

      frames = bubbleSort(originalArray);

      while (currentFrame < frames.length) {

        if (stopped) {
          render(originalArray);
          return;
        }

        // pause loop
        while (paused) {
          await sleep(100);
        }

        render(frames[currentFrame]);

        currentFrame++;

        await sleep(500);
      }
    }

    function pauseSort() {
      paused = true;
    }

    function resumeSort() {
      paused = false;
    }

    function stopSort() {
      stopped = true;
      paused = false;
      currentFrame = 0;
    }

    render(originalArray);

  </script>

</body>
</html>
