document.getElementById("nameForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page refresh
    const name = document.getElementById("nameInput").value;
    if (name.trim() === "") {
      alert("Please enter a name!");
    } else {
      alert("Hello, " + name + "!");
    }
  });
  
