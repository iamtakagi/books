import csv from "csvtojson";
import path from "path";
import fs from "fs";

const csvFilePath = path.resolve(__dirname, "..", "data.csv");
const jsonFilePath = path.resolve(__dirname, "..", "public", "data.json");

csv()
    .fromFile(csvFilePath)
    .then((rows) => {
        rows = rows.map((row) => {
            row.id = new Number(row.id);
            row.title = new String(row.title);
            row.href = new String(row.href);
            row.author = new String(row.author);
            row.supervisor = new String(row.supervisor);
            row.translator = new String(row.translator);
            row.isSold = row.isSold;
            return row;
        });
        fs.writeFile(
            jsonFilePath,
            JSON.stringify(rows, null, 2),
            (err: any) => {
                if (err) {
                    throw err;
                }
                console.log("JSON generated.");
            }
        );
    });
