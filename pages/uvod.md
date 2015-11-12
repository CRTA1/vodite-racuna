---
title: Uvod
lead: true
---

<style type="text/css">
-/* Progress Tracker v2 */
ol.progress[data-steps="2"] li { width: 49%; }
ol.progress[data-steps="3"] li { width: 33%; }
ol.progress[data-steps="4"] li { width: 24%; }
ol.progress[data-steps="5"] li { width: 19%; }
ol.progress[data-steps="6"] li { width: 16%; }
ol.progress[data-steps="7"] li { width: 14%; }
ol.progress[data-steps="8"] li { width: 12%; }
ol.progress[data-steps="9"] li { width: 11%; }
ol.progress[data-steps="10"] li { width: 9%; }
ol.progress[data-steps="11"] li { width: 7%; }

.progress {
    width: 100%;
    list-style: none;
    list-style-image: none;
    margin: 20px 0 20px 0;
    padding: 0;
}

.progress li {
    float: left;
    text-align: center;
    position: relative;
    width: 390px;
}

.progress .name {
    display: block;
    vertical-align: bottom;
    text-align: center;
    width: 5em;
    margin-bottom: 1em;
    color: black;
    opacity: 0.3;
}

.progress .step {
    color: black;
    border: 3px solid silver;
    background-color: silver;
    border-radius: 50%;
    line-height: 1.2;
    width: 1.2em;
    height: 1.2em;
    display: inline-block;
    z-index: 0;
}

.progress .step span {
    opacity: 0.3;
}

.progress .active .name,
.progress .active .step span {
    opacity: 1;
}

.progress .step:before {
    content: "";
    display: block;
    background-color: silver;
    height: 0.4em;
    width: 50%;
    position: absolute;
    bottom: 0.6em;
    left: 0;
    z-index: -1;
}

.progress .step:after {
    content: "";
    display: block;
    background-color: silver;
    height: 0.4em;
    width: 50%;
    position: absolute;
    bottom: 0.6em;
    right: 0;
    z-index: -1;
}

.progress li:first-of-type .step:before {
    display: none;
}

.progress li:last-of-type .step:after {
    display: none;
}

.progress .done .step,
.progress .done .step:before,
.progress .done .step:after,
.progress .active .step,
.progress .active .step:before {
    background-color: #2ECC71;
}

.progress .done .step,
.progress .active .step {
    border: 3px solid #2ECC71;
}

.clearfix:after {
    content: " "; /* Older browser do not support empty content */
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
}

</style>


<ol class="progress clearfix" data-steps="11">
    <li class="done">
        <span class="name"></span>
        <span class="step"><span>1</span></span>
    </li>
    <li class="done">
        <span class="name"></span>
        <span class="step"><span>2</span></span>
    </li>
    <li class="done">
        <span class="name"></span>
        <span class="step"><span>3</span></span>
    </li>
    <li class="done">
        <span class="name"></span>
        <span class="step"><span>4</span></span>
    </li>
    <li class="done">
        <span class="name"></span>
        <span class="step"><span>5</span></span>
    </li>
    <li class="done">
        <span class="name"></span>
        <span class="step"><span>6</span></span>
    </li>
    <li class="done">
        <span class="name"></span>
        <span class="step"><span>7</span></span>
    </li>
    <li class="done">
        <span class="name"></span>
        <span class="step"><span>8</span></span>
    </li>
    <li class="done">
        <span class="name"></span>
        <span class="step"><span>9</span></span>
    </li>   
    <li class="active">
        <span class="name"></span>
        <span class="step"><span>10</span></span>
    </li>
    <li>
        <span class="name"></span>
        <span class="step"><span>11</span></span>
    </li>
</ol>

<div id="next_prev_buttons" class="post-content">
    <button id="next" style="float: right;">Sledeći</button>
    <button id="prev" style="float: right; margin-right: 5px;">Prethodni</button>
  </div>