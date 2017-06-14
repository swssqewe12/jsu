// Node Webkit
nw;

// NW Window
win = nw.Window.get();

// Require modules
const mkdirp = require('mkdirp');
const fs = require('fs');
const path = require('path')
const rimraf = require('rimraf');

// Menus and stuff

var windowMenu = new nw.Menu({
	type: 'menubar'
});

var fileMenu = new nw.Menu();
var helpMenu = new nw.Menu();

windowMenu.append(new nw.MenuItem({
	label: 'File',
	submenu: fileMenu
}));

windowMenu.append(new nw.MenuItem({
	label: 'Help',
	submenu: helpMenu
}));

fileMenu.append(new nw.MenuItem({
	label: 'New Projcet',
	click: function() {
		if (confirm("Changes may not be saved for your current project. Are you sure you would like to continue?"))
			createNewProjectDialog();
	}
}));

fileMenu.append(new nw.MenuItem({
	label: 'Open Project',
	click: function() {
		if (confirm("Changes may not be saved for your current project. Are you sure you would like to continue?"))
			openProjectDialog();
	}
}));

fileMenu.append(new nw.MenuItem({
	label: 'Save',
	click: function() {
		alert("SAVE THIS FILE!")
	}
}));

helpMenu.append(new nw.MenuItem({
	label: 'About',
	click: function() {
		alert("JSUnity is a web-based version of Unity allowing you to create games for the web using javascript and gui interface.\n\n(c) David Callanan 2017+")
	}	
}));

win.menu = windowMenu;

// Some global functions

function getDirectories (srcpath)
{
  return fs.readdirSync(srcpath)
    .filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory())
}