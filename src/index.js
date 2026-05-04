import loadHomePage, { createHeader, renderHomePage } from "./home";
import loadMenuPage from "./menu";
import renderContactSection from "./contactPage";
import renderMenuSection from "./menu";

loadHomePage();

const contentDiv = document.querySelector('#content')

function clearContent() {
    contentDiv.innerHTML = "";
}

// One event listener to nav buttons
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const contactBtn = document.querySelector('#contact-btn');

// when clicked:
contentDiv.addEventListener("click", (e) => {
    if (e.target.id === 'home-btn') {
        // 1. clear div#content
        clearContent();
        // 2. call the right function
        createHeader(contentDiv);
        renderHomePage(contentDiv);
    } else if (e.target.id === 'menu-btn') {
        // 1. clear div#content
        clearContent();
        // 2. call the right function
        renderMenuSection(contentDiv);
    } else if (e.target.id === 'contact-btn') {
        // 1. clear div#content
        clearContent();
        // 2. call the right function
        renderContactSection(contentDiv);
    }
});

/*
// An indivdual event listener for e.target.id to nav buttons

// when clicked:
contentDiv.addEventListener("click", e => {
    // 1. clear div#content
    if (e.target.id === 'home-btn' || e.target.className === 'logo' || e.target.id === 'menu-btn' || e.target.id === 'contact-btn') {
        clearContent();
        createHeader(contentDiv);
    }
    
    // 2. call the right function
    if (e.target.id === 'home-btn' || e.target.className === 'logo') {
        renderHomePage(contentDiv);
    } else if (e.target.id === 'menu-btn') {
        renderMenuPage(contentDiv);
    } else if (e.target.id === 'contact-btn') {
        renderContactPage(contentDiv);
    } else {
        return;
    }

}); */
