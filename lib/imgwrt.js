'use strict'

const sudo = require('electron-sudo')
module.exports = {
  asr: function(img, dev, done) {
    let cmd = `asr restore --source ${img} --target ${dev} --noprompt --noverify --erase`
        console.log(cmd)
        sudo.exec(cmd,{name:'wtf'}, function(error, stdout, stderr){
          if (error) {
            return done(error)
          }
          if (stderr) {
            return done(stderr)
          }
          done(null, stdout)
      })
  }
}
