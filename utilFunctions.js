const fs = require("fs");
const path = require("path");

function fileExist(fileName) {
    return fs.existsSync(fileName);
}

function removeBigSpace(data) {
    let newData = [];
    for (let j = 0; j < data.length; j++) {
        if (j != 0 && newData[newData.length - 1] == data[j]) {
            continue;
        }
        newData.push(data[j]);
    }
    return newData;
}

function addNumsToAllLines(data) {
    for (let i = 0; i < data.length; i++) {
        data[i] = `${i+1} ${data[i]}`;
    }
    return data;
}

function addNumToContent(data) {
    let numLine = 1;
    for (let i = 0; i < data.length; i++) {
        if (data[i] !== '') {
            data[i] = `${numLine} ${data[i]}`;
            numLine++;
        }
    }
    return data;
}

module.exports = {
    removeBigSpace,
    addNumsToAllLines,
    addNumToContent,
    fileExist
};
