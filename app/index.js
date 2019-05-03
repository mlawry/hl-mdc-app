import {MDCTextField} from '@material/textfield';

window.setTimeout(function () {

    var firstDiv = jQuery(jQuery("div.controls")[0]);

    var elem1 = jQuery(document.createElement("div")).addClass("mdc-text-field").addClass("username").append(
        jQuery(document.createElement("input")).addClass("mdc-text-field__input").attr("type", "text").attr("id", "username-input").attr("name", "username"),
        jQuery(document.createElement("label")).addClass("mdc-floating-label").attr("for", "username-input").text("Username"),
        jQuery(document.createElement("div")).addClass("mdc-line-ripple")
    );
    var elem2 = jQuery(document.createElement("div")).addClass("mdc-text-field").addClass("password").append(
        jQuery(document.createElement("input")).addClass("mdc-text-field__input").attr("type", "password").attr("id", "password-input").attr("name", "password"),
        jQuery(document.createElement("label")).addClass("mdc-floating-label").attr("for", "password-input").text("Password"),
        jQuery(document.createElement("div")).addClass("mdc-line-ripple")
    );

    firstDiv.append(elem1, elem2);

    const username = new MDCTextField(document.querySelector('.username'));
    const password = new MDCTextField(document.querySelector('.password'));
}, 10000);

