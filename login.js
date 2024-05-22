let nameinput = document.querySelector('#name');
let emailinput = document.querySelector('#email');
let messageinput = document.querySelector('#message');

const logIn = async () => {
    let name = nameinput.value;
    let email = emailinput.value;
    let message = messageinput.value;
    let res = await fetch('http://127.0.0.1:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    if(!res.ok) {
        alert('Failed to login');
        return;
    }
    let { surname } = await res.json();
}