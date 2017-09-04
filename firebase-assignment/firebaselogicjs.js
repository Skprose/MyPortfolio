
console.log('inside javascript');


        var database = firebase.database();
        var gl_counter = 0;
//Display values on Tables
        database.ref().on("child_added",function(snapshot)
          {
            console.log('Inside database ref call');
            console.log(snapshot.val());
            gl_counter++ ;
            var lenofstr =  snapshot.val();
            console.log('global counter :'+gl_counter);
            var tname = snapshot.val().trainname;
            var tdest = snapshot.val().traindestination;
            var ttimehour = snapshot.val().firsttrainhour;
            var ttimeminu = snapshot.val().firsttrainmin;
            var ttimeampm = snapshot.val().firsttrainampm;
            var ttime = ttimehour +":"+ttimeminu +":"+ttimeampm ;
            var tfreq = snapshot.val().frequency;
            var tkey = snapshot.val().key;
            var insertstr =
            `<tr class = 'row${gl_counter}' class = "tr_rec"'><td  class = 'row${gl_counter}'>${tname}
            </td><td  class = 'row${gl_counter}'>${tdest}
            </td><td class = 'row${gl_counter}'>${ttime}
            </td><td class = 'row${gl_counter}'>${tfreq}
            </td><td  class = 'row${gl_counter}'>${tfreq}
            </td><td><button class = 'row${gl_counter}'  class = "btn btn-warning btn-md" class = "update-button">Update</button>
            </td><td><button class = 'row${gl_counter}' class = "btn btn-danger btn-md" class = "delete-button">Delete</button>
            </td></tr>`;
            console.log('the adding item is insertstr',insertstr);
            $("#listoftrainschedule").append(insertstr);
          });
//Looping thru to get the key values

//Next Train Calculation
            function nxttrain()
            {
              var now =  moment();
              console.log('Now is: '+now);

            }
//input validation
        function inputvalidation()
        {
          var tname = $("#input-train-name").val().trim();
          var tdest = $("#input-destination").val().trim();
          var ttime = $("#input-train-time-hours").value;
          var ttimemin = $("#input-train-time-minutes").val().trim();
          var ampm = $("#ampm").value;
          var tfreq = $("#input-train-frequency").value;
          moment(ttime).format("LLLL");
          moment().isValid();
        }
//Clear field value
        function clearall()
        {
          $("#input-train-name").val("");
          $("#input-destination").val("");
          $("#input-train-time-hours").value = "1";
          $("#input-train-time-minutes").val("");
          $("#ampm").value("am");
          $("#input-train-frequency").value = "5";
        }
// Adding Train Details
        $("#submit-button").on("click",function()
        {
          event.preventDefault();
          console.log("inside submit button");
          var name = $("#input-train-name").val().trim();
          var destination = $("#input-destination").val().trim();
          var firsttrainhour = $("#input-train-time-hours").value;
          var firsttrainmin = $("#input-train-time-minutes").val().trim();
          var firsttrainampm = $("#ampm").value;
          var tfreq = $("#input-train-frequency").value;
          //inputvalidation(); //Incomplete need ot update
          database.ref().push({
              trainname: name,
              traindestination: destination,
              firsttrainhour : firsttrainhour,
              firsttrainmin : firsttrainmin,
              firsttrainampm : firsttrainampm,
               frequency : tfreq,
              dateadded: firebase.database.ServerValue.TIMESTAMP
            });
            clearall();
        });
  // for the update button

  $(".delete-button").on("click",function(){

  });

// for delete button
  $(".update-button").on("click",function(){

});
