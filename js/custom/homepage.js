function opensignin() {
    var login = $('#login-container');
    var background = $('#background-cover');

    login.css({
        'top': '10em',
        'z-index': '3'
    });

    background.css({
        'z-index': '2',
        'opacity': '0.75'
    });
}

function closesignin() {
    var login = $('#login-container');
    var background = $('#background-cover');

    login.css({
        'top': '-100em'
    });

    background.css({
        'z-index': '-1',
        'opacity': '0'
    });
}

function opensignup() {
    var signup = $('#signup-container');
    var background = $('#background-cover');

    signup.css({
        'top': '10em',
        'z-index': '3'
    });

    background.css({
        'z-index': '2',
        'opacity': '0.75'
    });
}

function closesignup() {
    var signup = $('#signup-container');
    var background = $('#background-cover');

    signup.css({
        'top': '-100em'
    });

    background.css({
        'z-index': '-1',
        'opacity': '0'
    });
}

$(document).mouseup(function (e) {
    var emailcontainer = $("#email-field");
    var passwordcontainer = $("#password-field");
    var signupnamecontainer = $("#signup-name-field");
    var signupemailcontainer = $("#signup-email-field");
    var signuppasswordcontainer = $("#signup-password-field");

    if (!emailcontainer.is(e.target) // if the target of the click isn't the container...
        && emailcontainer.has(e.target).length === 0) // ... nor a descendant of the container
    {
        emailcontainer.removeClass("login-field-active");
    } else {
        emailcontainer.addClass("login-field-active");
    }

    if (!passwordcontainer.is(e.target) // if the target of the click isn't the container...
        && passwordcontainer.has(e.target).length === 0) // ... nor a descendant of the container
    {
        passwordcontainer.removeClass("login-field-active");
    } else {
        passwordcontainer.addClass("login-field-active");
    }

    if (!signupnamecontainer.is(e.target) // if the target of the click isn't the container...
        && signupnamecontainer.has(e.target).length === 0) // ... nor a descendant of the container
    {
        signupnamecontainer.removeClass("login-field-active");
    } else {
        signupnamecontainer.addClass("login-field-active");
    }

    if (!signupemailcontainer.is(e.target) // if the target of the click isn't the container...
        && signupemailcontainer.has(e.target).length === 0) // ... nor a descendant of the container
    {
        signupemailcontainer.removeClass("login-field-active");
    } else {
        signupemailcontainer.addClass("login-field-active");
    }

    if (!signuppasswordcontainer.is(e.target) // if the target of the click isn't the container...
        && signuppasswordcontainer.has(e.target).length === 0) // ... nor a descendant of the container
    {
        signuppasswordcontainer.removeClass("login-field-active");
    } else {
        signuppasswordcontainer.addClass("login-field-active");
    }
});