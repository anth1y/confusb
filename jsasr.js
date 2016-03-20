'use strict'
const spawn = require('child_process').spawn

module.exports = {
  imagescan: function(){
    this.run(['imagescan', '--source'])
  },
  restore: function(){
    this.run(['restore', '--source'])
  },
  run: function(args){
    let cmd = spawn('asr', args)
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
