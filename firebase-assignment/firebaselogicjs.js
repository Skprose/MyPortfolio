
console.log('inside javascript');


        var database = firebase.database();
//Display values on Tables
        database.ref().on("child_added",function(snapshot)
          {
            console.log('Inside database ref call');
            console.log(snapshot.val());
            var lenofstr =  snapshot.val();
            var tname = snapshot.val().trainname;
            var tdest = snapshot.val().traindestination;
            var ttime = snapshot.val().trainnextarrival;
            var tfreq = snapshot.val().minsaway;
            var insertstr =
            `<tr class = "tr_rec"'><td>${tname}
            </td><td>${tdest}
            </td><td>${ttime}
            </td><td>${tfreq}
            </td><td>${tfreq}
            </td><td><button class = "btn btn-warning btn-md" class = "update-button">Update</button>
            </td><td><button class = "btn btn-danger btn-md" class = "delete-button">Delete</button>
            </td></tr>`;
            console.log('the adding item is insertstr',insertstr);
            $("#listoftrainschedule").append(insertstr);
          });
//input validation
        function inputvalidation()
        {
          var tname = $("#input-train-name").val().trim();
          var tdest = $("#input-destination").val().trim();
          var ttime = $("#input-train-time").val().trim();
          var tfreq = $("#input-train-frequency").val().trim();
          moment(ttime).format("LLLL");
          moment().isValid();
        }
//Clear field value
        function clearall()
        {
          $("#input-train-name").val("");
          $("#input-destination").val("");
          $("#input-train-time").val("");
          $("input-train-frequency").val("");
        }
// Adding Train Details
        $("#submit-button").on("click",function()
        {
          event.preventDefault();
          console.log("inside submit button");
          var name = $("#input-train-name").val().trim();
          var destination = $("#input-destination").val().trim();
          var frequency = $("#input-train-time").val().trim();
          var minstoarrive = $("#input-train-frequency").val().trim();
          //inputvalidation(); //Incomplete need ot update
          database.ref().push({
              trainname: name,
              traindestination: destination,
              trainfrequency: frequency,
              trainnextarrival: minstoarrive,
              minsaway: minstoarrive,
             dateadded: firebase.database.ServerValue.TIMESTAMP
            });
            clearall();
        });
