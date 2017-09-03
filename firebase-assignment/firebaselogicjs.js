


        // Initialize Firebase
        var config = {
         apiKey: "AIzaSyD3USkz89ss_ersK00EnqnxWlbyswzabM0",
         authDomain: "trainschedule-aa9c7.firebaseapp.com",
         databaseURL: "https://trainschedule-aa9c7.firebaseio.com",
         projectId: "trainschedule-aa9c7",
         storageBucket: "",
         messagingSenderId: "1024576495782"
        };
        firebase.initializeApp(config);

        var database = firebase.database();

        database.ref().on("child_added",function(snapshot)
          {
            console.log(snapshot.val());
          });




        $("#submit-button").on("click",function()
        {
          database.ref().push({
              trainname: name,
              traindestination: destination,
              trainfrequency: frequency,
              trainnextarrival: arrival,
              minsaway: minstoarrive,
             dateadded: firebase.database.ServerValue.TIMESTAMP
            });
        });
