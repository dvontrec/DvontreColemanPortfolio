---
title: Mailing List
url: join
hideExif: true
---


<style>
    body{
        color: white;
        flex-grow: 1;
    }

    form#mailing_list {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    form input:hover {
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
        margin-top: 10px;
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
        width: 100%
    }

    .simple-form .field-text {
        width: 100%
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

    .content ul {
        margin-left: 0;
    }

    p.prompt{
        text-align: center!important;
    }

    .slide-meta-title a.a-clean {
        font-weight: bold;
        text-transform: uppercase;
    }

</style>
<div>
     <p class="prompt">Join my mailing list to get the most up to date news about shows in
     your city.</p>
    <div class="page_content">
        <div class="form_div">
            <form class="my_form" accept-charset="UTF-8" class="my_form" id="mailing_list" onsubmit="return postToGoogle()">
                <ul class="simple-form">
                    <li>
                        <label>Email Address</label>
                        <input type="email" name="entry.1501063458" data-name="Email" id="email" placeholder="Your Email" class="field-text" required>
                    </li>
                    <li>
                        <label>City</label>
                        <input type="text" name="entry.1139337246" data-name="City" id="city" placeholder="City" class="field-text" required>
                    </li>
                    <li>
                        <label>State</label>
                        <select type="text" name="entry.909431325" data-name="State" id="state" class="field-select">
                            <option value="" selected disabled>Select a State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </li>
                    <li>
                        <label>How Did You Hear About Me</label>
                        <select name-"entry.1773004288" data-name="Buzz Origin" id="origin" class="field-select">
                            <option value="" default></option>
                            <option value="Instagram">Instagram</option>
                            <option value="Tik Tok">Tik Tok</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Word of Mouth">Word Of Mouth / Other</option>
                        </select>
                    </li>
                    <li>
                        <button type="submit" class="form-submit">Send</button>
                    </li>
                </ul>
            </form>
        </div>
        <img src="/img/raiders_stare.jpg"></img>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
    function postToGoogle() {
      var field1 = $("#email").val();
      var field2 = $("#city").val();
      var field3 = $("#state").val();
      var field4 = $("#origin").val();

      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfqZ37vbkZtpNsPTcxp0Lvuf1AkMvx3P-IcfMfGWmx-4x8WcA/formResponse",
          
        //add your google form generated numbers below which are also the 'names' of your inputs     
        data: {
          "entry.1501063458": field1,
          "entry.1139337246": field2,
          "entry.909431325": field3,
          "entry.1773004288": field4
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
