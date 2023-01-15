#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const {
    fileExist,
    removeBigSpace,
    addNumToContent,
    addNumsToAllLines,
} = require("./utilFunctions");

let inputArr = process.argv.slice(2);
let command = [];
let files = [];

for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i][0] === "-") {
        command.push(inputArr[i].slice(1));
    } else {
        if (fileExist(inputArr[i])) {
            files.push(inputArr[i]);
        } else {
            console.log(
                "This file doesn't exist ⚠ ",
                path.basename(inputArr[i])
            );
            return;
        }
    }
}

if (command.includes("b") === true && command.includes("n") === true) {
    console.log("You can't use option -n and -b together");
    return;
}

let content = "";

for (let i = 0; i < files.length; i++) {
    content += fs.readFileSync(inputArr[i]);
}

content = content.split("\r\n");

let reduce = command.includes("s");
if (reduce === true) {
    content = removeBigSpace(content);
}

let numAllLines = command.includes("n");
if (numAllLines === true) {
    content = addNumsToAllLines(content);
}

let numContentLines = command.includes("b");
if (numContentLines === true) {
    content = addNumToContent(content);
}

console.log(content.join("\n"));
