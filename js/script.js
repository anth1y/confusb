function getUSBDrives () {
    return [
        '/dev/wtf',
        '/dev/wtg',
        '/dev/wth'
    ]
}

/**
 *
 * <div class="checkbox">
 *   <label>
 *     <input type="checkbox"> DRIVE
 *   </label>
 * </div>
 */
function renderDriveCheckbox (drive) {


    var checkbox = document.createElement('div')
    checkbox.class = 'checkbox'

        var input = document.createElement('input')
        input.type = 'checkbox'
        input.name = 'drives'
        input.value = drive
        input.id = "drives"

        var label = document.createElement('label')
        label.appendChild(input)
        checkbox.appendChild(label)
        label.appendChild(document.createTextNode(drive))
        return checkbox
}
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('#foo')
    alert('yep')
    getUSBDrives().forEach(function (drive) {
        form.appendChild(renderDriveCheckbox(drive))
    })

})


