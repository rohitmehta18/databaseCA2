const express = require("express");
const router = express.Router();
const movie = require("../moviesSchema");

router.get("/", async (req, res) => {
  const movies = await movie.find();
  res.json(movies);
});


router.post("/", async (req, res) => {
  try {
    const movie = await movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.put("/:id", async (req, res) => {
  const movie = await movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(movie);
});



router.delete("/:id", async (req, res) => {
  await movie.findByIdAndDelete(req.params.id);
  res.json({ message: "Movie deleted" });
});

module.exports = router;