
console.log('inside javascript');


        var database = firebase.database();
        var gl_counter = 0;
        var gl_hours = "5";
        var gl_ampm = "am";
        var gl_freq = "10";
        var gl_mins = "15";

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
          $("#input-train-time-hours").value = gl_hours;
          $("#input-train-time-minutes").value = gl_mins;
          $("#ampm").value = gl_ampm ;
          $("#input-train-frequency").value = gl_freq;
          $("#disp-next-train").val("");
        }
// Adding Train Details
        $("#submit-button").on("click",function()
        {
          event.preventDefault();
          var name = $("#input-train-name").val().trim();
          var destination = $("#input-destination").val().trim();
          var firsttrainhour = gl_hours;
          var firsttrainmin = gl_mins;
          var firsttrainampm = gl_ampm;
          var tfreq = gl_freq ;
          //add to database
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
// changes in inpu
$("#input-train-frequency").on("change",function()
{
    console.log("inside input change");
    gl_freq = this.value;
      console.log('frequency'+gl_freq);
    var str = nxttrain(gl_hours,gl_mins,gl_ampm,gl_freq);
    console.log('this is string',str);
    $("#disp-next-train").val(str);
});
$("#input-train-time-hours").on("change",function(){
  gl_hours = this.value;
  console.log('gl hour'+gl_hours);
  /*var str = nxttrain(gl_hours,gl_mins,gl_ampm,gl_freq);
  console.log('this is string',str);
  $("#disp-next-train").val(str);*/

});

$("#ampm").on("change",function(){
  gl_ampm = this.value;
  console.log("ampm"+gl_ampm);
/*  var str = nxttrain(gl_hours,gl_mins,gl_ampm,gl_freq);
  console.log('this is string',str);
  $("#disp-next-train").val(str);*/
});

$("#input-train-time-minutes").on("change",function(){
  gl_mins = this.value;
  console.log('gl mins'+gl_mins);
  /*var str = nxttrain(gl_hours,gl_mins,gl_ampm,gl_freq);
  console.log('this is string',str);
  $("#disp-next-train").val(str);*/
});

// next train
function nxttrain(hours,mins,ampm,freq)
        {

              console.log('parameter hour',hours);
               console.log('parameter mins',mins);
                console.log('parameter ampm',ampm);
                 console.log('parameter freqr',freq);
              //now values

                var now =  parseInt(moment().format('LLLL'));
                var vyear = parseInt(moment().get('year'));
                var vdate = parseInt(moment().get('date'));
                var vhour = parseInt(moment().get('hour'));
                var vminute = parseInt(moment().get('minute'));
                var vsecond = parseInt(moment().get('second'));
                 console.log('Now year',vyear)  ;
                 console.log('Now date',vdate)  ;
                 console.log('Now hour',vhour)  ;
                 console.log('Now mins',vminute)  ;
                 console.log('Now secs',vsecond)  ;
                 console.log('Now year',vyear)  ;

              //rows - data values

                var stmins = mins;
                var sthours = hours;
                var tampm = ampm;


                //counting
                var temphour = parseInt(hours);
                var tempmins = parseInt(mins);
                var tempampm = parseInt(ampm);
                var tmintoadd = parseInt(freq);
                if (tempampm === "pm")
                {
                  temphour = temphour+12;
                  console.log('Hour is if',temphour);

                }
                else
                {
                  console.log('Hour is',temphour);
                }



                while((temphour <= vhour) )
                {
                      console.log('In While :'+'temphout '+ temphour + 'tempmins'+tempmins);

                      tempmins = tempmins + tmintoadd;
                      console.log('minutes addition'+tempmins+':::'+tmintoadd);

                      if ( tempmins > 59)
                      {
                        temphour++;
                        tempmins = tempmins - 60;
                        console.log('if part time :'+temphour+":"+tempmins);
                      }
                      else if(tempmins === 60)
                      {
                        temphour++
                        tempmins = 00;
                        console.log('else part time :'+temphour+":"+tempmins);
                        
                      }
                }
                if ( temphour > 24)
                {
                  temphour = temphour - 24;
                  tempampm = "am";
                }
                else if ( temphour > 12)
                {
                  temphour = temphour - 12;
                  tempampm = "pm";
                }
                else {
                  tempampm = "am";
                }
                console.log(temphour+":"+tempmins+tempampm);
              return(temphour+":"+tempmins+tempampm);
        }
// for delete button

  $(".delete-button").on("click",function()
  {
          event.preventDefault();
          var name = $("#input-train-name").val().trim();
          var destination = $("#input-destination").val().trim();
          var firsttrainhour = gl_hours;
          var firsttrainmin = gl_mins;
          var firsttrainampm = gl_ampm;
          var tfreq = gl_freq ;

         database.ref().del({
             trainname: name,
             traindestination: destination,
             firsttrainhour : firsttrainhour,
             firsttrainmin : firsttrainmin,
             firsttrainampm : firsttrainampm,
             frequency : tfreq,

           });
  });



  $(".update-button").on("click",function(){

   });

//Child add - does not give key - display all rows from the database
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
              console.log('key',tkey);
              var str = nxttrain(10,20,'am',30);
            //  var str = nxttrain(ttimehour,ttimeminu,ttimeampm,tfreq);
              var insertstr =
              `<tr uid = 'row${gl_counter}' class = "tr_rec"'><td  class = 'row${gl_counter}'>${tname}
              </td><td  uid = 'row${gl_counter}'>${tdest}
              </td><td uid = 'row${gl_counter}'>${ttime}
              </td><td uid = 'row${gl_counter}'>${tfreq}
              </td><td  uid = 'row${gl_counter}'>${str}
              </td><td><button uid = 'row${gl_counter}'  class = "btn btn-warning btn-md" class = "update-button">Update</button>
              </td><td><button uid = 'row${gl_counter}' class = "btn btn-danger btn-md" class = "delete-button">Delete</button>
              </td></tr>`;
              console.log('e adding item is insertstr',insertstr);
              $("#listoftrainschedule").append(insertstr);
            });

//Child deleted
            /* database.ref().on("child_removed",function(snapshot)
              {

              })*/
              //Display values on Tables
              /*
                      database.ref().on("child",function(snapshot)
                        {
                          console.log('Inside database ref call');
                          console.log(snapshot.val());
                          var content = snapshot.val();
                          var noofrows = content.length;
                          var uniqueid = content.keys;
                          gl_counter++ ;
                          for ( var key in content)
                          {
                                  console.log('global counter :'+gl_counter);
                                  var tname = content[key].trainname;
                                  var tdest = content[key].traindestination;
                                  var ttimehour = content[key].firsttrainhour;
                                  var ttimeminu = content[key].firsttrainmin;
                                  var ttimeampm = content[key].firsttrainampm;
                                  var ttime = ttimehour +":"+ttimeminu +":"+ttimeampm ;
                                  var tfreq = content[key].frequency;
                                  var tkey = content[key].key;
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
                          }
                        });*/
