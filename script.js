// Write your JavaScript code here!
window.addEventListener("load",function(){
   
   let form = document.querySelector("#launchForm");
   form.addEventListener("submit",function(event){
      let pilotNameInput= document.querySelector("input[name=pilotName]").value;
      let coPilotInput= document.querySelector("input[name=copilotName]").value;
      let fuelInput= document.querySelector("input[name=fuelLevel]").value;
      let massInput=document.querySelector("input[name=cargoMass]").value;
      if (pilotNameInput==="" || coPilotInput===""||fuelInput ===""||massInput ===""){
      alert("All fields are required");
      }
      if(isNaN(pilotNameInput)===false){
         alert("Name must only contain letters");
      } 
      if(isNaN(coPilotInput)===false){
      alert("Name must only contain letters");
    }
     if(isNaN(fuelInput)===true){
      alert("Fuel level must be a number");
     } 
     if(isNaN(massInput)===true){
         alert("Mass must be a number");
     }
      
      event.preventDefault();
   });
  
   
   let button = document.getElementById("formSubmit");
   
   button.addEventListener("click", function(event){
      let fuelInput= document.querySelector("input[name=fuelLevel]").value;
      let fuel = document.getElementById("fuelStatus")
      let massInput=document.querySelector("input[name=cargoMass]").value;
      let mass = document.getElementById("cargoStatus")
      let pilotNameInput=document.querySelector("input[name=pilotName]").value;
      let coPilotInput= document.querySelector("input[name=copilotName]").value;
      let pName= document.getElementById("pilotStatus");
      let pilot=pName.innerHTML = ` Pilot ${pilotNameInput} is ready for launch.` 
      let cName = document.getElementById("copilotStatus");
      let launchStatus= document.getElementById("launchStatus");
      let coPilot= cName.innerHTML=`Co-Pilot ${coPilotInput} is ready for launch.`
    faulty= document.getElementById("faultyItems").style.visibility="hidden";
    if (fuelInput < 10000){
       let fuel1 = fuel.innerHTML=`Fuel too low for launch.`
       let launch = launchStatus.innerHTML=`Shuttle Not Ready for Launch`
       launchStatus.style.color="red";
       faulty =document.getElementById("faultyItems").style.visibility="visible"
    }
    if (massInput>10000){
    let mass1= mass.innerHTML=`Cargo mass too high for launch.`
    faulty =document.getElementById("faultyItems").style.visibility="visible"
    }
   });
  


// This block of code shows how to format the HTML once you fetch some planetary JSON!
let formSubmit= document.getElementById("formSubmit");
formSubmit.addEventListener("click", function() {
   let json = [];
   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
      response.json().then(function(json) {
         missionTarget.innerHTML = `
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[2].name}</li>
   <li>Diameter: ${json[2].diameter}</li>
   <li>Star: ${json[2].star}</li>
   <li>Distance from Earth: ${json[2].distance}</li>
   <li>Number of Moons: ${json[2].moons}</li>
</ol>
<img src="${json[2].image}">`
      });
   });
   event.preventDefault();
});
event.preventDefault();
});

