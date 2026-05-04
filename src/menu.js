import * as pageComponents from './components.js';
const textData = {
    mains: [
        {
            name: 'Jollof Rice',
            description: 'Rice marinated with an African sauce and stock'
        },
        {
            name: 'Biryani Rice',
            description: 'Aromatic Basmati rice with marinated meat'
        },
        {
            name: 'Chow Mein',
            description: 'Chinese stir-fried noodles with vegetables and meat'
        },
        {
            name: 'Siciliana Pizza',
            description: 'Pizza originating in the Sicily region of Italy'
        },
        {
            name: 'Jerk Chicken',
            description: 'Iconic Jamaican chicken marinated in a spicy aromatic blend'
        },
    ],
    desserts: [
        {
            name: 'Puff Puff',
            description: 'A sweet Nigerian mixture fried as mini balls'
        },
        {
            name: 'Wagashi',
            description: 'Japenese confectionery with plant-based ingredients'
        },
        {
            name: 'Egg Tart',
            description: 'A Tart with an outer pastry crust filled with an egg custard'
        },
        {
            name: 'Crostata',
            description: 'Italian baked tart with a mix of berries'
        },
        {
            name: 'Macarons',
            description: 'Sweet meringue-based confection'
        },
        {
            name: 'Peda',
            description: 'Indian sweet originated in Mathura, Uttar Pradesh, India'
        },
    ],

    drinks: [
        {
            name: 'AfriMalt',
            description: '100% alcohol-free malt drink made with natural African barley malt'
        },
        {
            name: 'Ting',
            description: 'Flavoured with Jamaican grapefruit juice'
        },
        {
            name: 'Floral Tea',
            description: 'Aromatic infusions made with flowers'
        },
        {
            name: 'Chinotto',
            description: 'Produced from the juice of oranges'
        },
    ]
};

// Page structure
function createHeading() {
    const headerWrapper = pageComponents.createDivWrapper('header');
    const logo = pageComponents.createTextElement('h1', 'Welcome To The Restaurant');
    const btnWrapper = pageComponents.createDivWrapper('button-wrapper');
    const homeBtn = pageComponents.createButton('Home', 'home-btn');
    const menuBtn = pageComponents.createButton('Menu', 'menu-btn');
    const contactBtn = pageComponents.createButton('Contact', 'contact-btn');
    const menuTitle = pageComponents.createTextElement('h1', 'Menu');

    btnWrapper.append(homeBtn, menuBtn, contactBtn);
    headerWrapper.append(logo, btnWrapper);

    return headerWrapper;
}

function createMenuGroup(itemArray, parentElement) {
    itemArray.forEach(item => {
        const menuItem = pageComponents.createDivWrapper('menu-item');
        const itemName = pageComponents.createTextElement('h3', item.name);
        const itemDescription = pageComponents.createTextElement('p', item.description);

        menuItem.append(itemName, itemDescription);
        parentElement.appendChild(menuItem);
    });
}

function createMenuContent() {
    const menuWrapper = pageComponents.createDivWrapper('menu-wrapper');
    const mainsHeading = pageComponents.createTextElement('h2', 'MAINS');
    const dessertsHeading = pageComponents.createTextElement('h2', 'DESSERTS');
    const drinksHeading = pageComponents.createTextElement('h2', 'DRINKS');

    menuWrapper.appendChild(mainsHeading);
    createMenuGroup(textData.mains, menuWrapper);
    menuWrapper.appendChild(dessertsHeading);
    createMenuGroup(textData.desserts, menuWrapper);
    menuWrapper.appendChild(drinksHeading);
    createMenuGroup(textData.drinks, menuWrapper);

    return menuWrapper;
}

export default function renderMenuSection(parentElement) {
    const menuSection = pageComponents.createDivWrapper('menu-section');

    menuSection.append(createHeading(), createMenuContent());

    parentElement.appendChild(menuSection);
}


