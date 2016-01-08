
export function on(el, event, fn) {
  //unsupported browser - IE9, newer and other browsers
  if (!(el && typeof el.addEventListener === 'function')) {
    console.error(new Error("Unsupported Browser"), el, event);
    return;
  }
  
  el.attachEvent(event, fn);
}

export function un(el, event, fn) {
  if (!(el && typeof el.removeEventListener === 'function')) {
    console.error(new Error("Unsupported Browser"), el, event);
    return;
  }
  
  el.removeEventListener(event, fn)
}