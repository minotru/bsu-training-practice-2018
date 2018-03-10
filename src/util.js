export function stringToDOMElement(s) {
    const template = document.createElement("template");
    template.innerHTML = s;
    return template.content.firstChild;
}