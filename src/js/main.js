var projectName;
var projectDir;

function main()
{

}

function showScreen(name)
{
	Array.prototype.forEach.call(document.querySelectorAll(".screen"), screen => {
		screen.classList.remove("visible");
	});
	document.querySelector("."+name).classList.add("visible");
}

function unloadCurrentProject()
{
	projectName = "";
	projectDir = "./projects/FDSGRDSGFDSGFDSGFDS";
}

function resetNewProjectDialog()
{
	projectNameElement.value = "";
}

function createNewProjectDialog()
{
	unloadCurrentProject();
	resetNewProjectDialog();
	showScreen("new");
}

function createProject()
{
	projectName = projectNameElement.value;
	projectDir = './projects/' + projectName;

	if (fs.existsSync(projectDir))
	{
		alert("Error has occured creating your project!\n\nA project with the same name already exists.\nOpen that project and delete it first.");
		return;
	}

	mkdirp(projectDir + "/web", err => {

		if (err)
		{
			alert("Error has occured creating your project!\n\nTry figure this one out yourself.");
		}
		else
		{
			// do other stuff
			showScreen("project");
		}
	});
}

function resetOpenProjectDialog()
{
	openProjectList.innerHTML = "";

}

function openProjectDialog()
{
	unloadCurrentProject();
	resetOpenProjectDialog();
	showScreen("open");

	var dirs = getDirectories('./projects');

	dirs.forEach(dir => {
		var button = document.createElement("button");
		button.innerText = dir;
		button.onclick = function()
		{
			loadProject(dir);
		}
		openProjectList.appendChild(button);
		openProjectList.appendChild(document.createElement("br"));
	});
}

function loadProject(name)
{
	projectName = name;
	projectDir = './projects/' + name;
	showScreen("project");
}

function deleteProject()
{
	if (confirm("Are you sure you would like to delete this project?"))
		if (confirm("Be honest, are you really sure?\nThis is your last chance!\n\n")) {
			showScreen("start");
			rimraf(projectDir, function() {});
		}
}