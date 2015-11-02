// budzet.info

var width = 900, height = 650;

var xc=350, yc=300, rc=250;

var selected=0;

var fill = d3.scale.category20();

var radius = d3.scale.sqrt().range([0, 12]);

var nodes = root.children;

nodes.sort(function(a, b) {return d3.descending(a.size, b.size)})

nodes.forEach(function(o, i) {
    o.x += (Math.random() - .5) * 40;
    o.y += (Math.random() - .5) * 40;
    o.r=scalesize(o.size);
});  

var force = d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .gravity(.01)
    .charge(0)
    .on("tick", tick)
    .start();

var svg = d3.select("#svg-main")
    .attr("width", width)
    .attr("height", height);

svg.append("svg:a").attr("xlink:href","http://budzet.info").attr("target","_blank").append("svg:text")
    .attr("x", width-70)
    .attr("y", height-13)
    .attr("text-anchor", "middle")
    .attr("style", "font-size: 12; font-family: Helvetica, sans-serif;font-weight:bold")
    .text("http://budzet.info");

var node = svg.selectAll(".node")
  .data(nodes)
  .enter().append("circle")
  .attr("class", "node")
  .attr("cx", function(d) { return d.x; })
  .attr("cy", function(d) { return d.y; })
  .attr("r", function(d) { return 1; })
  .attr("sel", function(d) { return 0; })
  .style("fill", function(d) { return fill(d.color); })
  .style("stroke-width",1)
  .style("stroke", function(d) { return d3.rgb(fill(d.color)).darker(2); })
  .call(force.drag)
  .on("mousedown", function(d) { d3.event.stopPropagation(); 
    if(selected!=0) {
      selected.style("stroke-width",1).style("stroke", function(d) { return d3.rgb(fill(d.color)).darker(2); });
      selected.attr("sel",0);
    }
    selected=d3.select(this);
    selected.style("stroke","#f00").style("stroke-width",5);
    selected.attr("sel",1);
    select1(d);
  })
  .on("mouseover",function(d,i) { 
     var el = d3.select(this);
     var xpos = Number(el.attr('cx'));
     var ypos = (el.attr('cy') - d.r +45);
     el.style("stroke","#000").style("stroke-width",3);
     d3.select("#tooltip")
       .style('top',ypos+"px")
       .style('left',xpos+"px")
       .style('display','block')
       .classed('plus', d.change>0)
       .classed('minus', d.change<0);
     d3.select("#tooltip .nnn3")
       .html(d.n3);
     d3.select("#tooltip .nnn2")
       .text(d.n2);
     d3.select("#tooltip .nnn1")
       .text(d.n1);
     d3.select("#tooltip .nnn0")
       .text("Razdeo/Glava/Funkcija: "+d.s1+"/"+d.s2+"/"+d.s3);
     d3.select("#tooltip .change")
       .text(promena(d.change));
     d3.select("#tooltip .value")
       .html(formatNumber(d.size));
  })
  .on("mouseout",function(d,i) {
    if(d3.select(this).attr("sel")==0) 
      d3.select(this)
        .style("stroke-width",1)
        .style("stroke", function(d) { return d3.rgb(fill(d.color)).darker(2); });
    else
      d3.select(this)
        .style("stroke","#f00")
        .style("stroke-width",5);
    d3.select("#tooltip")
      .style('display','none')
  });
          
node.transition()
  .duration(2000)
  .attr("r", function(d){return d.r});

svg.style("opacity", 1e-6)
  .transition()
  .duration(1000)
  .style("opacity", 1);

d3.select("#svg-main")
  .on("mousedown", mousedown);

d3.select("#b1")
  .on("mousedown",startLayout);

d3.select("#b2")
  .on("mousedown",changeLayout);

d3.select("#b3")
  .on("mousedown",infoLayout);

initinfo1();

initinfo2();

function tick(e) {
  var q = d3.geom.quadtree(nodes),
    i = 0,
    n = nodes.length;
  while (i < n) {
    q.visit(collide(nodes[i]));
    ++i;
  } 
  node.each(cluster(15 * e.alpha * e.alpha))
    .each(center1(2))
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
}


function cluster(alpha) {
  var max = {};
  nodes.forEach(function(d) {
    if (!(d.color in max) || (d.r > max[d.color].r)) {
      max[d.color] = d;
    }
  });
  return function(d) {
    var node = max[d.color],
      l, r, x, y, i = -1;
    if (node == d) return;
    x = d.x - node.x;
    y = d.y - node.y;
    l = Math.sqrt(x * x + y * y);
    r = d.r + node.r;
    if (l != r) {
      l = (l - r) / l * alpha;
      if(l>0) {
      d.x -= (x *= l);
      d.y -= (y *= l);
      node.x += x;
      node.y += y;
	}
    }
    x = d.x - xc;
    y = d.y - yc;
    l = Math.sqrt(x * x + y * y);
    if (l > rc) {
      d.x += alpha*(xc-d.x)/l;
      d.y += alpha*(yc-d.y)/l;
    }  
  };
}

function tick_i(e) {
  var q = d3.geom.quadtree(nodes),
    i = 0,
    n = nodes.length;
  while (i < n) {
    q.visit(collide(nodes[i]));
    ++i;
  } 
  node
//  .each(cluster(15 * e.alpha * e.alpha))
    .each(center2(2))
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
}


function center1(alpha) {
  return function(d) {
    var l, r, x, y;
    x = d.x - xc;
    y = d.y - yc;
    l = Math.sqrt(x * x + y * y);
    if (l > rc) {
      d.x -= alpha*x/l;
      d.y -= alpha*y/l;
    }
  };
}

function center2(alpha) {
  return function(d) {
    var l, r, x, y;
    
    x = d.x - 500;
    y = d.y - 300;
    l = Math.sqrt(x * x/2.5 + y * y);
    if (l < 250) {
      d.x += alpha*x/l;
      d.y += alpha*y/l;
    }
  };
}

function collide(node) {
  var r = node.r + 15,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;
  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
         l = Math.sqrt(x * x + y * y),
          r = node.r + quad.point.r;
      if (l < r) {
        l = (l - r) / l * .5;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}

function mousedown() {
  initinfo2();
  if(selected!=0) {
    selected.style("stroke-width",1)
      .style("stroke", function(d) { return d3.rgb(fill(d.color)).darker(2); });
    selected.attr("sel",0);
  }
  selected=0;
  nodes.forEach(function(o, i) {
    o.x += (Math.random() - .5) * 40;
    o.y += (Math.random() - .5) * 40;
  });
  force.resume();
}

function scalesize(size) {
  return Math.pow(size,0.33)/120;
}

function formatNumber(n,decimals) {
    var s, remainder, num, negativePrefix, negativeSuffix, prefix, suffix;
    suffix = ""
    negativePrefix = ""
    negativeSuffix = ""
    if (n < 0) {
      negativePrefix = "";
      negativeSuffix = " in income"
      n = -n
    };
    if (n >= 1000000000000) {
      suffix = " hiljada milijardi"
      n = n / 1000000000000
      decimals = 2
    } else if (n >= 1000000000) {
      suffix = " milijardi"
      n = n / 1000000000
      decimals = 1
    } else if (n >= 1000000) {
      suffix = " miliona"
      n = n / 1000000
      decimals = 1
    } 
    prefix = ""
    if (decimals > 0) {
      if (n<1) {prefix = "0"};
      s = String(Math.round(n * (Math.pow(10,decimals))));
      if (s < 10) {
        remainder = "0" + s.substr(s.length-(decimals),decimals);
        num = "";
      } else{
        remainder = s.substr(s.length-(decimals),decimals);
        num = s.substr(0,s.length - decimals);
      }  
      return  negativePrefix + prefix + num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "," + remainder + suffix + negativeSuffix;
    } else {
      s = String(Math.round(n));
      s = s.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      return  negativePrefix + s + suffix + negativeSuffix;
    }
};

function addCommas(n)
{
  x1 = String(n);
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + '.' + '$2');
  }
  return x1;
}

function promena(n)
{
  if(n==100) return "Novo!";
  else return d3.format("+.1\%")(n)
}

function select1(d) {
  d3.selectAll(".nn0")
    .remove();
  d3.selectAll(".nn1")
    .remove();
  d3.selectAll(".nn2")
    .remove();
  d3.selectAll(".nn3")
    .remove();
  d3.selectAll(".hr")
    .remove();
  d3.selectAll(".nn4")
    .remove();
  d3.selectAll(".nn5")
    .remove();
  d3.selectAll(".nn6")
    .remove();
  d3.selectAll(".svg-inset")
    .remove();
  d3.select("#info2")
    .append("div")
    .attr("class", "nn0")
    .text("Razdeo/Glava/Funkcija: "+d.s1+"/"+d.s2+"/"+d.s3);
  d3.select("#info2")
    .append("div")
    .attr("class", "nn1")
    .text(d.n1);
  d3.select("#info2")
    .append("div")
    .attr("class", "nn2")
    .text(d.n2);
  d3.select("#info2")
    .append("div")
    .attr("class", "nn3")
    .text(d.n3);
  d3.select("#info2")
    .append("div")
    .attr("class", "hr");
    
  var diameter = 250,
  format = d3.format(",d");
  var pack = d3.layout.pack()
      .size([diameter - 4, diameter - 4])
      .value(function(d) { return scalesize(d.size)*scalesize(d.size); });

  var svg=d3.select("#info2").append("svg")
      .attr("width", diameter)
      .attr("height", diameter)
      .attr("class", "svg-inset")
      .append("g")
      .attr("transform", "translate(2,2)");

  var data={name:d.n3,children:d.struct};
  var pd=d;

  svg.data([data]).selectAll(".node")
    .data(pack.nodes)
    .enter()
    .append("circle")
    .attr("class", function(d) { return d.children ? "inset0" : "inset1"; })
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
    .attr("r", function(d) { return d.r; })   
    .on("mouseover",function(d,i) { 
      var el = d3.select(this)
      var xpos = el[0][0].__data__.x+700;
      var ypos = el[0][0].__data__.y - d.r+125; 
      el.style("stroke","#000").style("stroke-width",2);
      d3.select("#tooltip").style('top',ypos+"px").style('left',xpos+"px").style('display','block')
      if(d==data) {
        d3.select("#tooltip .nnn3").html(pd.n3);
        d3.select("#tooltip .nnn2").text(pd.n2);
        d3.select("#tooltip .nnn1").text(pd.n1);
        d3.select("#tooltip .nnn0").text("Razdeo/Glava/Funkcija: "+pd.s1+"/"+pd.s2+"/"+pd.s3);
        d3.select("#tooltip .value").html(formatNumber(pd.size));
      }
      else if(d.s4=="") d3.select("#tooltip .nnn0").html("Ekonomska klasifikacija: "+d.s6);
      else if((d.s5=="")&&(d.s6=="")) d3.select("#tooltip .nnn0").html("Program: "+d.s4);
      else if((d.s5=="")&&(d.s6!="")) d3.select("#tooltip .nnn0").html("Program/Ekonomska klasifikacija: "+d.s4+"/"+d.s6);
      else if((d.s6=="")&&(d.s5!="")) d3.select("#tooltip .nnn0").html("Program/Projekat: "+d.s4+"/"+d.s5);
      else d3.select("#tooltip .nnn0").html("Program/Projekat/Ekonomska klasifikacija: "+d.s4+"/"+d.s5+"/"+d.s6);
      if(d!=data) {
        d3.select("#tooltip .nnn1").html(d.n4);
        d3.select("#tooltip .nnn2").html(d.n5);
        d3.select("#tooltip .nnn3").html(d.n6);
        d3.select("#tooltip .value").html(formatNumber(d.size));
      }
      d3.select("#tooltip .change").text("");
    })
    .on("mouseout",function(d,i) {
      d3.select(this)
        .style("stroke-width",0)
        .style("stroke", function(d) { return d3.rgb(fill(d.color)).darker(2); });
      d3.select("#tooltip")
        .style('display','none')});
      d3.select("#info2")
        .append("div")
        .attr("class", "nn4")
        .text("Izvori:");
      d.izvori.forEach(function(o, i) {
        d3.select("#info2").append("div").attr("class", "nn5").text(o["ek"]+"- "+o["tekst"]+":");
	d3.select("#info2").append("div").attr("class", "nn6").text(addCommas(o["iznos"]));
    });
    d3.select("#info2")
      .append("div")
      .attr("class", "nn4")
      .text("Ukupno:");
    d3.select("#info2")
      .append("div")
      .attr("class", "nn6")
      .text(addCommas(d.size));
}

function initinfo1() {
  d3.select("#svg-legenda").append("circle")
    .attr('r', this.scalesize(500000000000))
    .attr('class',"isprekidano")
    .attr('cx', 100)
    .attr('cy', 80);
  d3.select("#svg-legenda").append("circle")
    .attr('r', this.scalesize(100000000000))
    .attr('class',"isprekidano")
    .attr('cx', 100)
    .attr('cy', 55);
  d3.select("#svg-legenda").append("circle")
    .attr('r', this.scalesize(1000000000))
    .attr('class',"isprekidano")
    .attr('cx', 100)
    .attr('cy', 27);
  d3.select("#svg-legenda").append("text")
    .attr('font-family', "sans-serif")
    .attr('font-size', "10px")
    .attr('x', 77)
    .attr('y', 50)
    .text('1 milijarda');
  d3.select("#svg-legenda").append("text")
    .attr('font-family', "sans-serif")
    .attr('font-sXize', "10px")
    .attr('x', 70)
    .attr('y', 110)
    .text('100 milijardi');
  d3.select("#svg-legenda").append("text")
    .attr('font-family', "sans-serif")
    .attr('font-size', "10px")
    .attr('x', 75)
    .attr('y', 160)
    .text('500 milijardi');
}

function initinfo2() {
  d3.selectAll(".nn0")
    .remove();
  d3.selectAll(".nn1")
    .remove();
  d3.selectAll(".nn2")
    .remove();
  d3.selectAll(".nn3")
    .remove();
  d3.selectAll(".hr")
    .remove();
  d3.selectAll(".nn4")
    .remove();
  d3.selectAll(".nn5")
    .remove();
  d3.selectAll(".nn6")
    .remove();
  d3.selectAll(".svg-inset")
    .remove();
  d3.select("#info2")
    .append("div")
    .attr("class", "nn1")
    .text("STRUKTURA");
  d3.select("#info2")
    .append("div")
    .attr("class", "hr");
    
  var svg=d3.select("#info2").append("svg")
      .attr("width", 290)
      .attr("height", 570)
      .attr("class", "svg-inset");
  
  var a=1112/4,c=480/4;
  var d=930/4,e=662/4;
      
  svg.append("svg:rect")
  .attr("x", 100)
  .attr("y", 50)
  .attr("height", a)
  .attr("width", 50)
  .attr("style","fill:#2d578b;stroke-width:1;stroke:rgb(0,0,0)")
  .append("svg:title").text("Rashodi bez otplate glavnice duga: 1112 milijardi");
  
  svg.append("svg:rect")
  .attr("x", 100)
  .attr("y", 50+a)
  .attr("height", c)
  .attr("width", 50)
  .attr("style","fill:#22ff00;stroke-width:1;stroke:rgb(0,0,0)")  
  .append("svg:title").text("Otplata glavnice duga: 480 milijardi");

  svg.append("svg:rect")
  .attr("x", 170)
  .attr("y", 50)
  .attr("height", d)
  .attr("width", 50)
  .attr("style","fill:#00aadd;stroke-width:1;stroke:rgb(0,0,0)")
  .append("svg:title").text("Prihodi bez zaduživanja: 930 milijardi");
  
  svg.append("svg:rect")
  .attr("x", 170)
  .attr("y", 50+d)
  .attr("height", e)
  .attr("width", 50)
  .attr("style","fill:#ff2211;stroke-width:1;stroke:rgb(0,0,0)") 
  .append("svg:title").text("Zaduživanje: 662 milijarde");

  svg.append("svg:text")
    .attr("x", 125)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("style", "font-size: 12; font-family: Helvetica, sans-serif;font-weight:bold")
    .text("RASHODI");
              
  svg.append("svg:text")
    .attr("x", 195)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("style", "font-size: 12; font-family: Helvetica, sans-serif;font-weight:bold")
    .text("PRIHODI");


  svg.append("svg:text")
    .attr("x", 250)
    .attr("y", 70+d)
    .attr("text-anchor", "middle")
    .attr("style", "font-size: 12; font-family: Helvetica, sans-serif;font-weight:bold")
    .text("DEFICIT");

  svg.append("svg:text")
    .attr("x", 250)
    .attr("y", 85+d)
    .attr("text-anchor", "middle")
    .attr("style", "font-size: 12; font-family: Helvetica, sans-serif;font-weight:bold")
    .text("182 M");

  svg.append("svg:line")
  .attr("x1", 100)
  .attr("y1", 50+a)
  .attr("x2", 280)
  .attr("y2", 50+a)
  .attr("style","fill:#ff2211;stroke-width:1;stroke:rgb(0,0,0)");

  svg.append("svg:line")
  .attr("x1", 170)
  .attr("y1", 50+d)
  .attr("x2", 280)
  .attr("y2", 50+d)
  .attr("style","fill:#ff2211;stroke-width:1;stroke:rgb(0,0,0)");

  svg.append("circle")
    .attr('r', this.scalesize(182000000000))
    .attr('class',"isprekidano")
    .attr('cx', 160)
    .attr('cy', 510);
  svg.append("text")
    .attr("text-anchor", "middle")
    .attr('font-family', "sans-serif")
    .attr('font-size', "10px")
    .attr('x', 160)
    .attr('y', 505)
    .text('FISKALNI DEFICIT');
  svg.append("text")
    .attr("text-anchor", "middle")
    .attr('font-family', "sans-serif")
    .attr('font-size', "10px")
    .attr('x', 160)
    .attr('y', 520)
    .text('182 milijarde');

/*
  izvori.forEach(function(o, i) {
    d3.select("#info2")
      .append("div")
      .attr("class", "nn5")
      .text(o["ek"]+"- "+o["tekst"]+":");
    d3.select("#info2")
      .append("div")
      .attr("class", "nn6")
      .text(addCommas(o["iznos"]));
  });
  d3.select("#info2")
    .append("div")
    .attr("class", "nn4")
    .text("Ukupno:");
  d3.select("#info2")
    .append("div")
    .attr("class", "nn6")
    .text(addCommas(bukupno));
*/
}

function startLayout() {
  d3.select("#b1")
    .attr('class','selected');
  d3.select("#b2")
    .attr('class','');
  d3.select("#b3")
    .attr('class','');
  d3.select("#info1")
    .style('display','block');
  d3.select("#info2")
    .style('display','block');
  d3.select("#infoch")
    .style('display','none');
  d3.select("#infoinfo")
    .style('display','none');
  node.transition()
    .duration(2000)
    .attr('opacity', 1.0);
  force.stop();
  force=d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .gravity(0.01)
    .charge(0)
    .on("tick", tick)
    .start();
  node.call(force.drag);                            
}

function changeLayout() {
  d3.select("#b1")
    .attr('class','');
  d3.select("#b2")
    .attr('class','selected');
  d3.select("#b3")
    .attr('class','');
  d3.select("#info1")
    .style('display','none');
  d3.select("#info2")
    .style('display','none');
  d3.select("#infoch")
    .style('display','block');
  d3.select("#infoinfo")
    .style('display','none');
  node.transition()
    .duration(2000)
    .attr('opacity', 0.8);
  force.stop();
  force=d3.layout.force()
  .nodes(nodes)
  .gravity(0)
  .charge(0)
  .on("tick", function(e){
     node.each(changeSort(e.alpha))
       .attr("cx", function(d) { return d.x; })
       .attr("cy", function(d) { return d.y; });
  })
  .start();
  node.call(force.drag);
}

function changeSort(alpha) {
  return function(d){
    var hm=350,hw=250,ofx=50,mx=15;
    var targetY = 0;
    var targetX = 0;
    targetY = hm-hw*(d.change*4);
    targetX = ofx+mx*Number(d.s1);
    if (isNaN(targetY)) {targetY = that.centerY};
    if (targetY > (hm+hw)) {targetY = hm+hw};
    if (targetY < (hm-hw)) {targetY = hm-hw};
    d.y = d.y + (targetY - d.y) * Math.sin(Math.PI * (1 - alpha*10))*0.05;
    d.x = d.x + (targetX - d.x) * Math.sin(Math.PI * (1 - alpha*10))*0.03;
  };
}

function infoLayout() {
  d3.select("#b1")
    .attr('class','');
  d3.select("#b2")
    .attr('class','');
  d3.select("#b3")
    .attr('class','selected');
  d3.select("#info1")
    .style('display','none');
  d3.select("#info2")
    .style('display','none');
  d3.select("#infoch")
    .style('display','none');
  d3.select("#infoinfo")
    .style('display','block');
  force.stop();
  force=d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .gravity(0.01)
    .charge(0)
    .on("tick", tick_i)
    .start();
  node.call(force.drag);                            
}

