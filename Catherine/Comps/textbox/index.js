function TextboxUI(
  width="300",
  p="Each sea turtle species uniquely affects the health, diversity, habitat and functionality of its environment") {
  return `
  <p style="
    border-radius:25px;
    font-family:sans-serif;
    font-size:18px;
    font-weight:500;
    width:300px;
    max-width:${width}px;
    background-color:white;
    display:flex;
    align-content:center;
    padding:20px;
    margin:5px;
    overflow-wrap:anywhere;
  "> ${p}
  </p>
  `
}

function TextboxUIlist(
  one="1. Slaughtered by poachers.",
  two="2. Pollution from humans make their homes inhabitable.",
  three="3. Warmer sand temperatures produce more female hatchlings."
  ) {
  return `
  <p style="
    border-radius:25px;
    font-family:sans-serif;
    font-size:18px;
    font-weight:500;
    width:300px;
    max-width:300px;
    background-color:white;
    display:flex;
    align-content:center;
    padding:20px;
    overflow-wrap:anywhere;
    z-index:1;
  "> ${one}<br>${two}<br>${three}
  </p>
  `
}