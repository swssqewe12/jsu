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
var prefabsMenu = new nw.Menu();
var componentsMenu = new nw.Menu();
var helpMenu = new nw.Menu();

windowMenu.append(new nw.MenuItem({
	label: 'File',
	submenu: fileMenu
}));

windowMenu.append(new nw.MenuItem({
	label: 'Prefabs',
	submenu: prefabsMenu
}));

windowMenu.append(new nw.MenuItem({
	label: 'Components',
	submenu: componentsMenu
}));

windowMenu.append(new nw.MenuItem({
	label: 'Help',
	submenu: helpMenu
}));

fileMenu.append(new nw.MenuItem({
	label: 'New Project',
	click: function() {
		if (projectName == "" || confirm("Changes may not be saved for your current project. Are you sure you would like to continue?"))
			createNewProjectDialog();
	}
}));

fileMenu.append(new nw.MenuItem({
	label: 'Open Project',
	click: function() {
		if (projectName == "" || confirm("Changes may not be saved for your current project. Are you sure you would like to continue?"))
			openProjectDialog();
	}
}));

fileMenu.append(new nw.MenuItem({
	label: 'Save Project',
	click: function() {
		alert("Your project has successfully been saved!\n(Not really because there is nothing to save!)")
	}
}));

fileMenu.append(new nw.MenuItem({
	type: 'separator'
}));

fileMenu.append(new nw.MenuItem({
	label: 'Delete Project',
	click: function() {
		if (projectName == "")
			alert("You do not have any projects open at the moment!\nPlease open a project first and then delete it.")
		else
			deleteProject()
	}
}));

prefabsMenu.append(new nw.MenuItem({
	label: 'Create Prefab',
	click: function() {
		if (projectName == "")
			alert("Don't be stupid, you need to be in a project to do this!");
		else
			alert("Not yet implemented!");
	}
}));

componentsMenu.append(new nw.MenuItem({
	label: 'Create Component Type',
	click: function() {
		alert("Soon!");
	}
}));

helpMenu.append(new nw.MenuItem({
	label: 'About',
	click: function() {
		alert("JSUnity is a web-based version of Unity allowing you to create games for the web using javascript and gui interface.\n\n(c) David Callanan 2017+")
	}	
}));

win.menu = windowMenu;

// Initial title

setTitle("");

// Some global functions

function getDirectories (srcpath)
{
  return fs.readdirSync(srcpath)
    .filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory())
}

function setTitle(title)
{
	var appName = "Jsu";
	document.title = (title == "" ? "" : title + " - ") + appName;
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}