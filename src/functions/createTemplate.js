export function createTemplate(html) {
  const container = document.createElement('div');
  container.innerHTML = html; 
  return container.firstElementChild;
}