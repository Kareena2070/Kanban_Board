const todo = document.getElementById("todo");
const inProgress = document.getElementById("progress");
const done = document.getElementById("done");

const tasks = document.querySelectorAll(".task");

let draggedTask = null;

tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        // task.classList.add("dragging");
        draggedTask = task;
    });
});


// Drag over effects 
// inProgress.addEventListener("dragenter", (e) => {
//     inProgress.classList.add("drag-over");
// });
// inProgress.addEventListener("dragleave", (e) => {
//     inProgress.classList.remove("drag-over");
// });

// we are write same code for to do and done columns but code will repeat so we can make a function

function addDragOverListeners(column) {
    column.addEventListener("dragenter", (e) => {
        column.classList.add("drag-over");
    });
    column.addEventListener("dragleave", (e) => {
        column.classList.remove("drag-over");
    });

    column.addEventListener("dragover", (e) => {
        e.preventDefault(); // Necessary to allow dropping
        column.appendChild(draggedTask);
    });

    column.addEventListener("drop", (e) => {
        column.classList.remove("drag-over");
    });
}

addDragOverListeners(todo);
addDragOverListeners(inProgress);
addDragOverListeners(done);
