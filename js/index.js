$ (function () {
    $('#knopka').click(sendForm);
   
});
    function sendForm(e) {e.preventDefault();
       $.ajax({
          url:"https://formspree.io/juliaivanytska15@gmail.com",
          method:"POST",
          data:{
             marka:$('#marka').val(),
             model:$('#model').val(),
             year:$('#year').val(),
             v3:$('#v3').val(),
             korobka:$('#korobka').val(),
             user_name:$('#user_name').val(),
             emaill:$('#emaill').val(),
             phone_number:$('#phone_number').val(),
             addwish:$('#addwish').val()
          },
          dataType:'json',
          success:function() {
             $('#thanks').html('Thank you for contacting us!');
          }
       });
    };
