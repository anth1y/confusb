'use strict'
const spawn = require('child_process').spawn


module.exports = {
  partitionDisk: function(){
    this.run(['partitionDisk', 'MBRFormat', 'FAT32', '100%'])
  },
  eraseDisk: function(){
    this.run(['eraseDisk'])
  },
  run: function(args){
    let cmd = spawn('diskutil', args);
    cmd.stdout.on('data', (data) => {
       console.log(data.toString());
     });

     cmd.stderr.on('data', (data) => {
           console.log(data.toString());
     });

     cmd.on('close', (code) => {
         process.exit(code)
     });
   }
}

