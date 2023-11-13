function openDialogue() {
    document.getElementById('overlay').style.display = 'flex';
  }
  
  function closeDialogue() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('dialogueInput').value = ''; 
  }