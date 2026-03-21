import { Router } from "express";
import { getAlltodos, gettodobyid, createTodo } from "./controller.js";
const router = Router();

router.get("/", getAlltodos);

router.get("/:id", gettodobyid);

router.post("/create", createTodo);

router.put("/:id", (req, res) => {
  res.send("todo will be updated");
});
router.delete("/:id", (req, res) => {
  res.send("todo will be deleted");
});

export default router;
