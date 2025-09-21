function showAnswer(response) {
   alert(response.data.answer);
}

const apiKey = "297bdob5643aebcfc422bc019b792eta";
const context =
   "You are an expert in history, provide an answer no longer than 40 words.";
let prompt =
   "Who was the first Female President or Prime Minister in the world?";
const apiUrl =
   "https://api.shecodes.io/ai/v1/generate" +
   "?prompt=" +
   encodeURIComponent(prompt) +
   "&context=" +
   encodeURIComponent(context) +
   "&key=" +
   apiKey;

axios.get(apiUrl).then(showAnswer);
