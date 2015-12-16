---
title: Video
lead: true
---
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

{% for item in site.categories.video %}
<div class="panel panel-default">
 <div class="panel-body">
<div class="col-md-12">
<a class="text-title-p" href="{{site.baseurl}}{{item.url}}">{{ item.title }}</a>
<div class="form-group">
	<div class="col-md-4 wrapper ">
		<img class="img-post-pad" src="{{item.img_url  | prepend: site.baseurl }}">
	</div>
	<div class='col-md-8 textstyle-p wrapper'>
		{{ item.description }}  <a href="{{site.baseurl}}{{item.url}}">vise »</a>
	</div> 
</div>
</div>
</div>
</div>
{% endfor %}
