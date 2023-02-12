import express from "express";
import multer from "multer";
import path from "path";
import { uuid } from "uuidv4";
const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "./upload"),
    filename: (req, file, callback) => {
      callback(null, uuid() + path.extname(file.originalname));
    },
  }),
});

app.post("/uploadImage", upload.single("image"), (req, res) => {
  return res.status(201).json({
    message: "success",
  });
});

app.listen(1010, () => console.log("Servidor no ar....."));
