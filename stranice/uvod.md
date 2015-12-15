---
title: Uvod
lead: true
categories: nextprev
---
<style type="text/css">
 <style>
.ui-tooltip, .arrow:after {
    background: black;
    border: 2px solid white;
}
.ui-tooltip {
    padding: 10px 20px;
    color: white;
    border-radius: 20px;
    font: bold 14px "Helvetica Neue", Sans-Serif;
    text-transform: uppercase;
    box-shadow: 0 0 7px black;
}
.arrow {
    width: 70px;
    height: 16px;
    overflow: hidden;
    position: absolute;
    left: 50%;
    margin-left: -35px;
    bottom: -16px;
}
.arrow.top {
    top: -16px;
    bottom: auto;
}
.arrow.left {
    left: 20%;
}
.arrow:after {
    content: "";
    position: absolute;
    left: 20px;
    top: -20px;
    width: 25px;
    height: 25px;
    box-shadow: 6px 5px 9px -9px black;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
.arrow.top:after {
    bottom: -20px;
    top: auto;
}
</style>
</style>
<script type="text/javascript">
  $(function() {
    $( document ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  });
</script>
<ol class="progtrckr" data-progtrckr-steps="10">
    <a href="{{site.baseurl}}/stranice/uvod/" class="uvod" title="Uvod">
    <li class="progtrckr-done">1 </li> </a>
    <a href="{{site.baseurl}}/stranice/definisanje-budzetskog-zastupanja-i-uloga-civilnog-drustva/" title="Definisanje budžetskog zastupanja i uloga civilnog društva">
    <li class="progtrckr-todo">2 </li> </a>
    <a href="{{site.baseurl}}/stranice/definicije-osnovnih-pojmova/" title="Definicije-osnovnih-pojmova">
    <li class="progtrckr-todo">3 </li> </a>
    <a href="{{site.baseurl}}/stranice/institucionalni-okvir-i-nadleznosti-lokalne-samouprave/">
    <li class="progtrckr-todo">4 </li> </a>
    <a href="{{site.baseurl}}/stranice/analiza-budzeta/">
    <li class="progtrckr-todo">5 </li> </a>
    <a href="{{site.baseurl}}/stranice/kako-izabrati-problem/">
    <li class="progtrckr-todo">6 </li> </a>
    <a href="{{site.baseurl}}/stranice/analiza-aktera/">
    <li class="progtrckr-todo">7 </li> </a>
    <a href="{{site.baseurl}}/stranice/2-pretpostavke-i-6-hipoteza-budzetskog-zagovaranja/">
    <li class="progtrckr-todo">8 </li> </a>
    <a href="{{site.baseurl}}/stranice/izgradnja-baze-za-budzetsko-zagovaranje/">
    <li class="progtrckr-todo">9</li> </a>
    <a href="{{site.baseurl}}/stranice/kampanja/"><li class="progtrckr-todo">10</li> </a>
</ol>
<br/><br/>

<h1 class="post-title">{{ page.title }}</h1>

<br/>
<div class="justify">
<br/>
Dragi zagovarači/zastupnici, aktivni građani,
<br/><br/> 
U želji da pomognemo proces budžetskog javnog zastupanja u našoj zemlji, na lokalnom i/ili nacionalnom nivou, kreirali smo praktični online priručnik koji Vas vodi korak po korak kroz budžetsko javno zastupanje.
 <br/><br/> 
Ovaj priručnik je namenjen za sve Vas koji donosite promene u svom okruženju i koji se suočavate sa nepravednom raspodelom novca u budžetu. Takođe, on će poslužiti i Vama koji smatrate da postoji prostor da se upravljanje javnim finansijama učini još transparetnijim i odgovornijim.
 <br/><br/> 
Pred Vama je kombinacija teoretskog i praktičnog znanja kreatora priručnika, koji su nesebično podelili svoje iskustvo u želji da aktivne građane dodatno motivišu da se uključe u budžetske procese u zemlji. Priručnik je pisan i organizovan tako da posluži i onim zagovaračima koji tek ulaze u javno zastupanje, ali i onima koji imaju više iskustva da se još bolje organizuju i budu uspešniji.  
 <br/><br/> 
Verujemo da će Vas ovaj priručnik zainteresovati i da će Vam pružiti odgovore u kom pravcu da se krećete kada poželite da se uhvatite u koštac sa budžetskim procesima u našoj zemlji.
 <br/><br/> 
Svaka sugestija, iskustva, primeri, koje želite da podelite s nama a u cilju unapređenja priručnika su više nego dobrodošli!  <br/>
Srećno! <br/><br/> 
</div>

<div align="center">
    <button id="prev"> « Prethodni</button>
    <button id="next">Dalje » </button> 
</div>
