function toggleMode(checkedId, uncheckedId) {
  const checkedCheckbox = document.getElementById(checkedId);
  const uncheckedCheckbox = document.getElementById(uncheckedId);

  if (checkedCheckbox.checked) {
    uncheckedCheckbox.checked = false;
    console.log(checkedId + ' clicked!');
  } else {
    console.log(checkedId + ' unclicked!');
  }

  toggleModes();
}

function toggleModes() {
  const scheduleModeCheckbox = document.getElementById('ScheduleMode');
  const manualModeCheckbox = document.getElementById('ManualMode');
  const schedualDiv = document.getElementById('schedualDiv');
  const manualDiv = document.getElementById('manualDiv');
  const ManualBoxSpeed = document.getElementById('box_Mspeed');

  if (scheduleModeCheckbox.checked) {
    schedualDiv.classList.remove('hidden');
    manualDiv.classList.add('hidden');
    ManualBoxSpeed.innerText = '';
    ManualBoxSpeed.disabled = true;

    document.getElementById('box_Mspeed').textContent = '';
    
    console.log('Hello');

  } 
  else if (manualModeCheckbox.checked){
    schedualDiv.classList.add('hidden');
    manualDiv.classList.remove('hidden');
    ManualBoxSpeed.disabled = false;
    console.log('Hi');
  }
}



