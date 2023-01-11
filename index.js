const words = document.querySelector('h2');
const button = document.querySelector('button');
const textarea = document.querySelector('textarea');
let startTime, endTime;
let finalMsg;
const contextWords = [
    "My name is Srimoy", "I am 22 years old", "I am an engineer", "I am a web developer"
]
textarea.disabled = true;

function refreshPage() {
    location.reload();
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function (item, index) {
        if (item == words[index]) {
            cnt++;
        }
    })

    let errorWords = (words1.length - cnt);
    return (`${cnt} correct out of ${words1.length} words and the total number of errors are ${errorWords}`)
}




const playGame = () => {
    let item = Math.floor(Math.random() * contextWords.length);
    words.innerText = contextWords[item];
    let date = new Date();
    startTime = date.getTime();
    button.innerText = "Done"
}

const wordCount = (str) => {
    let totalCount = str.split(" ").length;

    console.log(totalCount);
    return totalCount;

}

const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = Math.floor((endTime - startTime) / 1000);
    console.log(totalTime);
    let totalStr = textarea.value;
    let wordCounts = wordCount(totalStr);
    let speed = Math.round((wordCounts / totalTime) * 60);
    console.log(speed);
    words.innerText = `you  typed total at ${speed} in ${totalTime} mins .`
    finalMsg += compareWords(contextWords, totalStr);
    words.innerText = finalMsg;
}
button.addEventListener('click', function () {
    if (this.innerText == "Start") {
        textarea.disabled = false;

        playGame();

    } else if (this.innerText == "Done") {
        textarea.disabled = true;
        button.innerText = "Start";
        endGame();

    }

})