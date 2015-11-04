---
title: Postavite pitanje
lead: true
---
<!-- Near the end of my page -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script>
<!-- Formspree-powered contact form -->
<form id="contact-form" class="form" action="//formspree.io/egzontina.krasniqi@hotmail.com">
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
  <input type="hidden" name="_next" value="{{ site.baseurl }}/pages/success/" />
</form>



