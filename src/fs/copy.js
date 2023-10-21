import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const inputFolderPath = path.join(__dirname, "files");
  const outputFolderPath = path.join(__dirname, "files_copy");

  fs.readdir(inputFolderPath, "utf-8", (err, files) => {
    if (err?.code === 'ENOENT') throw new Error('FS operation failed');

    fs.mkdir(outputFolderPath, (err) => {
      if (err?.code === 'EEXIST') throw new Error('FS operation failed');;
    });

    files.forEach((file) => {
      fs.copyFile(
        path.join(inputFolderPath, file),
        path.join(outputFolderPath, file),
        (err) => {
          if (err) throw err;
        }
      );
    });
  });
};

await copy();
