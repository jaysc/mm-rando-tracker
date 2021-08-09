import express from "express";
import * as fs from "fs";
import path from "path";
import * as MMRSettings from "./interfaces/MMRSettings"
import Item from "./classes/item"
import readline from "readline";

const app = express()
const port = 3000

app.use(express.static('settings'))
const settingFilePath = path.join(__dirname, 'public/standardS2.json');
const logicFilePath = path.join(__dirname, 'public/REQ_CASUAL.txt');

app.get('/', async (req, res) => {
  const settings = JSON.parse(fs.readFileSync(settingFilePath) as unknown as string) as MMRSettings.RootObject;
  const logicFile = await processLineByLine();

  res.json(logicFile)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

async function processLineByLine() {
  const fileStream = fs.createReadStream(logicFilePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  const items: Item[] = [];
  let item: Item = null;
  let itemLineNumber: number = 1;
  let itemId = 0;
  for await (const line of rl) {
    if (line.includes("version")){
      continue;
    }

    if (item == null) {
      item = new Item();
      item.id = itemId++;
      itemLineNumber = 1;
    }

    switch (itemLineNumber) {
      case 1:
        item.name = line.replace("- ", "");
        break;
      case 2:
        item.requriedItems = line.split(",").map(r => parseInt(r));
        break;
      case 3:
        item.conditionalItems = line.split(";").map(r => r.split(",").map(f => parseInt(f)));
        break;
      case 4:
        item.neededOn = parseInt(line);
        break;
      case 5:
        item.avaliableOn = parseInt(line);
        break;

      case 6:
      default:
        items.push(item);
        item = null;
        continue;
    }

    itemLineNumber++;
  }
  console.log(items);

  const result = {};
  items.forEach(item => {
    result[item.name] = {
      "id": item.id,
      "requiredItems": item.requriedItems,
      "avaliableOn": item.avaliableOn,
      "neededOn": item.neededOn,
      "conditionalItems": item.conditionalItems
    }
  })

  return result;
}