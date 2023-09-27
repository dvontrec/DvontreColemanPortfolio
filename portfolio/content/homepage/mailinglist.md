---
title: "Mailing List"
weight: 4
header_menu: true
---

Tell me where to tour and to get notified when I’m in a city near you…


<form accept-charset="UTF-8" class="my_form" id="mailing_list" onsubmit="return postToGoogle()">
    <label>Email Address</label>
    <input type="email" name="entry.1501063458" data-name="Email" id="email" placeholder="Your Email"
required>
    <label>City</label>
    <input type="text" name="entry.1139337246" data-name="City" id="city" placeholder="City" required>
    <label>State / Country</label>
    <input type="text" name="entry.909431325" data-name="State" id="state" placeholder="State" required>
    <button type="submit">Send</button>
</form>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
    function postToGoogle() {
      var field1 = $("#email").val();
      var field2 = $("#city").val();
      var field3 = $("#state").val();

      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfqZ37vbkZtpNsPTcxp0Lvuf1AkMvx3P-IcfMfGWmx-4x8WcA/formResponse",
          
        //add your google form generated numbers below which are also the 'names' of your inputs     
        data: {
          "entry.1501063458": field1,
          "entry.1139337246": field2,
          "entry.909431325": field3
        },
        type: "POST",
        dataType: "xml",
        success: function (d) {
          $('#mailing_list').trigger('reset');
        },
        error: function (x, y, z) {
          $('#mailing_list').trigger('reset');
        }
      });
      return false;
    }
  </script>

