---
title: contact
url: contact
---

<div align="center">
	<p>
        contact me page
	</p>

<form class="my_form" id="contact_form" onsubmit="return postToGoogleContact()">
    <label>First Name</label>
    <input type="text" name="entry.39487584" data-name="First Name" id="first_name" placeholder="First Name"
required>
    <label>last Name </label>
    <input type="text" name="entry.1155815832" data-name="Last Name" id="last_name" placeholder="last Name"
required>
    <label>Email Address</label>
    <input type="text" name="entry.184737677" data-name="Email" id="email" placeholder="Your Email"
required>
    <label>Message</label>
    <textarea type="text" name="entry.1425066417" data-name="Message" id="message" placeholder="Enter Your Message Here" required></textarea>
    <button type="submit">Send</button>
</form>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
    function postToGoogleContact() {
      var field1 = $("#first_name").val();
      var field2 = $("#last_name").val();
      var field3 = $("#email").val();
      var field4 = $("#message").val();

      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScnpWsrHs47T8G8-lkR4Fc09TRonrwFj4HHad6t_yG2IFrfUw/formResponse",
          
        //add your google form generated numbers below which are also the 'names' of your inputs     
        data: {
          "entry.39487584": field1,
          "entry.1155815832": field2,
          "entry.184737677": field3,
          "entry.1425066417": field4
            
        },
        type: "POST",
        dataType: "xml",
        success: function (d) {
          $('#contact_form').trigger('reset');
        },
        error: function (x, y, z) {
          $('#contact_form').trigger('reset');
        }
      });
      return false;
    }
  </script>

</div>
