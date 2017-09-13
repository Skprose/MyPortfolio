
console.log('inside javascript');


        var database = firebase.database();
        var gl_counter = 0;
        var gl_hours = "5";
        var gl_ampm = "am";
        var gl_freq = "10";
        var gl_mins = "15";

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
          $("#disp-mins-away").val("");
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
              frequency : tfreq,
              dateadded: firebase.database.ServerValue.TIMESTAMP
            });
            clearall();
  });
  $("#disp-calc").on("click",function(){
            var getit = [];
            getit = nxttrain(gl_hours,gl_mins,gl_ampm,gl_freq);
            console.log('this is string',str);
            $("#disp-next-train").val(str[0]);
            $("disp-mins-away").val(str[1]);
  });
// changes in inpu
$("#input-train-frequency").on("change",function()
{
        console.log("inside input change");
        gl_freq = this.value;
        console.log('frequency'+gl_freq);
        var str = nxttrain(gl_hours,gl_mins,gl_ampm,gl_freq);
        console.log('this is string',str);
        $("#disp-next-train").val(str[0]);
        $("disp-mins-away").val(str[1]);
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
function nxttrain(phours,pmins,pfreq)
{
                    var time1 =moment();
                    var today_date = moment().get('date');
                    var today_month = moment().get('month');
                    var today_year = moment().get('year');
                    var today_hours = moment().get('hours');
                    var today_minute = moment().get('minute');
                    var stmins;
                    var sthours;
                    var temphour = parseInt(phours);
                    var tempmins = parseInt(pmins);
                    var tmintoadd = parseInt(pfreq);
                    var away;
                    var results ;
                    var time2 = moment(new Date(today_year,today_month,today_date,temphour,tempmins,00));
                    console.log('today hour : today minute',today_hours+" : "+today_minute);
                   //  console.log('time 1 :',time1);
                   //  console.log('time 2:',time2);
                   //console.log('time 2.hour()',time2.hours());
                   //  console.log('time add hours',time2.add(1,'hours'));
                   if ( temphour > today_hours)
                   {
                     stmins = tempmins;
                     sthours = temphour
                     time2 = moment(new Date(today_year,today_month,today_date,sthours,stmins,00));
                     away = moment(time2).diff(time1,"minute");
                     results[0] = sthours+":"+stmins;
                     results[1] = away;
                     return(results);
                   }
                   else if (  (temphour === today_hours) && ( (tempmins+tmintoadd) < today_minute) )
                   {
                          tempmins = tempmins + tmintoadd;
                          stmins = tempmins;
                          sthours = temphour;
                          away = stmins - today_minute;
                          time2 = moment(new Date(today_year,today_month,today_date,sthours,stmins,00));
                          results[0] = sthours+":"+stmins;
                          results[1] = away;
                          return(results);
                   }
                   if (temphour < today_hours)
                   {

                              while ((temphour < today_hours))
                              {

                                 console.log('time2 in loop');

                                 console.log('In While :'+'temphour '+ temphour + 'tempmins'+tempmins);

                                 tempmins = tempmins + tmintoadd;
                                 //console.log('minutes addition'+tempmins+':::'+tmintoadd);

                                 if ( tempmins > 59)
                                 {
                                   temphour++;
                                   tempmins = tempmins - 60;
                                   //console.log('if part time :'+temphour+":"+tempmins);
                                 }
                                 else if(tempmins === 60)
                                 {
                                   temphour++
                                   tempmins = 00;
                                   //console.log('else part time :'+temphour+":"+tempmins);
                                 }

                                 if(temphour <= today_hours)
                                 {
                                    stmins = tempmins;
                                    sthours = temphour;
                                 }
                                 console.log('stmins and sthours : '+stmins+" : "+sthours);
                                 time2 = moment(new Date(today_year,today_month,today_date,sthours,stmins,00));
                                 away = moment(time2).diff(time1,"minute");
                                 results[0] = sthours+":"+stmins;
                                 results[1] = away;
                                 return(results);
                              }
                       }

                       else if ((temphour === today_hours) && (tempmins > today_minute))
                        {
                          away = tempmins - today_minute;
                          results[0] = sthours+" : "+stmins;
                          results[1] = away;
                          return(results);
                       }
  } // end of function nxttrain




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

              var ttime = ttimehour +":"+ttimeminu ;
              var tfreq = snapshot.val().frequency;
              var tkey = snapshot.val().key;
              console.log('key',tkey);
              var str = [];
              //var str = nxttrain(10,20,'am',30);
              str = nxttrain(ttimehour,ttimeminu,tfreq);
              var insertstr =
              `<tr uid = 'row${gl_counter}' class = "tr_rec"'><td  class = 'row${gl_counter}'>${tname}
              </td><td  uid = 'row${gl_counter}'>${tdest}
              </td><td uid = 'row${gl_counter}'>${ttime}
              </td><td uid = 'row${gl_counter}'>${tfreq}
              </td><td  uid = 'row${gl_counter}'>${str[0]}
              </td><td  uid = 'row${gl_counter}'>${str[1]}
              </td><td><button uid = 'row${gl_counter}'  class = "btn btn-warning btn-md" class = "update-button">Update</button>
              </td><td><button uid = 'row${gl_counter}' class = "btn btn-danger btn-md" class = "delete-button">Delete</button>
              </td></tr>`;
              console.log('adding item is insertstr',insertstr);
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
