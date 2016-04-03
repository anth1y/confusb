"use strict"
const $ = require('jquery')
const hbars = require('handlebars')
const dialog = remote.require('dialog')
const partd = require('./lib/parted')
const mount = require('./lib/jsmnt')

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

function partition() {
       let conf = $('#conf')[0].value
       partd.partitionDisk(conf)
       console.log(conf)
}

$(function () {
    renderCheckboxes()
 })

