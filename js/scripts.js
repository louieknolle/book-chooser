$(document).ready(function() {
  $('form#aboutYou').submit(function(event) {
    const age = parseInt($('input#age').val());
    const gender = $('select#gender').val();
    const season = $('select#season').val();
    if (age > 26 && gender === 'Female' && season === 'Summer') {
      console.log('running first condition');
      let recommend = 'Romantic Horror' 
      $('#recommend').text(recommend);
      $('#genre').show();
    } else if ( age < 26 || gender === 'female' && season === 'Fall') {
      let recommend = 'Horror'
      $('#recommend').text(recommend);
      $('#genre').show();
    } else if ( age === 30 && gender === 'male' && season === 'Winter') {
      let recommend = 'Scandanavian horror'
      $('#recommend').text(recommend);
      $('#genre').show();
    
    } else {
      let recommend = 'Holy scripture'
      $('#recommend').text(recommend);
      $('#genre').show();
    }

    event.preventDefault();
  });
});



// $(document).ready(function() {
//   $("form#insurance").submit(function(event) {
//     const age = parseInt($("input#age").val());
//     const gender = $("select#gender").val();

//     if (age) {
//       let quote = (100 - age) * 3;
//       if (gender === 'male' && age < 26) {
//         quote += 50;
//       }

//       $("#rate").text(quote);
//       $("#quote").show();
//     } else {
//       alert('Please enter your age.');
//     }

//     event.preventDefault();
//   });
// });