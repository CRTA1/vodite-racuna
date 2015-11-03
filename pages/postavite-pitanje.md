---
title: Postavite pitanje
lead: true
---


<!-- Near the end of my page -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script>


<script type="text/javascript">
	var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/egzontina.krasniqi@hotmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Message sent!</div>');
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
		}
	});
});
</script>


<form id="contact-form" action="//formspree.io/egzontina.krasniqi@hotmail.com" method="post">
	<input type="text" name="Name" placeholder="Name" required>
	<input type="email" name="Email" placeholder="Email" required>
	<textarea name="Message" cols="30" rows="6" placeholder="Message" required></textarea>
	<!-- CONFIG -->
	<input class="is-hidden" type="text" name="_gotcha">
	<input type="hidden" name="_subject" value="Subject">
	<input type="hidden" name="_cc" value="email@cc.com">
	<!-- /CONFIG -->
	<input class="submit" type="submit" value="Send">
</form>









