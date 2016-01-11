var lastTheme = null;
var classes = null;
export default function(theme, freeStyle) {
  if (theme == lastTheme) return classes; //nothing new
  
  lastTheme = theme;
  return classes = {
    // 'foo': freeStyle.registerStyle(...)
  }
}