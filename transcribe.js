import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0";
env.allowLocalModels = false;
// Allocate a pipeline for Automatic Speech Recognition
let transcriber = await pipeline('automatic-speech-recognition', 'Xenova/whisper-small.en');


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


// Transcribe an audio file, loaded from a URL.
// let result = await transcriber('https://huggingface.co/datasets/Narsil/asr_dummy/resolve/main/mlk.flac');
// {text: ' I have a dream that one day this nation will rise up and live out the true meaning of its creed.'}