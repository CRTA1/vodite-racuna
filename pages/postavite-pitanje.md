---
title: Postavite pitanje
lead: true
---
<!-- Near the end of my page -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script>
<!-- Formspree-powered contact form -->
 <div class="col-lg-5  col-sm-6  ">
<form id="contact-form" class="form" action="//formspree.io/egzontina.krasniqi@hotmail.com" method="POST">
<div class="form-group">
  <label  class="col-xs-5" for="name">Ime i prezime </label>
  <div class="col-xs-5">
      <input class="form-control col-xs-5" type="text" name="name" width="80" required placeholder="Ime i prezime">
  </div>
</div>
<div class="form-group">
  <label class="col-xs-5" for="email">Email adresa</label>
  <div class="col-xs-5">
      <input class="form-control " type="email" name="_replyto"  required placeholder="email@address.com">
  </div>
</div>
<div class="form-group">
  <label class="col-xs-5" for="message">Pitanje</label> 
  <div class="col-xs-5">
      <textarea class="form-control" name="message" placeholder="Pitanje" required rows="5" cols="800"></textarea>
  </div>
</div>
<input class="btn btn-primary" type="submit" value="Pošalji">
  
</form>
</div>


