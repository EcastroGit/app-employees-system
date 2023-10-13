import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

// Obtén la ruta absoluta al directorio "public/images"
const __filename = fileURLToPath(import.meta.url);
const destinationPath = path.join(
  path.dirname(__filename), "../../public/images");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

export default upload;