'use strict'

const sudo = require('sudo-prompt')
module.exports = {
  asr: function(img, dev, done) {
       let cmd = `asr restore --source ${img} --target ${dev} --noprompt --noverify --erase`
        sudo.exec(cmd, function(error, stdout, stderr){
          if (error) {
            return done(error)
          }
          done(null, stdout)
      })
  }
}
