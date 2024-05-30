document.getElementById('inputArea').addEventListener('focus', function() {
    document.getElementById('video1').style.display = 'block';
    document.getElementById('defaultMessage').style.display = 'none';
    document.getElementById('resultContainer').style.display= 'none';
});

function convertLines() {
    const input = document.getElementById('inputArea').value.trim();
    const resultDiv = document.getElementById('result');
    const resultContainer = document.getElementById('resultContainer');
    const videoContainer = document.getElementById('video1');

    if (input === "") {
        resultDiv.innerHTML = "<p style='color: #a9aaa0;'>Please enter some text to convert.</p>";
    } else {
        const lines = input.split('\n').map(line => line.trim()).filter(line => line !== "");
        resultDiv.innerHTML = "<p>" + lines.join(', ') + "</p>";
    }

    resultContainer.style.display = 'block';
    resultDiv.style.display = 'block';
    document.getElementById('defaultMessage').style.display = 'none';
    videoContainer.style.display = 'none';
}

function resetPage() {
    document.getElementById('inputArea').value = '';
    document.getElementById('video1').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('defaultMessage').style.display = 'flex';
}

function copyToClipboard() {
    const resultText = document.getElementById('result').innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy text: " + err);
    });
}


