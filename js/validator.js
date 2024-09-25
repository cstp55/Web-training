// alert("asdfas");
// function bindfname()
// {
//     var fname = document.getElementById('fname').value
//     document.getElementById('bfname').innerHTML  = fname;
   
// }
jQuery('#fname').keyup(function(){
    $('#bfname').html(jQuery('#fname').val());    
});

/**
 * selectors
 * id -> $('#id')
 * class-> $('.class')
 * tag ->  $(h1).css('property', 'value')
 * 
 * 
 */
// $('#lname').click(myfunction());
// function myfunction(){
//     alert("asdf");
// }

// $('$lname').click(function(){
//     alert("asdf");
// })

//Arrays
var names = ['jhon', 'doe', 'ram'];

for(i=0; i<names.length; i++){
       console.log(names[i]);
}
console.log(names.toString());
/**
 * arrays sort, searching, array push pop, 
 * 
 *
 */