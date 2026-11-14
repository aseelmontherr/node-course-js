//Programmer: Aseel Monther
//This program reads three text files and combines their contents into a single output file. 
//The lines are copied in a specific order while preserving their original sequence. 
//The final result is saved in output.txt. 
const fs = require('fs');
const path = require('path');
const file1 = path.join(__dirname, "input", "file1.txt");
const file2 = path.join(__dirname, "input" , "file2.txt");
const file3 = path.join(__dirname, "input", "file3.txt");
const lines1 = fs.readFileSync(file1, "utf8").trimEnd().split(/\r?\n/);
const lines2 = fs.readFileSync(file2, "utf8").trimEnd().split(/\r?\n/);
const lines3 = fs.readFileSync(file3, "utf8").trimEnd().split(/\r?\n/);
const files = [lines1, lines2, lines3];
const positions = [0, 0, 0];
let result = [];
let count = 1;
while 
(
    positions[0] < files[0].length ||
    positions[1] < files[1].length ||
    positions[2] < files[2].length
)
{
    for (let i = 0; i < files.length; i++)
        {
            for (let j = 0; j < count; j++)
                {
                    if (positions[i] < files[i].length)
                        {
                            result.push(files[i][positions[i]]);
                            positions[i]++;
                        }
                }
        }
        count++;
}
const outputPath = path.join(__dirname, "output.txt");
fs.writeFileSync(outputPath, result.join("\n"), "utf8");
