'use strict';

//const electron = require('electron');
const app = require('app')
const usb = require('electron-usb')
const BrowserWindow = require('browser-window')


var mainWindow = null;
//console.log(electron)
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});


app.on('ready', function()  {
  mainWindow = new BrowserWindow({width:600, height: 300,
   'min-width':500,
   'min-height': 200,
    'accept-first-mouse': true,
    'title-bar-style':'hidden'
  });
  
  mainWindow.loadURL('file://' + __dirname + '/index.html');

//  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});


