---
title: Videos
lead: true
---

{% for item in site.categories.videos %}
<div>
<a href="{{site.baseurl}}{{item.url}}">{{ item.title }}</a><br/><br/>
<div><img src="{{item.img_url  | prepend: site.baseurl }}"></div>
<br/>
<div class=' justify' >{{ item.description }}  <a href="{{site.baseurl}}{{item.url}}">vise »</a></div> <br/><br/>
</div>
{% endfor %}
