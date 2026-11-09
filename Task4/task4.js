//Aseel Monther
/*
This program reads 10 text files from the input folder.
For each file, it copies a specific number of lines:
1 line from the first file, 2 lines from the second file, and so on, up to 10 lines from the tenth file
If a file contains fewer lines than required, the program copies only the available lines. 
All selected lines are combined and written into a single file named output.txt
*/
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