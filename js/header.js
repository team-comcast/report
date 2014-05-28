document.write('\
<link href="/css/bootstrap.min.css" rel="stylesheet">\
<link href="/css/custom.css" rel="stylesheet">\
<link href="http://fonts.googleapis.com/css?family=PT+Sans|Bitter" rel="stylesheet" type="text/css">\
\
<script type="text/javascript" src = "/js/jquery.min.js"></script>\
<script type="text/javascript" src = "/js/bootstrap.min.js"></script>\
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
      </button>\
    <a class="navbar-brand" href="/">Comcast</a>\
</div>\
\
    <!-- Collect the nav links, forms, and other content for toggling -->\
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\
      <ul class="nav navbar-nav">\
        <li><a href="business-probs.html">Business Problems</a></li>\
        <li class="dropdown">\
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Root Cause Analyses <b class="caret"</b></a>\
          <ul class="dropdown-menu">\
            <li class="dropdown-header">Poor Customer Interactions</li>\
            <li><a href="fishbone1.html">Repeat Calls</a></li>\
            <li><a href="fishbone2.html">Long Hold Times</a></li>\
            <li class="divider"></li>\
            <li class="dropdown-header">Consumption Model</li>\
            <li><a href="fishbone3.html">Dissatisfaction of Model</a></li>\
          </ul>\
        </li>\
        <li class="dropdown">\
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Current vs. Future <b class="caret"></b></a>\
          <ul class="dropdown-menu">\
            <li><a href="curr-future-state.html">Current and Future State</a></li>\
            <li class="divider"></li>\
            <li><a href="current-sysmap.html">Current State System Map</a></li>\
            <li><a href="future-sysmap.html">Future State System Map</a></li>\
          </ul>\
        </li>\
        <li><a href="mental-models.html">Mental Models</a></li>\
        <li><a href="scorecard.html">Balanced Scorecard</a></li>\
      </ul>\
    </div><!-- /.navbar-collapse -->\
  </div><!-- /.container-fluid -->\
</nav>\
\
<nav class="navbar navbar-default navbar-fixed-bottom" role="navigation">\
  <div class="container">\
    <p>By Fritz-Patrick Atienza, Claire Loncarich, Tilan Karunanayake, Sean Raley, Jaclyn Tseng, and Farah Zaidi</p>\
  </div>\
</nav>');