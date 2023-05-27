if (!Array.prototype.customForEach) {
    Array.prototype.customForEach = function(cb) {
        for (let elem of this) {
            cb(elem);
        }
    }
}

const todos = [
    { id: 1, todo: "Morning Walk" },
    { id: 2, todo: "Go to Office" },
    { id: 3, todo: "Watch Netflix" },
    { id: 4, todo: "Go to Gym" },
    { id: 5, todo: "Go for Movie" },
];

todos.customForEach(elem => console.log(elem.todo));

