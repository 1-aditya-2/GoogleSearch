const apiKey = 'AIzaSyDw3xJ-qYhzQffW9R2c75rPF6YoPO32doQ';
const searchEngineId = '364fa1d582afd417e';



function performSearch() {
    const searchInput = document.getElementById('search-input');
    const searchQuery = searchInput.value;

    document.getElementById('Starting').innerHTML = document.getElementById('Result').innerHTML;


    const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&key=${apiKey}&cx=${searchEngineId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displaySearchResults(data))
        .catch(error => console.error('Error fetching search results:', error));
}

function displaySearchResults(data) {
    const searchResultsDiv = document.getElementById('search-results');

    if (data.items) {
        searchResultsDiv.innerHTML = '';

        data.items.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<h3><a href="${item.link}" target="_blank">${item.title}</a></h3><p>${item.snippet}</p><br/>`;
            searchResultsDiv.appendChild(resultItem);
        });
    } else {
        searchResultsDiv.innerHTML = '<p>No results found.</p>';
    }
}
