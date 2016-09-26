"use strict";

var fs = require('fs');

function copyFile(src, dest, forceOverWrite) {
    if (!forceOverWrite && fs.existsSync(dest)) return;
    var buffer = fs.readFileSync(src);
    fs.writeFileSync(dest, buffer);

}

copyFile( './developpackage.json', './package.json',true);
