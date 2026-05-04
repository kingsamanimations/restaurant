import * as pageComponents from './components.js';
import cafeSceneImage from './images/madeline-liu-qJFRvNwGMTM-unsplash.jpg'
import jollofImage from './images/keesha-s-kitchen-PqG32DYCTM8-unsplash.jpg'
import noodlesImage from './images/orijit-chatterjee-wEBg_pYtynw-unsplash.jpg'
import pizzaImage from './images/chad-montano-MqT0asuoIcU-unsplash.jpg'
import riceImage from './images/shreyak-singh-0j4bisyPo3M-unsplash.jpg'
import './styles.css';

const textData = {
    logo: `Welcome To The Restaurant`,
    slogan: `Everything Food
    is HERE!`,
    intro: `We serve food that's both culture, nutritious, and tasty!
    What would you like?`,
    header: `WHAT WE'VE GOT`,
    list: `Nigerian Food
    Chinese Food
    Italian Food
    Indian Food`,
    note: `The presentation of food always matters. It shows how clean it is. It's theme shows the type of person it's for. There's room for creativity in food. And it should have perfect quantities of ingredients!
    - King Sam`
}

const imageData = {

    hero: {
        src: cafeSceneImage,
        alt: 'The cafe Scene',
        width: '300',
        height: '300',
    },

    foods: [
        {
            src: jollofImage,
            alt: 'pot of Jollof Rice with peppers and kebabs',
            caption: 'Nigerian Food',
            width: '170',
            height: '170',
        },
        {
            src: noodlesImage,
            alt: 'plate of noodles with veggies and chopsticks',
            caption: 'Chinese Food',
            width: '170',
            height: '170',
        },
        {
            src: pizzaImage,
            alt: 'board of onion and spinach pizza',
            caption: 'Italian Food',
            width: '170',
            height: '170',
        },
        {
            src: riceImage,
            alt: 'bowl of rice, chicken, and cucumbers',
            caption: 'Indian Food',
            width: '170',
            height: '170',
        }
    ]
}


// Create and append elements to build content
const loadHomePage = () => {
    const content = document.getElementById('content');
    const div = document.createElement('div');

    // Add Text, classes, etc
    content.appendChild(div);

    // Call other functions
    createHeader(content);
    renderHomePage(content);
}

export default loadHomePage;
// Page structure

function createHeader(parentElement) {
    const headerWrapper = pageComponents.createDivWrapper('header');
    const logo = pageComponents.createTextElement('h1', textData.logo);
    const btnWrapper = pageComponents.createDivWrapper('button-wrapper');
    const homeBtn = pageComponents.createButton('Home', 'home-btn');
    const menuBtn = pageComponents.createButton('Menu', 'menu-btn');
    const contactBtn = pageComponents.createButton('Contact', 'contact-btn');

    btnWrapper.append(homeBtn, menuBtn, contactBtn);
    headerWrapper.append(logo, btnWrapper);

    parentElement.appendChild(headerWrapper);
}

function createHeroSection() {
    const heroSection = pageComponents.createDivWrapper('hero-section');
    const backgroundImg = pageComponents.createImage(imageData.hero.src, imageData.hero.alt, imageData.hero.width, imageData.hero.height, 'hero-image');
    const textWrapper = pageComponents.createDivWrapper('hero-text');
    const slogan = pageComponents.createTextElement('h1', textData.slogan, 'slogan');
    const intro = pageComponents.createTextElement('p', textData.intro, 'intro');

    textWrapper.append(slogan, intro);
    heroSection.append(backgroundImg, textWrapper);

    return heroSection;
}

function createPhotoGallery(imageArray,parentElement) {
    imageArray.forEach(image => {
        const imageHolder = pageComponents.createDivWrapper('image-holder');
        const foodImage = pageComponents.createImage(image.src, image.alt, image.width, image.height);
        const caption = pageComponents.createTextElement('p', image.caption, 'caption');
        
        imageHolder.append(foodImage, caption);
        parentElement.appendChild(imageHolder);
    });
}

function createQuoteSection() {
    const QuoteSection = pageComponents.createDivWrapper('quote-section');
    const header = pageComponents.createTextElement('h3', textData.header, 'header');
    const albumWrapper = pageComponents.createDivWrapper('album-wrapper');
    const noteWrapper = pageComponents.createDivWrapper('note-wrapper');
    const introWrapper = pageComponents.createDivWrapper('intro-wrapper');
    const note = pageComponents.createTextElement('h3', textData.note, 'note');
    const introContent = pageComponents.createTextElement('p', textData.introContent, 'intro-content');

    createPhotoGallery(imageData.foods, albumWrapper);

    noteWrapper.append(note);

    introWrapper.append(introContent, header, note);

    QuoteSection.append(header, albumWrapper, noteWrapper, introWrapper);

    return QuoteSection;
}

function renderHomePage(parentElement) {
    parentElement.append(createHeroSection(), createQuoteSection());
}

export { createHeader, renderHomePage };