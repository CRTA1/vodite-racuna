---
title: Video
lead: true
---

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
