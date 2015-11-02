---
layout: post
title:  "Grafički prikaz predloga budžeta R. Srbije za 2014."
categories: inicijative
img_url: /img/inicijative/pic2.jpg
description: "Budžet naše zemlje javno je dostupan u formi zakona. Razumevanje ovog dokumenta dugog 181 stranu (ili čak 563 strane sa svim objašnjenjima) zahteva dosta znanja, napora i vremena.  Ova vizuelizacija pomaže bržem sagledavanju budžeta i približava ga građanima koji nisu nužno stručnjaci za finansije"
---

<script src="{{ site.baseurl }}/js/d3.v3.min.js"></script>
<script src="{{ site.baseurl }}/js/budzet2014p.js"></script>
<script src="{{ site.baseurl }}/js/budzet.info.js"></script>



<div id="vis" class="section">
    <div id="box">

        <div id="nav">
            <ul class="navigation">
                <li id="b1" class="selected">
                    Predlog budžeta za  2014.
                </li>
                <li id="b2" class="">
                    Promene u odnosu na 2013.
                </li>

            </ul>
        </div>

        <div id="budzet">

            <div id="infoch" style="display: none;">
                <h5>Promene u odnosu na prethodnu godinu</h5>
                Na grafiku su prikazane promene u procentima u odnosu na budžet za 2013.
                fiskalnu godinu nakon rebalansa. Na horizontaloj osi je prikazan razdeo.
                Možete pomerati krugove pomoću miša kako biste označili krug koji se nalazi
                ispod.
                <p class="oznaka" style="top:100px;">
                    +25% i više
                </p>
                <p class="nivo" style="top:150px;">
                    +20%
                </p>
                <p class="nivo" style="top:250px;">
                    +10%
                </p>
                <p class="nivo7" style="top:270px;">
                    +7% (srednje povećanje)
                </p>
                <p class="nivo0" style="top:350px;">
                    0%
                </p>
                <p class="nivo" style="top:450px;">
                    -10%
                </p>
                <p class="nivo" style="top:550px;">
                    -20%
                </p>
                <p class="oznaka" style="top:600px;">
                    -25% i manje
                </p>
            </div>

            <div id="div-svg-main">
               
            </div>

            <div id="info1" style="display: block;">
                <h5>Grafički prikaz predloga budžeta R. Srbije za 2014.</h5>
                Svi rashodi i izdaci uključujući i otplatu glavnice duga iznose:
                <h6>1.592 milijardi dinara</h6>
                Krugovi predstavljaju stavke iz budžeta po funkcijama. Boje odgovaraju različitim razdelima.
                <br>
                <br>

                Krugove možete pomerati i označavati čime dobijate detaljnije informacije u panelu desno.
                <br>
                <br>

                Tri naziva koja prate svaku stavku predstavljaju razdeo, glavu (kada je ima) i funkciju iz člana 7. Zakona o budžetu.
                <br>
                <br>

                Skala (vrednost proporcionalna zapremini zamišljenih kugli):
                <br>
                <br>

                <svg id="svg-legenda" height="200px"><circle r="60.46149135729773" class="isprekidano" cx="100" cy="80"></circle><circle r="35.54829323346607" class="isprekidano" cx="100" cy="55"></circle><circle r="7.777119173308261" class="isprekidano" cx="100" cy="27"></circle><text font-family="sans-serif" font-size="10px" x="77" y="50">1 milijarda</text><text font-family="sans-serif" font-sXize="10px" x="70" y="110">100 milijardi</text><text font-family="sans-serif" font-size="10px" x="75" y="160">500 milijardi</text></svg>

            </div>

            <div id="info2" style="display: block;"><div class="nn1">STRUKTURA</div><div class="hr"></div><svg width="290" height="570" class="svg-inset"><rect x="100" y="50" height="278" width="50" style="fill:#2d578b;stroke-width:1;stroke:rgb(0,0,0)"><title>Rashodi bez otplate glavnice duga: 1112 milijardi</title></rect><rect x="100" y="328" height="120" width="50" style="fill:#22ff00;stroke-width:1;stroke:rgb(0,0,0)"><title>Otplata glavnice duga: 480 milijardi</title></rect><rect x="170" y="50" height="232.5" width="50" style="fill:#00aadd;stroke-width:1;stroke:rgb(0,0,0)"><title>Prihodi bez zaduživanja: 930 milijardi</title></rect><rect x="170" y="282.5" height="165.5" width="50" style="fill:#ff2211;stroke-width:1;stroke:rgb(0,0,0)"><title>Zaduživanje: 662 milijarde</title></rect><text x="125" y="35" text-anchor="middle" style="font-size: 12; font-family: Helvetica, sans-serif;font-weight:bold">RASHODI</text><text x="195" y="35" text-anchor="middle" style="font-size: 12; font-family: Helvetica, sans-serif;font-weight:bold">PRIHODI</text><text x="250" y="302.5" text-anchor="middle" style="font-size: 12; font-family: Helvetica, sans-serif;font-weight:bold">DEFICIT</text><text x="250" y="317.5" text-anchor="middle" style="font-size: 12; font-family: Helvetica, sans-serif;font-weight:bold">182 M</text><line x1="100" y1="328" x2="280" y2="328" style="fill:#ff2211;stroke-width:1;stroke:rgb(0,0,0)"></line><line x1="170" y1="282.5" x2="280" y2="282.5" style="fill:#ff2211;stroke-width:1;stroke:rgb(0,0,0)"></line><circle r="43.315398274745014" class="isprekidano" cx="160" cy="510"></circle><text text-anchor="middle" font-family="sans-serif" font-size="10px" x="160" y="505">FISKALNI DEFICIT</text><text text-anchor="middle" font-family="sans-serif" font-size="10px" x="160" y="520">182 milijarde</text></svg></div>

            <div id="tooltip" class="plus" style="top: 229.794px; left: 362.859px; display: none;">
                <div id="tooltipContainer">
                    <div class="nnn0">Razdeo/Glava/Funkcija: 18/18.0/210</div>
                    <div class="nnn1">MINISTARSTVO ODBRANE</div>
                    <div class="nnn2"></div>
                    <div class="nnn3">Vojna odbrana</div>
                    <div class="hhr"></div>
                    <div class="valuesContainer">
                        <span class="value">60,3 milijardi</span>
                        <span class="change">+11.4%</span>
                    </div>
                    <div class="chart"></div>
                    <div class="tail"></div>
                </div>
            </div>

        </div>
    </div>
</div>