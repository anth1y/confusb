'use strict'

const spawn = require('child_process').spawn
const exec = require('child_process').exec;


module.exports = {
    list: function(done){
        exec('mount', (err, stdout, stderr) => {
           if (err) return done(err)
           let drives = stdout.toString().split('\n').filter(function(line){
             if (line.match('msdos')){
               return true
             }
           }).map(function(line){
               let splice = line.split(' on ')
               return {
                  volume : splice[1].split(' ')[0], 
                  device : splice[0]
               }
             })
           done(null, drives)
        })
    },
}
