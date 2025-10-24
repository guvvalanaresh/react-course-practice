const container = document.getElementById('rdom');

/**
    <h1>Timer app using - Real DOM</h1>
    <input placeholder="username" />
    <button>Update time</button>
    <p>time</p>
 */

function renderhtml(){
    const heading = document.createElement('h1');
    heading.innerText = "Timer app using - Real DOM";
    const input = document.createElement('input');
    input.placeholder = "username";

    const button = document.createElement('button');
    button.innerText = "Update Time";
    button.addEventListener('click', renderhtml);

    const timer = document.createElement('p');
    timer.innerText = new Date().toTimeString();

    container.innerHTML = "";
    container.append(heading, input, button, timer);
}

renderhtml();