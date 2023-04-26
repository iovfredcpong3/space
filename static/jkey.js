var source = $("#some-template").html(); 
var template = Handlebars.compile(source); 

var data = { 
    
}; 

Handlebars.registerHelper('initials', function(fname, lname) {
  return fname[0] + lname[0];
});

$('body').append(template(data));