var destinations = [];
var destinationId;
function validateName() {
	let name = document.getElementById("name");
	let error = document.getElementById("nameError");
	if (name.value == "") {
		error.innerHTML = "Name is required";
		return false;
	} else {
		error.innerHTML = "";
		return true;
	}
}

function validateAccountability() {
	let accountability = document.getElementById("accountability");
	let error = document.getElementById("accountabilityError");
	if (accountability.value == "") {
		error.innerHTML = "Accountability is required";
		return false;
	} else {
		error.innerHTML = "";
		return true;
	}
}

function validateLicense() {
    let accountability = document.getElementById("license");
	let error = document.getElementById("licenseError");
	if (accountability.value == "") {
		error.innerHTML = "License is required";
		return false;
	} else {
		error.innerHTML = "";
		return true;
	}
}

function validateOffice() {
	let office = document.getElementById("office");
	let error = document.getElementById("officeError");
	if (office.value == "") {
		error.innerHTML = "office is required";
		return false;
	} else {
		error.innerHTML = "";
		return true;
	}
}

function validateTop (){
    
    if (
		document.getElementById("yes").checked == true ||
		document.getElementById("no").checked == true ||
		document.getElementById("gg").checked == true
	) {
		document.getElementById("topError").innerHTML = "";
		return true;
	} else {
		document.getElementById("topError").innerHTML =
			"Required";
		return false;
	}
}

function validateGroup () {
    let group = document.getElementById("group");
	let error = document.getElementById("groupError");
	if (group.value == "") {
		error.innerHTML = "required";
		return false;
	} else {
		error.innerHTML = "";
		return true;
	}

}

function validateObjectives () {
    let objectives = document.getElementById("objectives");
	let error = document.getElementById("objectivesError");
	if (objectives.value == "") {
		error.innerHTML = "required";
		return false;
	} else {
		error.innerHTML = "";
		return true;
	}
}

function validateSessions () {
    let sessions = document.getElementById("sessions");
	let error = document.getElementById("sessionsError");
	if (sessions.value == "") {
		error.innerHTML = "required";
		return false;
	} else {
		error.innerHTML = "";
		return true;
	}
}

function validateRoadmap () {
    let roadmap = document.getElementById("roadmap");
	let error = document.getElementById("roadmapError");
	if (roadmap.value == "") {
		error.innerHTML = "required";
		return false;
	} else {
		error.innerHTML = "";
		return true;
	}
}

function validateExperience() {
    let experience = document.getElementById("experience");
	let error = document.getElementById("experienceError");
	if (experience.value == "") {
		error.innerHTML = "required";
		return false;
	} else {
		error.innerHTML = "";
		return true;
	}
}

function fullValidation() {
    var errorCount = 0;
    if(!validateName()) {
        errorCount++;
    }
    if(!validateAccountability()) {
        errorCount++;
    }
    if(!validateLicense()) {
        errorCount++;
    }
    if(!validateOffice()) {
        errorCount++;
    }
    if(!validateTop()) {
        errorCount++;
    }
    if(!validateGroup()) {
        errorCount++;
    }
    if(!validateObjectives()) {
        errorCount++;
    }
    if(!validateSessions()) {
        errorCount++;
    }
    
    if(!validateRoadmap()) {
        errorCount++;
    }
    if(!validateExperience()) {
        errorCount++;
    }

    if (errorCount > 0) {
        return false;
    }
    return true;
}


function readDestinationInfo() {
	let name = document.getElementById("name").value;
	let accountability = document.getElementById("accountability").value;
	let license = document.getElementById("license").value;
	let office = document.getElementById("office").value;
	let group = document.getElementById("group").value;
	let objectives = document.getElementById("objectives").value;
	let sessions = document.getElementById("sessions").value;
	let roadmap = document.getElementById("roadmap").value;
	let top = "";
    let coach = "";
	let experience = document.getElementById("experience").value;
	let story = document.getElementById("story").value;
    let add = document.getElementById("add").value;
    let committed = document.getElementById("committed").value;
    let takeaway = document.getElementById("takeaway").value;



	let topElements = document.getElementsByName("top");
    let coachElements = document.getElementsByName("coach");
	
	for (var i = 0; i < topElements.length; i++) {
		if (topElements[i].checked) {
			top = topElements[i].nextElementSibling.innerText;
		}
	}

    for (var i = 0; i < coachElements.length; i++) {
		if (coachElements[i].checked) {
			coach = coachElements[i].nextElementSibling.innerText;
		}
	}

	var destinationInfo = {
		Id: destinations.length + 1,
		name: name,
		accountability: accountability,
		license: license,
		office: office,
		group: group,
		objectives: objectives,
		sessions: sessions,
		roadmap: roadmap,
		top: top,
		coach: coach,
		experience: experience,
        story:story,
        add:add,
        committed:committed,
        takeaway:takeaway
	};

	return destinationInfo;
}

function storeDestinationInfo() {
	destinations.push(readDestinationInfo());
}

function submitForm() {
	if (fullValidation()) { //validate the form
		if (
			document.getElementById("submitbtn").innerHTML.toLocaleLowerCase() ==
			"update"
		) {
			let destinationinfo = readDestinationInfo();
			let destinationindex = destinations.findIndex(
				(destination) => destination.Id == destinationId
			);

			destinations[destinationindex].name = destinationinfo.name;
			destinations[destinationindex].accounataility = destinationinfo.accountability;
			destinations[destinationindex].license = destinationinfo.license;
			destinations[destinationindex].office = destinationinfo.office;
			destinations[destinationindex].group = destinationinfo.group;
			destinations[destinationindex].objectives = destinationinfo.objectives;
			destinations[destinationindex].sessions = destinationinfo.sessions;
			destinations[destinationindex].roadmap = destinationinfo.roadmap;
			destinations[destinationindex].experience = destinationinfo.experience;
			destinations[destinationindex].story = destinationinfo.story;
			destinations[destinationindex].add = destinationinfo.add;
            destinations[destinationindex].committed = destinationinfo.committed;
            destinations[destinationindex].takeaway = destinationinfo.takeaway;
            destinations[destinationindex].top = destinationinfo.top;
            destinations[destinationindex].coach = destinationinfo.coach;
            
		}
		//Save action
		else {
			storeDestinationInfo();
		}
         //store the data into global variable
        generateGrid();
        clearForm();
        showGrid();
}
}

function generateGrid() {

    //Clear the table body before forming the table structure
    document.getElementById("tableBody").innerText = "";

    for (var i = 0; i < destinations.length; i++) {
        // Create the dynamic tr,td and append every td in tr and tr in tbody
        let trow = document.createElement("tr");
        trow.className = "color";
        let id = document.createElement("td");
        id.className = "table";
        let name = document.createElement("td");
        name.className = "table";
        let accountability = document.createElement("td");
        accountability.className = "table";
        let license = document.createElement("td");
        license.className = "table";
        let office = document.createElement("td");
        office.className = "table";
        let top = document.createElement("td");
        top.className = "table";
        let coach = document.createElement("td");
        coach.className = "table";
	    let edit = document.createElement("td")
        edit.className = "table";
        let deleteData = document.createElement("td")
        deleteData.className = "table";

        // append the values in each resp. field in resp. cell
        id.innerHTML = `<a  onclick='viewForm(this)'>${destinations[i].Id}</a>`;
        name.innerHTML = destinations[i].name;
        accountability.innerHTML = destinations[i]. accountability ;
        license.innerHTML = destinations[i].license;
        office.innerHTML = destinations[i].office;
        top.innerHTML = destinations[i].top;
        coach.innerHTML = destinations[i].coach;        
        edit.innerHTML = "<a  onclick='editForm(this)'>Edit</a>";
        deleteData.innerHTML = "<a  onclick='deleteDestination(this)'>Delete</a>";


        trow.appendChild(id);
        trow.appendChild(name);
        trow.appendChild(accountability);
        trow.appendChild(license);
        trow.appendChild(office);
        trow.appendChild(top);
        trow.appendChild(coach);
        trow.appendChild(edit);
        trow.appendChild(deleteData);

        //appending a table row in table body
        document.getElementById("tableBody").appendChild(trow);
    }

}

function showForm() {
    document.getElementById("formToGrid").style.display = "block";
    document.getElementById("gridToForm").style.display = "none";
}

function showGrid() {
    document.getElementById("formToGrid").style.display = "none";
    document.getElementById("gridToForm").style.display = "block";
}

function clearForm() {
	document.getElementById("name").value = "";
	document.getElementById("accountability").value = "";
	document.getElementById("license").value = "";
	document.getElementById("office").value = "";
	document.getElementById("group").value = "";
	document.getElementById("objectives").value = "";
	document.getElementById("sessions").value = "";
	document.getElementById("roadmap").value = "";
	document.getElementById("experience").value = "";
	document.getElementById("story").value = "";
	document.getElementById("add").value = "";
	document.getElementById("committed").value = "";
	document.getElementById("takeaway").value = "";

	//clearing error messages
	document.getElementById("nameError").innerHTML = "";
	document.getElementById("accountabilityError").innerHTML = "";
	document.getElementById("licenseError").innerHTML = "";
	document.getElementById("officeError").innerHTML = "";
	document.getElementById("topError").innerHTML = "";
	document.getElementById("groupError").innerHTML = "";
	document.getElementById("objectivesError").innerHTML = "";
	document.getElementById("sessionsError").innerHTML = "";
	document.getElementById("roadmapError").innerHTML = "";
	document.getElementById("experienceError").innerHTML = "";
}


function addDestinate() {
	clearForm(); // to clear the form
	document.getElementById("submitbtn").innerHTML = "Submit";
	showForm(); // to show the form to user
}

function editForm(obj) {
	var edit = obj.closest("tr");
	destinationId = parseInt(edit.cells[0].innerText);
	let destination = findDestination(destinationId);
	prefillForm(destination);
	document.getElementById("submitbtn").innerHTML = "Update";
	showForm(); //form is displayed
}

function findDestination(destinationId) {
	return destinations.find((destination) => destination.Id == destinationId);
}

function prefillForm(destinationInfo) {
	document.getElementById("name").value = destinationInfo.name;
	document.getElementById("accountability").value = destinationInfo.accountability;
	document.getElementById("license").value = destinationInfo.license;
    document.getElementById("office").value = destinationInfo.office;
	document.getElementById("group").value = destinationInfo.group;
	document.getElementById("objectives").value = destinationInfo.objectives;
	document.getElementById("sessions").value = destinationInfo.sessions;
	document.getElementById("roadmap").value = destinationInfo.roadmap;
	document.getElementById("experience").value = destinationInfo.experience;
	document.getElementById("add").value = destinationInfo.add;
    document.getElementById("committed").value = destinationInfo.committed;
    document.getElementById("takeaway").value = destinationInfo.takeaway;
    

    switch (destinationInfo.top.toLowerCase()) {
		case "yes":
			document.getElementById("yes").checked = true;
			break;
		case "no":
			document.getElementById("no").checked = true;
			break;
		case "gg":
			document.getElementById("gg").checked = true;
			break;
	}

    switch (destinationInfo.top.toLowerCase()) {
		case "one":
			document.getElementById("yes").checked = true;
			break;
		case "two":
			document.getElementById("no").checked = true;
			break;
		case "three":
			document.getElementById("gg").checked = true;
			break;
        case "four":
            document.getElementById("gg").checked = true;
            break;
        case "five":
            document.getElementById("gg").checked = true;
            break;
        case "six":
            document.getElementById("gg").checked = true;
            break;
        case "seven":
            document.getElementById("gg").checked = true;
            break;
        case "eight":
            document.getElementById("gg").checked = true;
            break;
        case "nine":
            document.getElementById("gg").checked = true;
            break;
        case "ten":
            document.getElementById("gg").checked = true;
            break;
	}

}

function deleteDestination(destinationobj) {
    var deleterow = destinationobj.closest("tr");//Finding the CandidateId
    let deldestinationId = parseInt(deleterow.cells[0].innerText);
    if (confirm("Are you sure you want to delete this Data?")) {
        let destinationindex = destinations.findIndex(destination => destination.Id == deldestinationId);
        destinations.splice(destinationindex, 1);// Removing the reord
        destinations.forEach((destination, index) => {
            destination.Id = index + 1;//Displaying the rest of the Record
        });
    }
    generateGrid();//Forming the Grid
}

