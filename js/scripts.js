schedule = {"Friday": 
		[
	  {
	    "Start": "5:00PM",
	    "End": "7:30PM",
	    "Description": "Doors open for participants",
	    "Location": "Normal Ave"
	  },
	  {
	    "Start": "7:00PM",
	    "End": "8:00PM",
	    "Description": "Waitlist Checkin Opens",
	    "Location": "Lobby"
	  },
	  {
	    "Start": "7:15PM",
	    "End": "8:00PM",
	    "Description": "Opening Ceremonies",
	    "Location": "Main Stage"
	  },
	  {
	    "Start": "8:00PM",
	    "End": "",
	    "Description": "Dinner",
	    "Location": "Hacker Room"
	  },
	  {
	    "Start": "8:00PM",
	    "End": "8:30PM",
	    "Description": "Team Building Event",
	    "Location": "Lobby"
	  },
	  {
	    "Start": "8:30PM",
	    "End": "",
	    "Description": "Hacking Begins",
	    "Location": "Hacker Room"
	  },
	  {
	    "Start": "8:00PM",
	    "End": "11:59PM",
	    "Description": "Hardware Lab",
	    "Location": "Hardware"
	  },
	  {
	    "Start": "9:00PM",
	    "End": "9:30PM",
	    "Description": "Hacking Your First Hackathon",
	    "Location": "Main Stage"
	  },
	  {
	    "Start": "10:00PM",
	    "End": "10:30PM",
	    "Description": "Git Familiar with Version Control",
	    "Location": "Main Stage"
	  },
	  {
	    "Start": "10:45PM",
	    "End": "2:00AM",
	    "Description": "Shower Time",
	    "Location": "Locker Room"
	  }
	],
			"Saturday": [
  {
    "Start": "12:00AM",
    "End": "12:00PM",
    "Description": "Napathon",
    "Location": "Sun Spot"
  },
  {
    "Start": "12:00AM",
    "End": "11:59PM",
    "Description": "Hardware Lab\tHardware",
    "Location": ""
  },
  {
    "Start": "12:00AM",
    "End": "12:45AM",
    "Description": "Paper Airplane Contest\tLobby",
    "Location": ""
  },
  {
    "Start": "1:00AM",
    "End": "2:00AM",
    "Description": "Zero to Hero",
    "Location": "Main Stage"
  },
  {
    "Start": "2:30AM",
    "End": "3:30AM",
    "Description": "Zero to Hero II",
    "Location": "Main Stage"
  },
  {
    "Start": "8:00AM",
    "End": "",
    "Description": "Breakfast",
    "Location": "Main Stage"
  },
  {
    "Start": "8:00AM",
    "End": "9:00AM",
    "Description": "Machine Learning with American Express",
    "Location": ""
  },
  {
    "Start": "9:30AM",
    "End": "10:30AM",
    "Description": "Intro to React + DNS with GoDaddy",
    "Location": "Main Stage"
  },
  {
    "Start": "11:00AM",
    "End": "12:00PM",
    "Description": "REST APIs with State Farm",
    "Location": "Main Stage"
  },
  {
    "Start": "12:00PM",
    "End": "",
    "Description": "Lunch",
    "Location": "Main Stage"
  },
  {
    "Start": "1:00PM",
    "End": "2:00PM",
    "Description": "sunhacks.add(you)",
    "Location": "Main Stage"
  },
  {
    "Start": "2:30PM",
    "End": "3:30PM",
    "Description": "But why AR/VR?",
    "Location": "Main Stage"
  },
  {
    "Start": "3:30PM",
    "End": "4:30PM",
    "Description": "WiCS Coffee Hour",
    "Location": "Sun Spot"
  },
  {
    "Start": "5:00PM",
    "End": "6:00PM",
    "Description": "The Importance of Soft Skills & Interdisciplinary Tech",
    "Location": "Main Stage"
  },
  {
    "Start": "7:00PM",
    "End": "",
    "Description": "Dinner",
    "Location": "Main Stage"
  },
  {
    "Start": "8:00PM",
    "End": "9:00PM",
    "Description": "Deep Learning",
    "Location": "Main Stage"
  },
  {
    "Start": "9:30PM",
    "End": "10:30PM",
    "Description": "Slideshow Karaoke",
    "Location": ""
  },
  {
    "Start": "11:00PM",
    "End": "2:45AM",
    "Description": "Shower Time",
    "Location": "Locker Room"
  }
],
			"Sunday": [
  {
    "Start": "12:00AM",
    "End": "7:00AM",
    "Description": "Napathon",
    "Location": "Sun Spot"
  },
  {
    "Start": "12:00AM",
    "End": "12:30AM",
    "Description": "Putting Your Dev' in Devpost",
    "Location": "Main Stage"
  },
  {
    "Start": "1:00AM",
    "End": "2:00AM",
    "Description": "JS/MS Paint with Bob Ross",
    "Location": "Main Stage"
  },
  {
    "Start": "7:00AM",
    "End": "",
    "Description": "Hardware Lab Closes",
    "Location": "Hardware"
  },
  {
    "Start": "7:30AM",
    "End": "",
    "Description": "Devposts Submissions due",
    "Location": "Hacker Room"
  },
  {
    "Start": "8:00AM",
    "End": "",
    "Description": "Breakfast",
    "Location": "Main Stage"
  },
  {
    "Start": "8:00AM",
    "End": "",
    "Description": "Hacking End.",
    "Location": "Hacker Room"
  },
  {
    "Start": "8:00AM",
    "End": "9:00AM",
    "Description": "Set up for demos",
    "Location": "Hacker Room"
  },
  {
    "Start": "9:00AM",
    "End": "11:00AM",
    "Description": "Judging",
    "Location": "Hacker Room"
  },
  {
    "Start": "11:00AM",
    "End": "11:30AM",
    "Description": "Return items to Hardware Lab",
    "Location": "Hardware"
  },
  {
    "Start": "11:30AM",
    "End": "12:15PM",
    "Description": "Closing Ceremonies",
    "Location": "Main Stage"
  },
  {
    "Start": "1:30PM",
    "End": "",
    "Description": "Hardware Lab items due.",
    "Location": ""
  }
]}

var divContainer = document.getElementById("scheduleTable");
divContainer.innerHTML = "";
var col = [];
for (var i = 0; i < schedule["Friday"].length; i++) {
    for (var key in schedule["Friday"][i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}

var table = document.createElement("table");
var tr = table.insertRow(-1);
var th = document.createElement("th");
th.innerHTML = "Day";
tr.appendChild(th);
for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
}
for(day in schedule){
	for (var i = 0; i < schedule[day].length; i++) {

	    tr = table.insertRow(-1);
		var tabCell = tr.insertCell(-1);
		tabCell.innerHTML = day;
	    for (var j = 0; j < col.length; j++) {
	        tabCell = tr.insertCell(-1);
	        tabCell.innerHTML = schedule[day][i][col[j]];
	    }
	}

	divContainer.appendChild(table);
}

document.getElementById("defaultOpen").click();


function switchTabs(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
