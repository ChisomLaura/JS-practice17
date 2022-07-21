const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {};
learning.topic = "JS";

learning.learningGoals = [
  "Finish my first JS project.",
  "Make an aesthetically pleasing and interactive portfolio",
  "Build a JS program",
  "Finish my skillcruch lessons!"
];

learning.category = "Front End Development";
learning.topicImportance = "High";
console.log(learning);

learning.topic = "Javascript";
learning.learningGoals.splice(1, 1);
console.log(learning);

topicElement.innerText = `I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");
