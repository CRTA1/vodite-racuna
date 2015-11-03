---
title: Postavite pitanje
lead: true
---


<!-- <form action="//formspree.io/egzontina.krasniqi@hotmail.com"
      method="POST">
    <input type="text" name="name">
    <input type="email" name="_replyto">
    <input type="submit" value="Send">
</form> -->

<script type="text/javascript">
	
	$("#contact-form").validate({
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/egzontina.krasniqi@hotmail.com", 
      method: "POST",
      data: {
        name: $(form).find("input[name='name']").val(),
        _replyto: $(form).find("input[name='_replyto']").val(),
        message: $(form).find("textarea[name='message']").val()
      },
      dataType: "json",
      success: function() {
        $("#submit-success").fadeIn();
        $("#contact-form").fadeOut();
      },
      error: function() {
        $("#submit-errors").fadeIn();        
      }
    });
  }
});

</script>
<!-- Hidden message to show if contact is successful. -->
<div id="submit-success" class="collapse">
  Message received! I'll be in touch.
</div>

<!-- Hidden message to show if user encounters errors. -->
<div id="submit-errors" class="collapse">
  It looks like there was an error submitting the form.
  Please try again later.
</div>
<form id="contact-form" class="form" action="/">
  <div class="form-group">
    <label for="name">Name</label>
    <input class="form-control" type="text" name="name" required placeholder="Name">
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input class="form-control" type="email" name="_replyto" required placeholder="email@address.com">
  </div>
  <div class="form-group">
    <label for="message">Message</label>
    <textarea class="form-control" name="message" placeholder="Message" required rows="5"></textarea>
  </div>
  <input class="btn btn-primary" type="submit" value="Send">
</form>

<!-- Near the end of my page -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script>