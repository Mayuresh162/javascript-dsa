function traverseAndUpdateDOM() {
    // TODO: Traverse the container and update all paragraph elements by appending " (processed)" to their text.
    // Also, add the class 'list-item' to all list items inside the element with id 'item-list'
    // Return an object: { processedParagraphs: number, processedListItems: number }
    const paragraphContainer = document.getElementById("container");
    const pTags = paragraphContainer.querySelectorAll("p");
    const liTags = paragraphContainer.querySelectorAll("li");
    pTags.forEach((p) => {
        p.innerHTML += " (processed)";
    });
    liTags.forEach((l) => {
        l.classList.add("list-item");
    })

    const results = {
        processedParagraphs: pTags.length,
        processedListItems: liTags.length
    };
    // YOUR CODE HERE
    return results;
}
function handleFormEvents() {
    // TODO: Handle form events for the form with id 'user-form'
    // On submit: prevent default, validate the input with id 'username'. If empty, show an error message in a div with id 'error-message' (create it if necessary). If valid, log the username and reset the form.
    // On reset: remove the error message if present.
    // Track: 
    //   submissions: number of form submissions
    //   validations: number of times validation failed (empty input)
    //   resets: number of form resets

    const form = document.getElementById("user-form");
    let sCount = 0;
    let fCount = 0;
    let rCount = 0;
    form.addEventListener("submit", () => {
        const username = document.getElementById("username");
        if (!username.innerHTML.trim().length) {
            const errMsg = document.createElement("div");
            errMsg.setAttribute("id", "error-message");
            errMsg.textContent = "Invalid";
            form.appendChild(errMsg);
            fCount++;
        } else {
            console.log(username.innerHTML);
            username.innerHTML = '';
            rCount++;
        }
        sCount++;
    })
    // Return the tracker object
    const tracker = {
        submissions: sCount,
        validations: fCount,
        resets: rCount
    };
    // YOUR CODE HERE
    return tracker;
}
function implementEventDelegation() {
    // TODO: Implement event delegation on the dynamic list (id: 'dynamic-list')
    // - When an li is clicked, toggle the class 'selected' on it. Count each time an item is selected (only when it gains the class).
    // - The button with id 'add-item' adds a new li to the list with text "Item N" (N being the next number).
    // Track: 
    //   itemsAdded: count of items added
    //   itemsSelected: count of selections (each time an item is selected, not toggled on and off)
    // Return the tracker object
    const dList = document.querySelectorAll("#dynamic-list li");
    dList.forEach((l) => {
        l.addEventListener("click", () => {
            l.classList.toggle("selected");
        });
    });
    const addItemBtn = document.querySelectorAll("#add-item");
    let count = 0;
    addItemBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            const uList = document.querySelector("#dynamic-list");
            const n = uList.querySelectorAll("li");
            const li = document.createElement("li");
            li.textContent = `Item ${n + 1}`
            uList.appendChild(li);
            count++;
        });
    })
    const tracker = {
        itemsAdded: count,
        itemsSelected: document.querySelectorAll("#dynamic-list li .selected")
    };
    // YOUR CODE HERE
    return tracker;
}
function manipulateStylesAndClasses() {
    // TODO: 
    // - Add the class 'styled' to all elements with class 'box'
    // - Implement a dark mode toggle: when the button with id 'dark-mode-toggle' is clicked, toggle the class 'dark-mode' on the body.
    // Track:
    //   boxesStyled: count of boxes styled
    //   darkMode: current state (true if dark mode is on, false otherwise) - this should be updated on toggle
    // Return the tracker object
    const boxList = document.querySelectorAll(".box");
    boxList.forEach((b) => {
        b.classList.add("styled");
    });
    const darkModeBtn = document.getElementById("dark-mode-toggle");
    darkModeBtn.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.classList.toggle("dark-mode");
    });
    const tracker = {
        boxesStyled: boxList.length,
        darkMode: document.querySelector("body").classList.contains("dark-mode")
    };
    // YOUR CODE HERE
    return tracker;
}
function advancedElementCreation() {
    // TODO: 
    // - Create a table with id 'data-table' and 3 rows and 3 columns per row. The cell text should be "Row i, Col j".
    // - Create a dropdown (select) with id 'options' and 3 options (Option 1, Option 2, Option 3).
    // - Append both to the element with id 'advanced-container'
    // Track:
    //   rowsCreated: number of rows created (should be 3)
    //   optionsCreated: number of options created (should be 3)
    // Return the tracker object
    const table = document.createElement("table");
    const div = document.getElementById("advanced-container");
    const adElem = div ? div : document.createElement("div");
    if (!div) {
        adElem.setAttribute("id", "advanced-container");
    }
    table.setAttribute("id", "data-table");
    for (let i=1; i<=3; i++) {
        const row = document.createElement("tr");
        for (let j=1; j<=3; j++) {
            const cell = document.createElement("td");
            cell.textContent = `Row ${i}, Col ${j}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    const select = document.createElement("select");
    for (let i=1; i<=3; i++) {
        const option = document.createElement("option");
        option.setAttribute("id", "options");
        option.textContent = `Option ${i}`;
        select.appendChild(option);
    }
    adElem.appendChild(table);
    adElem.appendChild(select);


    const tracker = {
        rowsCreated: document.querySelectorAll('#advanced-container table tr').length,
        optionsCreated: document.querySelectorAll('#advanced-container select option').length
    };
    // YOUR CODE HERE

    return tracker;
}
module.exports = {
    traverseAndUpdateDOM,
    handleFormEvents,
    implementEventDelegation,
    manipulateStylesAndClasses,
    advancedElementCreation
};
