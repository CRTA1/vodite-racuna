---
title: Izgradnja baze za budžetsko zagovaranje
lead: true
---
<style type="text/css"> 

.justify{text-align: justify;}

</style>

{% for item in site.categories.istrazujemo-za-vas %}
<div>
<a href="{{site.baseurl}}{{item.url}}">{{ item.title }}</a><br/>
<div><img src="{{item.img_url  | prepend: site.baseurl }}"></div>
<div class=' justify' >{{ item.description }}</div> <br/><br/><br/>
</div>
{% endfor %}
