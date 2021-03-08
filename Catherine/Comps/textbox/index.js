function TextboxUI(p="Each sea turtle species uniquely affects the health, diversity, habitat and functionality of its environment") {
  return `
  <p style="
    border-radius:25px;
    font-family:sans-serif;
    font-size:18px;
    font-weight:500;
    width:100vw;
    max-width:300px;
    background-color:white;
    display:flex;
    align-content:center;
    padding:20px;
    overflow-wrap:anywhere;
  "> ${p}
  </p>
  `
}