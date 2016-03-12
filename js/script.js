var $ = require('jquery')
var usb = require('usb-detection')
var hbars = require('handlebars');


function renderCheckboxes () {
    var form = $('#form')
    var source = $("#template").html()
    var template = hbars.compile(source)
    usb.find(function(err, devices) {  
      if (err) {
        return console.log(err)
      }

      var html = template({ 
          devices: devices.filter(function(device){
             return device.manufacturer.indexOf('Apple') === -1
          })
      })
      form.append(html)
    })
}

$(function () {
    renderCheckboxes()
})

