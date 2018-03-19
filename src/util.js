export function stringToDOMElement(s) {
  const template = document.createElement('template');
  template.innerHTML = s;
  return template.content.firstChild;
}

export function addClassIf(condition, className, elseClassName = '') {
  return condition ? (' ' + className) : (' ' + elseClassName);
}

export function renderIf(condition, html) {
  return condition ? html : '';
}

/**
 *
 * @param {[Element]} elements
 * @param {Element} wrapper
 * @returns {Element} Rendered element.
 */
export function render(elements, wrapper) {
  if (!Array.isArray(elements)) {
    elements = [elements];
  }

  elements.forEach(element => wrapper.appendChild(element));
  return wrapper;
}

/**
 *
 * @param {Node} element
 * @returns {[Node]} removed children
 */
export function removeChildren(element) {
  const children = [];
  while (element.firstChild) {
    children.push(element.removeChild(element.firstChild));
  }
  return children;
}