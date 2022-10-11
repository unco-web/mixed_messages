//define/create needed elements
const firstTextInput = document.querySelector("input[name='firstTextInput'");
const secondTextInput = document.querySelector("input[name='secondTextInput'");
const thirdTextInput = document.querySelector("input[name='thirdTextInput'");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const outputAnchor = document.querySelector("form");
const paragraphToFill = document.createElement("p");

//insert paragraph
outputAnchor.after(paragraphToFill);

//define needed objects/arrays
let dataToOutput = {};
let outputArrays = [];
let randomizedOutputArray = [];

//watch for input and add it to dataToOutput
function handleChange(event) {
  dataToOutput = {
    ...dataToOutput,
    [event.target.name]: event.target.value,
  };
}

const inputFields = [firstTextInput, secondTextInput, thirdTextInput];
inputFields.forEach((input) => {
  input.addEventListener("change", handleChange);
});

//fill the Output Array with the collected Data
function fillOutputArray() {
  let first = dataToOutput.firstTextInput.split(" ");
  let second = dataToOutput.secondTextInput.split(" ");
  let third = dataToOutput.thirdTextInput.split(" ");

  outputArrays.push(first);
  outputArrays.push(second);
  outputArrays.push(third);
}

//Random generator
function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

//output the data into the paragraph
function outputData() {
  fillOutputArray();

  let totalLength =
    outputArrays[0].length + outputArrays[1].length + outputArrays[2].length;

  for (let j = 0; j < totalLength; j = j + 3) {
    for (let i = 0; i < outputArrays.length; i++) {
      let actualIndex = generateRandomNumber(outputArrays[i].length);
      let randomOutput = outputArrays[i][actualIndex];
      switch (i) {
        case 0:
          randomizedOutputArray.push(randomOutput);
          break;
        case 1:
          randomizedOutputArray.push(randomOutput);
          break;
        case 2:
          randomizedOutputArray.push(randomOutput);
          break;
      }
    }
  }

  paragraphToFill.innerText =
    paragraphToFill.innerText + " " + randomizedOutputArray.join(" ");
}

submit.addEventListener("click", (event) => {
  firstTextInput.value = "";
  secondTextInput.value = "";
  thirdTextInput.value = "";
  event.preventDefault();
  outputData();
});
reset.addEventListener("click", () => {
  window.location.reload();
});
