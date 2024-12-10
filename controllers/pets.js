import { Router } from "express";
import Pet from "../models/pet.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allPets = await Pet.find({});
    res.json(allPets);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      throw new Error("Pet not found!");
    }
    res.json(pet);
  } catch (error) {
    console.error(error);
    res.json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);
    res.json(newPet);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPet)
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.id);
    res.json(deletedPet);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

export default router;
