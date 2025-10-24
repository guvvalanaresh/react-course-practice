const root = ReactDOM.createRoot(document.getElementById('vdom'));

function renderReactElements() {
    const heading = React.createElement('h1', null, "Timer app using - Real DOM");
    const input = React.createElement('input', {placeholder: "username"});
    const button = React.createElement('button', {onClick: renderReactElements}, "Update Time");
    const timer = React.createElement('p', null, new Date().toTimeString());

    root.render([heading, input, button, timer]);
}

renderReactElements();