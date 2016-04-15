"use strict"
const $ = require('jquery')
const hbars = require('handlebars')
const dialog = remote.require('dialog')
const partd = require('./lib/parted')
const mount = require('./lib/jsmnt')
const imgwrt = require('./lib/imgwrt')

function renderCheckboxes () {
    let form = $('#form')
    let source = $("#template").html()
    let template = hbars.compile(source)
    mount.list(function(err, drives) {
      if (err) {
        return console.log(err)
      }

      let html = template({
          drives : drives
      })
      form.append(html)
        $('#drvchkbox').change(function(){
            let sector = []
           $( "input:checkbox:checked" ).each(function(){
               sector.push($(this).val())
           })
           drvimgr.drives = sector
           console.log(drvimgr)
        })
    })
}
let drvimgr = { drives : [] }
function chooseImage() {
       dialog.showOpenDialog({
          filters: [
         {name: 'Images', extensions: ['dmg']},
           ]
        },
            function(filenames){
               console.log(filenames)
               drvimgr.image = filenames[0]
               console.log(drvimgr.image)
        })
}

function conf() {
    return $('#conf')[0].value
}

function partition() {
       let dsk = drvimgr.drives[0].slice(0,-2)
       partd.partitionDisk(dsk,conf())    
       console.log(dsk,conf())
}


function asr() {
    let img = drvimgr.image
    let count = 0
      //  for (let i = 0; i < drvimgr.drives.length; i++ ){
             let dev = drvimgr.drives[0]
             imgwrt.asr(img, dev, function(error, stdout, stderr){
                 count++
                  console.log('ASRERROR', error, stdout, stderr)
                 if (error) {
                   console.log('ASRERROR', error.stack)
                   return
                 }
                 console.log('ASR', stdout, img, dev)
             })
   //  }
  //   while (count !== drvimgr.drives.length) {}
   //  alert('done')
}
$(function () {
    renderCheckboxes()
 })

