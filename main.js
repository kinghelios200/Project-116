//https://teachablemachine.withgoogle.com/models/v06VDq4Rz/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/v06VDq4Rz/", modelReady);
}

function modelReady(){
console.log("Model Loaded");
classifier.classify(gotResults);
}