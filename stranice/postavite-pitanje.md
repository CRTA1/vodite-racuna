---
title: Postavite pitanje
lead: true
---
<!-- Near the end of my page -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/css/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/css/font-awesome/css/font-awesome.min.css" />
<script type="text/javascript" src="{{ site.baseurl }}/js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/css/bootstrap/js/bootstrap.min.js"></script>

<body>
<!-- Contact Form - START -->

<div class="col-md-12">
<form id="contact-form" class="form" action="//formspree.io/office@voditeracuna.rs" method="POST">
<fieldset>
<div class="form-group">
    <span class="col-md-2  text-center"> <img src="{{ site.baseurl }}/img/user.png"></span>
    <div class="col-md-8">
        <input class="form-control" id="fname" type="text" name="name"  required placeholder="Ime i prezime">
    </div>
</div>
<br/>
<div class="form-group">
    <span class="col-md-2 text-center"><img src="{{ site.baseurl }}/img/email.png"></span>
    <div class="col-md-8">
       <input class="form-control" type="email" name="_replyto"  required placeholder="email@address.com">
    </div>
</div>
<br/>
<div class="form-group">
    <span class="col-md-2  text-center"><img src="{{ site.baseurl }}/img/message.png"></span>
    <div class="col-md-8">
        <textarea class="form-control" id="message" name="message" placeholder="Pitanje" rows="7"></textarea>
    </div>
</div>
<div class="form-group">
    <div class="col-md-10 text-center">
    <br/>
    <input class="btn btn-primary" type="submit" value="Pošalji"/>
    <input type="hidden" name="_next" value="{{ site.baseurl }}/stranice/success/" /> 
    </div>
</div>
</fieldset>
</form>
</div>
</div>

<!-- Contact Form - END -->

</body>

