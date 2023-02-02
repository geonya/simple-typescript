import { readFile } from "fs";

const readFilePromise = (filePath: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    readFile(filePath, (error: any, buffer: Buffer) => {
      if (error) reject(error.message);
      else resolve(buffer.toString());
    });
  });

(async () => {
  const content = await readFilePromise("./package.json");
  console.log("read file...");
  console.log(content);
})();
