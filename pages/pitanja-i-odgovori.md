---
title: Pitanja i odgovori
lead: true
---

PITANJA

Najčešće postavljana pitanja
<ol>
{% for item in site.categories.pitanja-i-odgovori %}
  <li><a href="{{site.baseurl}}{{item.url}}">{{ item.title }}</a></li>
{% endfor %}
</ol>
<br/><br/><br/>
<blockquote>
<!-- <div id="pitanja-odgovori-articles" markdown=1> -->
{% for item in site.categories.pitanja-odgovori %}
  <a href="{{site.baseurl}}{{item.url}}">{{ item.title }}</a>
  <div> {{ item.description }}</div><br/><br/>
{% endfor %}
<!-- </div> -->
</blockquote>