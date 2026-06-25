function generateMenu (menuItems) {
  return menuItems.reduce((out, i) => out + ('' + i.text).link('' + i.url), '');
}