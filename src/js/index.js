/** Stylesheet **/
import '../scss/style.scss';

/** Bootstrap */
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

/** FontAwesome 6 */
import '@fortawesome/fontawesome-free/js/all.js';

/** Footer */
document.body.onload = footer;

function footer() {
    // create a new div element
    const footerDiv = document.createElement("footer");

    // assign it a class
    footerDiv.classList.add("footer");
    footerDiv.classList.add("mt-auto");
    footerDiv.classList.add("text-center");
    footerDiv.classList.add("py-3");


    // gets the current date
    const copyright = new Date().getFullYear();

    // gets the copyright symbol
    const favicon = document.createElement("i");
    favicon.classList.add("fas", "fa-copyright");

    const text = document.createTextNode(" 2020 " + "- " + copyright);

    // add the text node to the newly created div
    footerDiv.appendChild(favicon);
    footerDiv.appendChild(text);

    // add the newly created element and its content into the DOM
    const newDiv = document.getElementById("div");
    document.body.insertBefore(footerDiv, newDiv);
}
