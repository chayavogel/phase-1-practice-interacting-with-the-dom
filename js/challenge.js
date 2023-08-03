// Incrementor
let counterElement = document.getElementById("counter");
let integer = 0;

function incrementByOne() {
    integer += 1;
    counterElement.innerText = integer;
}

function startTimer() {
  timerInterval = setInterval(incrementByOne, 1000)
}

function pauseTimer() {
    clearInterval(timerInterval)
}

function resumeTimer() {
    startTimer()
}

startTimer()

// Plus and Minus Buttons
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

plusButton.addEventListener("click", add)
minusButton.addEventListener("click", subtract)

function add() {
    integer +=1
    counterElement.innerText = integer;
}

function subtract() {
    integer -=1
    counterElement.innerText = integer;
}

// Liker
const heartButton = document.getElementById("heart");
const likeList = document.querySelector("ul")
let record = []

heartButton.addEventListener("click", handleLiker)

function updateLikes(record) {
    const likeList = document.querySelector("ul");
    likeList.innerHTML = "";
    record.forEach(obj => {
        const listItem = document.createElement("li")
        const number = Object.keys(obj)[0]
        const likes = obj[number]
        const statement = `${number} has been liked ${likes} times`;
        listItem.innerText = statement;
        likeList.appendChild(listItem)
    });
    return record
}

function handleLiker() {
    const key = counterElement.innerText

    if (record.length === 0) {
        const obj = {}
        obj[key] = 1
        record.push(obj)
    } else {
        const found = record.find(cb)
        function cb(obj) {
            return obj[key] !== undefined
        }

        if (found === undefined) {
            const obj = {}
            obj[key] = 1
            record.push(obj)
        } else {
            found[key] = found[key]+1
        }
    }
    updateLikes(record)
    return record
}

//Pause
const pauseButton = document.getElementById("pause")
pauseButton.addEventListener("click", doStuff)
const submitButton = document.getElementById("submit")

function doStuff() {
    if (pauseButton.innerText === 'pause') {
        pauseButton.innerText = 'resume'
        pauseTimer()
        heartButton.disabled = true;
        plusButton.disabled = true;
        minusButton.disabled = true;
        submitButton.disabled = true;
    } else {
        pauseButton.innerText = 'pause'
        resumeTimer()
        heartButton.disabled = false;
        plusButton.disabled = false;
        minusButton.disabled = false;
        submitButton.disabled = false;
    }
}

//Comments
const form = document.getElementById("comment-form")

form.addEventListener("submit", addComment)

function addComment(event) {
    event.preventDefault()
    const commentInput = document.getElementById("comment-input");
    const newComment = commentInput.value;
    const listDiv = document.getElementById("list")
    const inputDiv = document.createElement("div")
    const commentText = document.createTextNode(newComment)
    inputDiv.appendChild(commentText)
    listDiv.appendChild(inputDiv)
    commentInput.value = "";
}
