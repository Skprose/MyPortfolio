
//global Variables
var gl_items = ['Ganapati','Fire works','Stars','Programming','Peacocks','Flammmingo'];

var gl_searchfor = [];


//dynamically add form elements
function dynamicadd()
{
        for ( var i =0; i < gl_items.length ; i++)
        {

          var  additem = (`<input id = "${i}option"
          class = "optionvalue" name ="name${i}"
          type = "radio"
          value = "${gl_items[i]}" > ${gl_items[i]}<br />`);
          $("#First-form").append(additem);
        }

}

$("#getit").on("click",function(event){
           event.preventDefault() ;
           var inputtext = $("#search").val().trim();
           console.log("the input text is"+inputtext)
           var l = gl_items.length ;
           gl_items[l]= inputtext;
           var  additem = (`<input id = "${l}option"
           class = "optionvalue" name ="name${l}"
           type = "radio"
           value = "${gl_items[l]}" > ${gl_items[l]}<br />`);
           //divele.append(string);
             $("#First-form").append(additem);
             $("#search").val("") ;
});
function callapigifvid(searchstr)
{
      //Api call
          var querstr1 = "http://api.giphy.com/v1/gifs/search?api_key=01f8ebd24dd04b98b407dd4b30d3443e" ;
          var noofgifs = 25;
          var var_rating = "G"; // need to improvize having a drop down input
            var querstr2 = "&q="+ searchstr +"&limit="+noofgifs+"&offset=0&rating=G&lang=en";
            //var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=01f8ebd24dd04b98b407dd4b30d3443e&q=stars&limit=25&offset=0&rating=G&lang=en";
            var queryURL = querstr1 + querstr2 ;
            console.log(querstr1+querstr2);
            $("#vfiles").html("");

            $.ajax({
              url : queryURL ,
              method: "GET"
            }).done(function(response){
              console.log(response);
              var img_array = response.data;
              var len = img_array.length;

              console.log('length',len);
              console.log('res data',response.data);
              for( var i =0; i < len ; i++)
              {
                var in1 = img_array[i].images.fixed_height.url ;
                var in2 = img_array[i].images.fixed_height_still.url ;
                var ifrele = $("<img>");
                ifrele.addClass(".videos");
                ifrele.attr("video-file",in1);
                ifrele.attr("image-file",in2);
                ifrele.attr("status","movie");
                ifrele.attr("src",in1);
                $("#vfiles").append(ifrele);
              } //end of for
            }).error(function(errmsg){
              console.log('Encountered Error: ',errmsg);
            });//end of ajax response
}

// adding the search string
$("#First-form").on("click","input",function(){
    if ( gl_searchfor === null)
    {
      gl_searchfor = this.value ;
      callapigifvid(gl_searchfor);

    }
    else {
          gl_searchfor = gl_searchfor+"+"+this.value ;
          console.log('search str',gl_searchfor);
          callapigifvid(gl_searchfor);
    }

});
//$("#iputtext").on("change",function(event){

//})
$("#vfiles").on("click","img",function(event)
{
          event.preventDefault();
           console.log('inside click');
           var state = $(this).attr('status');
          if ( state === 'pic')
          {
            var change = $(this).attr('video-file');
            $(this).attr('src',change);
            $(this).attr('status','movie');
          }
          else if (state === 'movie')
          {
            var change = $(this).attr('image-file');
            $(this).attr('src',change);
            $(this).attr('status','pic');

          }
});


//Main Programming
dynamicadd();

/*
function callapigifvid(searchstr)
{
      //Api call
          var querstr1 = "http://api.giphy.com/v1/gifs/search?api_key=01f8ebd24dd04b98b407dd4b30d3443e" ;
            var querstr2 = "&q="+ searchstr +"&limit=5&offset=0&rating=G&lang=en";
            //var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=01f8ebd24dd04b98b407dd4b30d3443e&q=stars&limit=25&offset=0&rating=G&lang=en";
            var queryURL = querstr1 + querstr2 ;
            console.log(querstr1+querstr2);
            $("#vfiles").html("");

            $.ajax({
              url : queryURL ,
              method: "GET"
            }).done(function(response){
              console.log(response);
              var img_array = response.data;
              var len = img_array.length;

              console.log('length',len);
              console.log('res data',response.data);
              for( var i =0; i < len ; i++)
              {
                var in1 = img_array[i].images.fixed_height.url ;
                var in2 = img_array[i].images.fixed_height_still.url ;
                var ifrele = $("<iframe>");
                ifrele.addClass(".videos");
                ifrele.attr("video-file",in1);
                ifrele.attr("image-file",in2);
                ifrele.attr("status","movie");
                ifrele.attr("src",in1);
                $("#vfiles").append(ifrele);
              } //end of for
            }).error(function(errmsg){
              console.log('Encountered Error: ',errmsg);
            });//end of ajax response
}*/
// in the above i used iframe, so when i change the src(url) to still or moving, it opens the giphy webpage

/*
var ind1 = gl_imgvidurl.indexof(this.src);
console.log('url :',this.src);
console.log('index',ind1);
this.attr("src",gl_imgurl[ind1]); */

              //  var divele = $("<div class = items>");
              //var imgele = $("<img>");
            //  imgele.attr("src",img_array[i].images.fixed_height.url);
            //  divele.append(imgele);
            //  $("#gifdisplay").prepend(divele);
            //var in2 = "mp4" ;
            //var str = '<video><source src ="'+ in1+'" ></video>';
            //console.log('string'+ str);
            //console.log('in2'+in2);
