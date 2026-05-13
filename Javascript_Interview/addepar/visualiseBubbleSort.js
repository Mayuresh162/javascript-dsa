// html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Visualize Sorting Algorithm</title>
  </head>
  <body>
    <!-- You can add your own HTML here -->
    <div class="visualise" id="container"></div>

    <button onclick="start()">Start Sorting</button>
  </body>
</html>

// css
.visualise {
  height: 300px;
  display: flex;
  align-items: flex-end;
  gap: 5px;
  margin-top: 20px;
}

.bar {
  width: 40px;
  background: black;
  transition: all 0.3s ease;
}

// js
/*
 * An unsorted array
 */
let array = [10, 16, 3, 2, 64, 32, 11];

/*
 * Implementation of the bubble sort algorithm.
 *
 * @param list {Array<number>} a list of numbers
 * @return list {Array<number>} a sorted list of numbers
 */
function bubbleSort(list) {
  let result = [...list];
  let length = list.length;
  const frames = [];

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        frames.push([...result]);
      }
    }
  }

  return frames;
}

// Add your javascript here
const container = document.getElementById("container");

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

async function start() {

  const frames = bubbleSort(array);

  for (let frame of frames) {

    render(frame);

    // pause animation
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );
  }
}

render(array);
