function generateAssignments() {
    var participants = document.getElementById("participants").value.split("\n");

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      shuffle(participants);

    var assignments = {};
    for (var i = 0; i < participants.length; i++) {
      var giver = participants[i];
      var receiver = participants[(i + 1) % participants.length];
      assignments[giver] = receiver;
    }
    var assignmentsText = "";
    for (var giver in assignments) {
      assignmentsText += giver + " is assigned to give a gift to " + assignments[giver] + "<br>";
    }
    document.getElementById("assignments").innerHTML = assignmentsText;
  }
  