import * as pageComponents from './components.js';
import mapImage from './images/kobu-agency-FyvE6XPs5gk-unsplash.jpg';

const loadContactPage = () => {
    const content = document.getElementById('content');
    const div = document.createElement('div');

    // Add Text, classes, etc
    content.appendChild(div);
}

export { loadContactPage };

const textData = {
    email: {
        heading: 'EMAIL',
        info: 'mynameisbarry@.com'
    },

    phone: {
        heading: 'PHONE NUMBER',
        info: '123-456-789'
    },

    address: {
        heading: 'ADDRESS',
        info: '456 pancake street, star 124535'
    },

    hours: {
        heading: 'HOURS',
        info: 'Mon - Fri: 11am - 6pm'
    }
}

const imageData = {
    map: {
        src: mapImage,
        alt: 'Map of cities',
        width: '400',
        height: '400',
    }
}


// Page Structure
function createHeading() {
    const headerWrapper = pageComponents.createDivWrapper('header');
    const logo = pageComponents.createTextElement('h1', 'Welcome To The Restaurant');
    const btnWrapper = pageComponents.createDivWrapper('button-wrapper');
    const homeBtn = pageComponents.createButton('Home', 'home-btn');
    const menuBtn = pageComponents.createButton('Menu', 'menu-btn');
    const contactBtn = pageComponents.createButton('Contact', 'contact-btn');
    const contactHeading = pageComponents.createDivWrapper('contact-heading');
    const contactTitle = pageComponents.createTextElement('h1', 'contact');
    contactHeading.appendChild(contactTitle);

    btnWrapper.append(homeBtn, menuBtn, contactBtn);
    headerWrapper.append(logo, btnWrapper);

    return headerWrapper;
}

function createContactDetails(textObject) {
    const contactWrapper = pageComponents.createDivWrapper('contact-wrapper');

    // Loop
    for (const key in textObject) {
        const heading = pageComponents.createTextElement('h2', textObject[key].heading);
        const info = pageComponents.createTextElement('p', textObject[key].info);
        contactWrapper.append(heading, info);
    }

    return contactWrapper;
}

function createMap() {
    const imageHolder = pageComponents.createDivWrapper('map-holder');
    const map = pageComponents.createImage(imageData.map.src, imageData.map.alt, imageData.map.width, imageData.map.height, 'map');

    imageHolder.appendChild(map);

    return imageHolder;
}

export default function renderContactSection(parentElement) {
    const contactSection = pageComponents.createDivWrapper('contact-section');

    contactSection.append(createHeading(), createContactDetails(textData), createMap());

    parentElement.append(contactSection);
}