let loggedIn = false;
let username;
let balance = 90000;


//const labelDate = document.getElementById('date');
//const labelDate = new Date()

function login() {
    const enteredUsername = document.getElementById('name').value;
    const enteredPassword = document.getElementById('pas').value;


    // Simplified login, you would typically validate against a backend/database
    if (enteredUsername === "mj" && enteredPassword === "1111") {
        loggedIn = true;
        username = enteredUsername;

        document.getElementsByClassName('ullapo').style.display = 'none';
        document.getElementById('account-section').style.display = 'block';
        document.getElementById('username-display').innerText = username;
        updateBalance();
    } else {
        alert("Invalid username or password");
    }
}


//function bdate() {
//const bd = new Date();
//  const bd = document.getElementById('bal').value;
//}


function deposit() {
    balance += parseFloat(prompt("Enter amount to deposit:"));
    updateBalance();
}

function withdraw() {
    const amount = parseFloat(prompt("Enter amount to withdraw:"));
    if (balance >= amount) {
        balance -= amount;
        updateBalance();
        hideErrorMessage();
    } else {
        showErrorMessage();
    }
}

function updateBalance() {
    document.getElementById('balance').innerText = balance;
}

function logout() {
    loggedIn = false;
    document.getElementById('ullapo').style.display = 'block';
    document.getElementById('account-section').style.display = 'none';
}

function showErrorMessage() {
    document.getElementById('error-message').style.display = 'block';
}

function hideErrorMessage() {
    document.getElementById('error-message').style.display = 'none';
}



const startLogOutTimer = function () {
    // set time to 5 minutes
    let time = 300;

    const timer = setInterval(function () {
        // call the timer every second
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);

        // print remaining time to UI
        labelTimer.textContent = `${min}:${sec}`;

        // decrease time by 1 second
        time--;

        // when 0 seconds, log out user
        if (time === -1) {
            clearInterval(timer);
            labelWelcome.textContent = "Log in to get started";
            containerApp.style.opacity = 0;
        };
    }, 1000);

    return timer;
};