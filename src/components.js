function createButton(label, idName) {
    const button = document.createElement('button');
    button.textContent = label;
    button.setAttribute('id', idName);

    return button;
}

function createTextElement(elementType, text, className = null) {
    const element = document.createElement(elementType);
    element.textContent = text;

    if (className) {
        element.setAttribute('class', className);
    }
    return element;
}

function createImage(src, alt, width, height, className = null) {
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    image.width = width;
    image.height = height;

    if (className) {
        image.setAttribute('class', className);
    }
    return image;
}

function createDivWrapper(className = null) {
    const div = document.createElement('div');

    if (className) {
        div.setAttribute('class', className);
    }
    return div;
}

export { createButton, createTextElement, createImage, createDivWrapper };