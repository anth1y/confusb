//TODO https://www.npmjs.com/package/nodejs-disks
var $ = require('jquery')
var usb = require('electron-usb')
usb.on("attach", function(device){
    var form = $("#foo")
    form.append(renderDeviceCheckbox(device))
})
usb.on("detach", function(device) {
  $('device'+device.deviceAddress).remove()
})
/**
 *
 * <div class="checkbox">
 *   <label>
 *     <input type="checkbox"> DRIVE
 *   </label>
 * </div>
 */
function renderDeviceCheckbox (device) {

    var checkbox = document.createElement('div')
    checkbox.id ='device'+ device.deviceAddress
    checkbox.class = 'checkbox'

        var input = document.createElement('input')
        input.type = 'checkbox'
        input.name = 'devices'
        input.value = device.deviceAddress
        input.id = "devices"

        var label = document.createElement('label')
        label.appendChild(input)
        checkbox.appendChild(label)
        label.appendChild(document.createTextNode(device.deviceAddress))
        return checkbox
}

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('#foo')
    usb.getDeviceList().forEach(function (device) {
        console.log(device)
        form.appendChild(renderDeviceCheckbox(device))
    })

})

