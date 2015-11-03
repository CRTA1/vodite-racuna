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
    <div id='box'>

        <div id="nav">
            <ul class="navigation">
                <li id="b1" class="selected">
                    Predlog budžeta za  2014.
                </li>
                <li id="b2">
                    Promene u odnosu na 2013.
                </li>

            </ul>
        </div>

        <div id="budzet">

            <div id="infoch">
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
                <svg id="svg-main"></svg>
            </div>

            <div id="info1">
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

                <svg id="svg-legenda" height="200px"></svg>

            </div>

            <div id="info2"></div>

            <div id="tooltip">
                <div id="tooltipContainer">
                    <div class="nnn0"></div>
                    <div class="nnn1"></div>
                    <div class="nnn2"></div>
                    <div class="nnn3"></div>
                    <div class="hhr"></div>
                    <div class="valuesContainer">
                        <span class="value"></span>
                        <span class="change"></span>
                    </div>
                    <div class="chart"></div>
                    <div class="tail"></div>
                </div>
            </div>

        </div>
    </div>
</div><!-- end .section -->