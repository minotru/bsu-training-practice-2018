export function stringToDOMElement(s) {
    const template = document.createElement("template");
    template.innerHTML = s;
    return template.content.firstChild;
}

export function addClassIf(condition, className, elseClassName = "") {
    if (condition)
        return (" " + className);
    else
        return (" " + elseClassName);
}

/**
 * 
 * @param {Node} element 
 * @returns {[Node]} removed children
 */
export function removeChildren(element) {
    const children = [];
    while (element.firstChild)
        children.push(element.removeChild(element.firstChild));
    return children;
}