var otherpages = '<a class="navbar-brand" href="../OpenMeInChrome.html">Comcast</a>\
</div>\
\
    <!-- Collect the nav links, forms, and other content for toggling -->\
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\
      <ul class="nav navbar-nav">\
      <li class="dropdown">\
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Current vs. Future <b class="caret"></b></a>\
          <ul class="dropdown-menu">\
            <li><a href="curr-future-state.html">Current and Future State</a></li>\
            <li class="divider"></li>\
            <li><a href="current-sysmap.html">Current State System Map</a></li>\
            <li><a href="future-sysmap.html">Future State System Map</a></li>\
          </ul>\
        </li>\
        <li><a href="scorecard.html">Balanced Scorecard</a></li>\
      </ul>'

var homepage = '<a class="navbar-brand" href="#">Comcast</a>\
</div>\
\
    <!-- Collect the nav links, forms, and other content for toggling -->\
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\
      <ul class="nav navbar-nav">\
        <li class="dropdown">\
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Current vs. Future <b class="caret"></b></a>\
          <ul class="dropdown-menu">\
            <li><a href="sourceCode/curr-future-state.html">Current and Future State</a></li>\
            <li class="divider"></li>\
            <li><a href="sourceCode/current-sysmap.html">Current State System Map</a></li>\
            <li><a href="sourceCode/future-sysmap.html">Future State System Map</a></li>\
          </ul>\
        </li>\
        <li><a href="sourceCode/scorecard.html">Balanced Scorecard</a></li>\
      </ul>'

        


var first = '\
<link href="css/bootstrap.min.css" rel="stylesheet">\
<link href="css/custom.css" rel="stylesheet">\
<link href="http://fonts.googleapis.com/css?family=PT+Sans|Bitter" rel="stylesheet" type="text/css">\
\
<script type="text/javascript" src = "js/jquery.min.js"></script>\
<script type="text/javascript" src = "js/bootstrap.min.js"></script>\
\
<nav class="navbar navbar-default" role="navigation">\
  <div class="container-fluid">\
    <!-- Brand and toggle get grouped for better mobile display -->\
    <div class="navbar-header">\
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\
        <span class="sr-only">Toggle navigation</span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
      </button>'

var last = '</div><!-- /.navbar-collapse -->\
  </div><!-- /.container-fluid -->\
</nav>\
\
<nav class="navbar navbar-default navbar-fixed-bottom" role="navigation">\
  <div class="container">\
    <p>By Fritz-Patrick Atienza, Claire Loncarich, Tilan Karunanayake, Sean Raley, Jaclyn Tseng, and Farah Zaidi</p>\
  </div>\
</nav>'

var path = window.location.pathname;
var pathArray = path.split('/');

if (pathArray[pathArray.length-1] == 'OpenMeInChrome.html')
  document.write(first + homepage + last);
else
  document.write(first + otherpages + last);