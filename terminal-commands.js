const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
	    return `${acc} ${file} `;
	}, '');

	console.log(filesToString);
    });
};

module.exports.mkdir = (dirName) => {
    fs.mkdir(`./${dirName}`, err => {
        if (err) {
            if (err.code === 'EEXIST') {
                console.log('Directory already exists');
            } else {
                console.log(err);
            }
            return;
        }
        console.log(`${dirName} created`);
    })
}

module.exports.touch = (fileName) => {
    fs.writeFile(`${fileName}`, '', err => {
        if (err) return console.log(err);
        console.log(`${fileName} has been created`)
    })
}