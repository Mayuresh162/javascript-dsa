function traverseAndUpdateDOM() {
  const paragraphContainer = document.getElementById("container");

  const pTags = paragraphContainer.querySelectorAll("p");
  const liTags = document.querySelectorAll("#item-list li");

  pTags.forEach((p) => {
    p.textContent += " (processed)";
  });

  liTags.forEach((l) => {
    l.classList.add("list-item");
  });

  return {
    processedParagraphs: pTags.length,
    processedListItems: liTags.length,
  };
}

function handleFormEvents() {
  const form = document.getElementById("user-form");
  const usernameInput = document.getElementById("username");

  let submissions = 0;
  let validations = 0;
  let resets = 0;

  const getOrCreateError = () => {
    let err = document.getElementById("error-message");
    if (!err) {
      err = document.createElement("div");
      err.setAttribute("id", "error-message");
      form.appendChild(err);
    }
    return err;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submissions++;

    const value = usernameInput.value.trim();

    if (!value) {
      validations++;
      const err = getOrCreateError();
      err.textContent = "Invalid";
      return;
    }

    console.log(value);
    form.reset();

    const err = document.getElementById("error-message");
    if (err) err.remove();
  });

  form.addEventListener("reset", () => {
    resets++;
    const err = document.getElementById("error-message");
    if (err) err.remove();
  });

  return {
    submissions,
    validations,
    resets,
  };
}

function implementEventDelegation() {
  const list = document.getElementById("dynamic-list");
  const addBtn = document.getElementById("add-item");

  let itemsAdded = 0;
  let itemsSelected = 0;

  list.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    if (!li.classList.contains("selected")) {
      li.classList.add("selected");
      itemsSelected++;
    } else {
      li.classList.remove("selected");
    }
  });

  addBtn.addEventListener("click", () => {
    const count = list.querySelectorAll("li").length;
    const li = document.createElement("li");
    li.textContent = `Item ${count + 1}`;
    list.appendChild(li);
    itemsAdded++;
  });

  return {
    itemsAdded,
    itemsSelected,
  };
}

function manipulateStylesAndClasses() {
  const boxes = document.querySelectorAll(".box");
  const toggleBtn = document.getElementById("dark-mode-toggle");

  boxes.forEach((b) => b.classList.add("styled"));

  let darkMode = document.body.classList.contains("dark-mode");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkMode = document.body.classList.contains("dark-mode");
  });

  return {
    boxesStyled: boxes.length,
    darkMode,
  };
}

function advancedElementCreation() {
  let container = document.getElementById("advanced-container");

  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", "advanced-container");
    document.body.appendChild(container);
  }

  // Create table
  const table = document.createElement("table");
  table.setAttribute("id", "data-table");

  for (let i = 1; i <= 3; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 3; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row ${i}, Col ${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  // Create dropdown
  const select = document.createElement("select");
  select.setAttribute("id", "options");

  for (let i = 1; i <= 3; i++) {
    const option = document.createElement("option");
    option.textContent = `Option ${i}`;
    select.appendChild(option);
  }

  container.appendChild(table);
  container.appendChild(select);

  return {
    rowsCreated: table.querySelectorAll("tr").length,
    optionsCreated: select.querySelectorAll("option").length,
  };
}

module.exports = {
  traverseAndUpdateDOM,
  handleFormEvents,
  implementEventDelegation,
  manipulateStylesAndClasses,
  advancedElementCreation,
};
