---
title: Pitanja i odgovori
lead: true
---
PITANJA

1. <a href="{{site.baseurl}}{{item.url}}"> Najčešće postavljana pitanja </a>
2. Može li država da proglasi bankrot?
3. Da li gradovi raspolažu novcem prikupljenim od PDV-a?
4. Kako se troši novac iz budžeta male opštine u odnosu na velike?
5. Kako da kontrolišemo troškove lokalne samouprave?
6. Šta su javne nabavke male vrednosti?
7. Kako do prioriteta u trošenju budžetskog novca?
8. Ko donosi budžet u nekoj opštini/gradu?



<div id="pitanja_odgovori_articles" markdown=1>
{% for item in site.categories.pitanja_odgovori %}
  <a href="{{site.baseurl}}{{item.url}}">{{ item.title }}</a><br/>
  <div >{{ item.description }}</div><br/><br/>
{% endfor %}
</div>
