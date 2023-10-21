import fs, { constants } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const filename = "fresh.txt";
  const filepath = path.join(__dirname, "files", filename);

  fs.writeFile(filepath, "I am fresh and young", { flag: 'wx' }, (err) => {
    if (err?.code === 'EEXIST') throw new Error('FS operation failed');
  });

  // fs.access(filepath, constants.F_OK, (err) => {
  //     if (err) {
  //         fs.writeFile(filepath, 'I am fresh and young', (err) => {
  //             if (err) throw err;
  //         });
  //     } else {
  //         throw new Error('FS operation failed');
  //     }
  // });
};

await create();

/* Comments */
/*
    fileURLToPath - нормализация пути для текущего ОС
    import.meta - объект с метаданными модуля
    path.dirname - вернет путь к директории файла по указанному пути
    access - проверить файл
    constant.F_OK - мод проверки (существует или нет, есть и други моды)
    writeFile - создать если нет и записать в файл или заменить то что в файле
    wx - если путь уже существует, то выбрасывает ошибку
*/
