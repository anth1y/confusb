"use strict"
const $ = require('jquery')
const usb = require('usb-detection')
const hbars = require('handlebars')
const remote = require('remote')
const dialog = remote.require('dialog')


function renderCheckboxes () {
    let form = $('#form')
    let source = $("#template").html()
    let template = hbars.compile(source)
    usb.find(function(err, devices) {
      if (err) {
        return console.log(err)
      }

      let html = template({
          devices: devices.filter(function(device){
             return device.manufacturer.indexOf('Apple') === -1
          })
      })
      form.append(html)
    })
}

$(function () {
    renderCheckboxes()
    $('#wtf').click(function(event){
        dialog.showOpenDialog(function(filenames){
        console.log(filenames)
        })
    })
})

