/**
 * First, make sure you install https://www.npmjs.com/package/archiver
 * by running  npm install archiver --save
 */
const fs = require('fs');
const archiver = require('archiver');
const request = require('request');
const crypto = require('crypto')

/**
 * Deploy configurations:
 * @var deployHandler Link to the server endpoint recieving the deploy archive.
 * @var outputFile Absolute path that will be saved as the archive build before
 *  publising it to the server.
 * @var inputFolder Absolute path to the build folder that will be deployed.
 * @var sercretKey Hash signature key.
 */
const deployHandler = "https://everlast.portacode.com/deploy-handler";
const outputFile = __dirname + '/build.zip';
const inputFolder = __dirname + '/../build';
const sercretKey = fs.readFileSync(__dirname + '/.secret');



var output = fs.createWriteStream(outputFile);
var archive = archiver('zip');

output.on('close', function () {
    const hash = crypto.createHmac('sha1', sercretKey).update(
        fs.readFileSync(outputFile)
    ).digest('hex');
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
    request.post(
        {
            url: deployHandler, 
            formData: {
                build: fs.createReadStream(outputFile), 
                signature : hash
            } 
        },
        function optionalCallback(err, httpResponse, body) {
            if (err) {
                return console.error('upload failed:', err);
            }
            console.log('Upload successful!  Server responded with:', body);
        }
    );
});

archive.on('error', function (err) {
    throw err;
});

archive.pipe(output);

archive.directory(inputFolder, false);
archive.finalize();