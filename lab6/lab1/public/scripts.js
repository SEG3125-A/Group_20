document.addEventListener("DOMContentLoaded", function () {
  fetch("surveyResults.json")
      .then(response => response.json())
      .then(data => displayResults(data))
      .catch(error => console.error("Error fetching survey results:", error));
});

const switchElement = document.querySelector('.switch');
const contactLink = document.querySelector('a[href="#footer"]');

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

contactLink.addEventListener('click', (event) => {
  event.preventDefault();
  const footerElement = document.querySelector('#footer');
  footerElement.scrollIntoView({ behavior: 'smooth' });
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
function showInstructions() {
  var instructionsText = document.getElementById('instructionsText');
  instructionsText.style.display = 'block';
}

function closeInstructions() {
  var instructionsText = document.getElementById('instructionsText');
  instructionsText.style.display = 'none';
}

function openScreenshot() {
  window.open('YT-homepage.png', 'YouTube Homepage Screenshot', 'width=1536,height=864');
}

function scrollToQuestion() {
  var question1Top = document.getElementById('q1').offsetTop;
  window.scrollTo({
      top: question1Top,
      behavior: 'smooth'
  });
}

function showNoMessage() {
  var noMessageText = document.getElementById('noMessageText');
  noMessageText.style.display = 'block';
}

function closeToast() {
  var noMessageText = document.getElementById('noMessageText');
  noMessageText.style.display = 'none';
}

/////////////////////////////////////////////////////////////////////

function submitResponses() {
  const surveyData = {
    q1: document.getElementById('q1-answer').value,
    q2: document.getElementById('q2-answer').value,
    q3: {
      feature1: document.getElementById('feature1').checked,
      feature2: document.getElementById('feature2').checked,
      feature3: document.getElementById('feature3').checked,
    },
    q4: document.querySelector('input[name="visual-appeal"]:checked').id,
    q5: document.querySelector('input[name="content-type"]:checked').id,
    q6: document.getElementById('q6-answer').value,
  };

  fetch('http://127.0.0.1:3000/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(surveyData),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      alert('Survey submitted successfully!');
    })
    .catch(error => console.error('Error submitting survey:', error));
}



function viewResponsesPrompt() {
  const password = prompt('Please enter the password:');
  if (password === 'Admin') {
      viewResponses();
  } else {
      alert('Incorrect password.');
  }
}

// function viewResponses() {
//   fetch('http://127.0.0.1:3000/results')
//   window.location.href = "responses.html";
// }


function viewResponses() {
  window.location.href = "responses.html";
}

