---
title: Videos
lead: true
---

<style type="text/css"> 

.justify{text-align: justify;}

</style>

{% for item in site.categories.videos %}
<div>
<a href="{{site.baseurl}}{{item.url}}">{{ item.title }}</a><br/><br/>
<div><img src="{{item.img_url  | prepend: site.baseurl }}"></div>
<div class=' justify' >{{ item.description }}  <a href="{{site.baseurl}}{{item.url}}">vise »</a></div> <br/><br/>
</div>
{% endfor %}
