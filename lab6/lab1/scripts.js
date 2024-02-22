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

function showNoMessage() {
  const overlay = document.querySelector('.overlay');
  overlay.style.display = 'block';
  const popupMessage = document.getElementById('noMessage');
  popupMessage.style.display = 'block';
  openToast();
}

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

function submitResponses() {
  alert("Responses submitted successfully!");
}
