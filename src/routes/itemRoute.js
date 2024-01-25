const express = require("express");

const { updateItemById, getItems, getItemById, deleteItem, createItem } = require("../controllers/ItemControllers");

const router = express.Router();

router.get('/', (req, res) => {
  try {
    let result = getItems();
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});


router.get('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = getItemById(itemId);
  try {
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});


router.put('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  const result = updateItemById(itemId, updatedItem);
  try {
    if (!result) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});

router.delete('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const result = deleteItem(itemId);

  try {
    if (!result) {
      return res.status(400).json({ message: "Item not found" })
    }
    res.status(200).json({ message: `Item ${itemId} removed successfully` });
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});


router.post('/', (req, res) => {
  const newItem = req.body;
  try {
    if (!newItem.personaje || !newItem.anime) {
      return res.status(400).json({ message: "Character and Anime are required fields" });
    }
    const result = createItem(newItem);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});

module.exports = router;