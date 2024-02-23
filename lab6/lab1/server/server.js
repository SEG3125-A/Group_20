const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();

let formCounter = 0;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/submit', (req, res) => {
  const surveyData = req.body;

  const uniqueId = generateUniqueId();
  surveyData.id = uniqueId;

  storeSurveyData(surveyData);

  res.status(200).json({ message: 'Survey submitted successfully!' });
});

app.get('/results', (req, res) => {
  const surveyResults = fetchSurveyResults();
  res.json(surveyResults);
});

function generateUniqueId() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
  formCounter += 1;

  return `${formattedDate}-${formCounter}`;
}

function storeSurveyData(data) {
  const filePath = 'lab6/lab1/surveyResults.json';

  const existingData = fetchSurveyResults();

  existingData.push({
    id: data.id,
    q1: data.q1,
    q2: data.q2,
    q3: getQuestion3Answers(data.q3),
    q4: getQuestion4Answer(data.q4),
    q5: getQuestion5Answer(data.q5),
    q6: data.q6,
  });

  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

  console.log('Survey data appended to file.');
}

function fetchSurveyResults() {
  try {
    const filePath = 'lab6/lab1/surveyResults.json';

    const fileContents = fs.readFileSync(filePath, 'utf-8');

    const jsonData = JSON.parse(fileContents);

    return jsonData;
  } catch (err) {
    console.error('Error reading survey results file:', err.message);
    return [];
  }
}

function getQuestion3Answers(q3) {
  const answerMap = {
    feature1: 'Trending',
    feature2: 'Subscriptions',
    feature3: 'Recommended',
  };

  const selectedFeatures = Object.keys(q3).filter((key) => q3[key]);
  return selectedFeatures.map((feature) => answerMap[feature]) || ['Unknown'];
}

function getQuestion4Answer(q4) {
  const answerMap = {
    aspect1: 'Color Scheme',
    aspect2: 'Layout',
    aspect3: 'Typography',
  };

  return answerMap[q4] || 'Unknown';
}

function getQuestion5Answer(q5) {
  const answerMap = {
    option1: 'Educational',
    option2: 'Entertainment',
    option3: 'News',
  };

  return answerMap[q5] || 'Unknown';
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
