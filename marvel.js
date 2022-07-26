var marvel = {
	render : function() {
       var url="https://gateway.marvel.com/v1/public/characters?ts=1&apikey=75da5900d36656655728f58059e814bd&hash=390c28a97938c35c2bdaf0950a5cf962";
       var message = document.getElementById("message");
       var footer = document.getElementById("footer");
       var marvelContainer = document.getElementById("marvel-container");

       $.ajax({
       	url:url,
       	type:"GET",

       	beforeSend: function() {
       	    message.innerHTML = "Loading...";
       	},
       	complete: function(){
            message.innerHTML = "Sucessfully done!";
       	},
       	success: function(data) {
            footer.innerHTML = data.attributionHTML;
            var string = "";
            string += "<div class='row'>";   

            for(var i=0; i<data.data.results.length; i++){
                  var element = data.data.results[i];
               
                  string += "<div class ='col-md-3'>";
                  string += " <a href='" + element.urls[0].url+ "' target='_blank'>"
                  string += " <img src='"+ element.thumbnail.path + "/portrait_incredible."
                  +element.thumbnail.extension+ "' />";
                  string += "</a>";
                  string += "<h4>" + element.name + "</h4>";

                  string += "</div>";

                  if((i+1) % 4 == 0){
                    string += "</div>";
                    string += "<div class ='row'>";
                  }
            }
            marvelContainer.innerHTML = string;

       	},

       	error: function () {
       		message.innerHTML = 'We are sorry!';
       	}
       });
	}
};
marvel.render();