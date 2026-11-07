//Aseel Monther + Amal Jaraysi 
const fs = require("fs");
const path = require("path");

const files = [
    "file1.txt",
    "file2.txt",
    "file3.txt",
    "file4.txt",
    "file5.txt",
    "file6.txt",
    "file7.txt",
    "file8.txt",
    "file9.txt",
    "file10.txt"
];

const inputFolder = path.join(__dirname, "input");
const outputFile = path.join(__dirname, "output.txt");

let output = "";

for(let i = 0; i < files.length; i++)
{
    let fileName = files[i];
    let filePath = path.join(inputFolder, fileName);
    let content = fs.readFileSync(filePath, "utf8");
    let lines = content.split(/\r\n/);
    if(content.endsWith("\n"))
    {
        lines.pop();
    }
    let numberOfLines = i + 1;

    if(lines.length < numberOfLines)
    {
        numberOfLines = lines.length;
    }

    for(let j = 0; j < numberOfLines; j++)
    {
        output += lines[j] + "\n";
    }
}
fs.writeFileSync(outputFile, output, "utf8");