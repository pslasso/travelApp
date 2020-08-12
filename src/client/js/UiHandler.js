function updateUI(result) {
    // selecting the result container from DOM
    const agreement = document.getElementById("agreement").innerHTML = `Agreement: ${result.agreement}`;
    const score_tag = document.getElementById("score_tag").innerHTML = `Score_tag: ${result.score_tag}`;
    const confidence = document.getElementById("confidence").innerHTML = `Confidence: ${result.confidence}%`;
    const irony = document.getElementById("irony").innerHTML = `Irony: ${result.irony}`;
    const subjectivity = document.getElementById("subjectivity").innerHTML = `Subjectivity: ${result.subjectivity}`;
}

export {
    updateUI
}