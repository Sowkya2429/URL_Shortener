async function getShortenedURL(url) {
    try {
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
        if (response.ok) {
            return await response.text();
        } else {
            return null; // Indicates an error
        }
    } catch (error) {
        return null; // Indicates an error
    }
}

function displayShortenedURL(shortenedURL) {
    const resultElement = document.getElementById('result');
    if (shortenedURL) {
        resultElement.innerHTML = `
            Shortened URL: <a href="${shortenedURL}" target="_blank">${shortenedURL}</a>`;
    } else {
        resultElement.innerHTML = "Error shortening";
    }
}

function handleGenerateButtonClick() {
    const url = document.getElementById("url").value;
    getShortenedURL(url).then(displayShortenedURL);
}

document.getElementById("generateBtn").addEventListener("click", handleGenerateButtonClick);
