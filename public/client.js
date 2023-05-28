function getThingsToDo() {
fetch('/things-to-do')
  .then(response => response.text())
  .then(data => {
    // Update the UI with the received random text
    document.getElementById('random-text').textContent = data;
    document.getElementById('random-text').style.display= 'inline-block';
  })
  .catch(error => console.error(error));
}

document.getElementById('text-button').addEventListener('click', getThingsToDo);
