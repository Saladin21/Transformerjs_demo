import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0";
env.allowLocalModels = false;
let classifier = await pipeline('sentiment-analysis', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english');


const button = document.getElementById('submit');
const text = document.getElementById('input');
const sentiment = document.getElementById('sentiment');
const score = document.getElementById('score');

button.addEventListener('click', async function (e) {
    // console.log(text.value)
    let result = await classifier(text.value);
    // console.log(result)/
    sentiment.textContent = result[0]['label']
    score.textContent = result[0]['score']
})