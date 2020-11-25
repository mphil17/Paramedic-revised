/*----------------feelings buttons--------------------*/
function happierButtonClick() {
    $(".message-box").text("You are happier");
    document.getElementById("happier-button").disabled = true;
    document.getElementById("happy-button").disabled = true;
    document.getElementById("meh-button").disabled = true;
    document.getElementById("sad-button").disabled = true;
    document.getElementById("sadder-button").disabled = true;
    document.getElementById("happier-button").style.opacity = 0.7;
    document.getElementById("happy-button").style.opacity = 0.7;
    document.getElementById("meh-button").style.opacity = 0.7;
    document.getElementById("sad-button").style.opacity = 0.7;
    document.getElementById("sadder-button").style.opacity = 0.7;
    document.getElementById("happier-button").classList.remove("button-st");
    document.getElementById("happy-button").classList.remove("button-st");
    document.getElementById("meh-button").classList.remove("button-st");
    document.getElementById("sad-button").classList.remove("button-st");
    document.getElementById("sadder-button").classList.remove("button-st");
    sendData();
}

function happyButtonClick() {
    $(".message-box").text("You are happy");
    document.getElementById("happier-button").disabled = true;
    document.getElementById("happy-button").disabled = true;
    document.getElementById("meh-button").disabled = true;
    document.getElementById("sad-button").disabled = true;
    document.getElementById("sadder-button").disabled = true;
    document.getElementById("happier-button").style.opacity = 0.7;
    document.getElementById("happy-button").style.opacity = 0.7;
    document.getElementById("meh-button").style.opacity = 0.7;
    document.getElementById("sad-button").style.opacity = 0.7;
    document.getElementById("sadder-button").style.opacity = 0.7;
    document.getElementById("happier-button").classList.remove("button-st");
    document.getElementById("happy-button").classList.remove("button-st");
    document.getElementById("meh-button").classList.remove("button-st");
    document.getElementById("sad-button").classList.remove("button-st");
    document.getElementById("sadder-button").classList.remove("button-st");
}

function mehButtonClick() {
    $(".message-box").text("You are ok");
    document.getElementById("happier-button").disabled = true;
    document.getElementById("happy-button").disabled = true;
    document.getElementById("meh-button").disabled = true;
    document.getElementById("sad-button").disabled = true;
    document.getElementById("sadder-button").disabled = true;
    document.getElementById("happier-button").style.opacity = 0.7;
    document.getElementById("happy-button").style.opacity = 0.7;
    document.getElementById("meh-button").style.opacity = 0.7;
    document.getElementById("sad-button").style.opacity = 0.7;
    document.getElementById("sadder-button").style.opacity = 0.7;
    document.getElementById("happier-button").classList.remove("button-st");
    document.getElementById("happy-button").classList.remove("button-st");
    document.getElementById("meh-button").classList.remove("button-st");
    document.getElementById("sad-button").classList.remove("button-st");
    document.getElementById("sadder-button").classList.remove("button-st");
}


function sadButtonClick() {
    $(".message-box").text("You are sad");
    document.getElementById("happier-button").disabled = true;
    document.getElementById("happy-button").disabled = true;
    document.getElementById("meh-button").disabled = true;
    document.getElementById("sad-button").disabled = true;
    document.getElementById("sadder-button").disabled = true;
    document.getElementById("happier-button").style.opacity = 0.7;
    document.getElementById("happy-button").style.opacity = 0.7;
    document.getElementById("meh-button").style.opacity = 0.7;
    document.getElementById("sad-button").style.opacity = 0.7;
    document.getElementById("sadder-button").style.opacity = 0.7;
    document.getElementById("happier-button").classList.remove("button-st");
    document.getElementById("happy-button").classList.remove("button-st");
    document.getElementById("meh-button").classList.remove("button-st");
    document.getElementById("sad-button").classList.remove("button-st");
    document.getElementById("sadder-button").classList.remove("button-st");
}

function sadderButtonClick() {
    $(".message-box").text("You are sadder");
    document.getElementById("happier-button").disabled = true;
    document.getElementById("happy-button").disabled = true;
    document.getElementById("meh-button").disabled = true;
    document.getElementById("sad-button").disabled = true;
    document.getElementById("sadder-button").disabled = true;
    document.getElementById("happier-button").style.opacity = 0.7;
    document.getElementById("happy-button").style.opacity = 0.7;
    document.getElementById("meh-button").style.opacity = 0.7;
    document.getElementById("sad-button").style.opacity = 0.7;
    document.getElementById("sadder-button").style.opacity = 0.7;
    document.getElementById("happier-button").classList.remove("button-st");
    document.getElementById("happy-button").classList.remove("button-st");
    document.getElementById("meh-button").classList.remove("button-st");
    document.getElementById("sad-button").classList.remove("button-st");
    document.getElementById("sadder-button").classList.remove("button-st");
}

// changes made to webpage when user logs in
function loggedInObjects() {
    let loggedIn = document.getElementById("loggedIn");
    loggedIn.style.display = "inline-block";
    let happier = document.getElementById("happier-button");
    happier.style.display = "flex";
    let happy = document.getElementById("happy-button");
    happy.style.display = "flex";
    let meh = document.getElementById("meh-button");
    meh.style.display = "flex";
    let sad = document.getElementById("sad-button");
    sad.style.display = "flex";
    let sadder = document.getElementById("sadder-button");
    sadder.style.display = "flex";
    let message = document.getElementById("message");
    message.style.display = "flex";
    let user = document.getElementById("userInfo");
    user.style.display = "block";
    var emailShow = document.getElementById("email");
    var passwordShow = document.getElementById("password");
    emailShow.style.display = "none";
    passwordShow.style.display = "none";
    // tells user they are logged in
    let html = `<p> You are logged in as: <strong> to do </strong></p>`;
    loggedIn.innerHTML = html;
}

// changes made to webpage when user logs out
function loggedOutObjects() {
    let loggedIn = document.getElementById("loggedIn");
    loggedIn.style.display = "none";
    let happier = document.getElementById("happier-button");
    happier.style.display = "none";
    let happy = document.getElementById("happy-button");
    happy.style.display = "none";
    let meh = document.getElementById("meh-button");
    meh.style.display = "none";
    let sad = document.getElementById("sad-button");
    sad.style.display = "none";
    let sadder = document.getElementById("sadder-button");
    sadder.style.display = "none";
    let message = document.getElementById("message");
    message.style.display = "none";
    let user = document.getElementById("userInfo");
    user.style.display = "none";
    loggedIn.innerHTML = "";
}