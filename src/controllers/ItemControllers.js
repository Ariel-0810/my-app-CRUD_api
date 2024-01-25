let items = require("../../db");

function getItems() {
  return items
}

function getItemById(itemId) {
  return items.find((item) => item.id === itemId);
}

function updateItemById(itemId, updatedItem) {
  items = items.map((item) => (item.id === itemId ? updatedItem : item));
  return updatedItem;
}

function deleteItem(itemId) {
  const index = items.findIndex((item) => item.id === itemId);

  if (index !== -1) {
    items = items.filter((item) => item.id !== itemId);
    return true;
  } else {
    return false;
  }
}

function createItem(newItem) {
  newItem.id = items.length + 1;
  items.push(newItem);
  return newItem;
}


module.exports = { updateItemById, getItemById, getItems, deleteItem, createItem };