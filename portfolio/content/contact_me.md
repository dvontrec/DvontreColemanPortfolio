---
title: Contact Me
url: contact
---

<style>
    body{
        color: white;
        flex-grow: 1;
    }

    form#contact_form {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    form input:hover, form textarea:hover {
        opacity: .8;
    }

    .page_content {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
    }

    .page_image {
        min-height: 100vh;
        flex-grow: 1;
    }

    .form_div {
        flex-grow:1;
        padding: 0 10px;
    }

    .form_div p {
        text-align: center;
    }
    
    .slide img {
        max-height: 70vh;
    }

    .simple-form li {
        list-style: none;
    }

    .simple-form li {
    	padding: 0;
    	display: block;
    	list-style: none;
    	margin: 10px 0 0 0;
    }
    .simple-form label{
    	margin:0 0 3px 0;
    	padding:0px;
    	display:block;
    	font-weight: bold;
    }
    
    .simple-form .field-select {
        width: 100%;
    }

    .simple-form .field-text {
        width: 100%;
    }

    .simple-form .field-text-area {
        width: 100%;
        height: 100px;

    }

    .simple-form button {
        width: 100%;
        background: #4B99AD;
	    padding: 8px 15px 8px 15px;
	    border: none;
	    color: #fff;
    }
    
    .simple-form button:hover {
        background: #4691A4;
	    box-shadow:none;
	    -moz-box-shadow:none;
	    -webkit-box-shadow:none;
    }

    .slide-meta-title a.a-clean {
        font-weight: bold;
        text-transform: uppercase;
    }

    .content ul {
        margin-left: 0;
    }

    p.prompt{
        text-align: center;
    }

    .simple-form {
        border-radius: 8px;
    }

</style>

<div>
<p class="prompt">Send Me a message, Book me. Tell me a secret.  Whatever it is, I'll read it.</p>
<div class="page_content">
    <img src="/img/dvontre_sitting.jpg" class="form_image"></img>
    <div class="form_div">
        <form class="my_form" accept-charset="UTF-8" id="contact_form" onsubmit="return postToGoogleContact()">
            <ul class="simple-form">
                <li>
                    <label>First Name</label>
                    <input type="text" name="entry.39487584" data-name="First Name" id="first_name" placeholder="First Name" class="field-text" required>
                </li>
                <li>
                    <label>Last Name </label>
                    <input type="text" name="entry.1155815832" data-name="Last Name" id="last_name" placeholder="last Name" class="field-text" required>
                </li>
                <li>
                    <label>Email Address</label>
                    <input type="text" name="entry.184737677" data-name="Email" id="email" placeholder="Your Email" class="field-text" required>
                </li>
                <li>
                    <label>Message</label>
                    <textarea type="text" name="entry.1425066417" data-name="Message" id="message" placeholder="Enter Your Message Here" class="field-text-area" required></textarea>
                </li>
                <button type="submit">Send</button>
            </ul>
        </form>
    </div>
</div>
</div>
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

