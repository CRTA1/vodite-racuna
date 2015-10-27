---
title: Pitanja i odgovori
lead: true
---
PITANJA

1. <a href="{{ site.baseurl }}"> Najčešće postavljana pitanja? </a>
2. <a href="{{ site.baseurl }}"> Može li država da proglasi bankrot?</a>
3. <a href="{{ site.baseurl }}"> Da li gradovi raspolažu novcem prikupljenim od PDV-a?</a>
4. <a href="{{ site.baseurl }}"> Kako se troši novac iz budžeta male opštine u odnosu na velike?</a>
5. <a href="{{ site.baseurl }}"> Kako da kontrolišemo troškove lokalne samouprave?</a>
6. <a href="{{ site.baseurl }}"> Šta su javne nabavke male vrednosti?</a>
7. <a href="{{ site.baseurl }}"> Kako do prioriteta u trošenju budžetskog novca?</a>
8. <a href="{{ site.baseurl }}"> Ko donosi budžet u nekoj opštini/gradu?</a>

<br/><br/><br/>
<blockquote>
<!-- <div id="pitanja-odgovori-articles" markdown=1> -->
{% for item in site.categories.pitanja-odgovori %}
  <a href="{{site.baseurl}}{{item.url}}">{{ item.title }}</a>
  <div> {{ item.description }}</div><br/><br/>
{% endfor %}
<!-- </div> -->
</blockquote>