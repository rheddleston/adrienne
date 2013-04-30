var fontsLoaded = false;
var bgLoaded = false;     

WebFontConfig = {
  google: { families: [ 'Text Me One:n4' ] },
  // font successfully loaded
  fontactive: function(fontFamily, fontDescription) {
    fontsLoaded = true;
    render();
  },
  // font failed to load
  fontinactive: function(fontFamily, fontDescription) {
    fontsLoaded = true;
    render();
  }
};

function render() {
  if(!fontsLoaded || !bgLoaded) {
    return;
  }
  $("#greeting").css("opacity", 1);
  $("h2").css("opacity", 1);
  $("#links").css("opacity", 1);
  $("h3").css("opacity", 1);
  $("h4").css("opacity", 1);
  $("div.linkContainer").css("opacity", 1);
}

var backgrounds = [
  {
    label : "monterey bay",
    greetingColor : "#000",
    image : "images/Jellies_at_monterey_bay_aq.jpg",
    caption: "monterey bay",
    captionLink : "http://en.wikipedia.org/wiki/Monterey_Bay",
    captionColor : "#FFF",
    linksColor : "#FFF"
  },
  {
    label : "monterey bay",
    greetingColor : "#FFF",
    image : "images/Monterey-Bay-State-Park.jpg",
    caption: "monterey bay",
    captionLink : "http://en.wikipedia.org/wiki/Monterey_State_Historic_Park",
    captionColor : "#FFF",
    linksColor : "#FFF"
  },
  {
    label : "st maarten",
    greetingColor : "#000",
    image : "images/SAMPSON_BAY_ST_MAARTEN.jpg",
    caption : "st maarten", 
    captionLink : "http://en.wikipedia.org/wiki/Saint_Martin",
    captionColor : "#FFF",
    linksColor : "#FFF"
  },
  {
    label : "market and 10th",
    greetingColor : "#000",
    image : "images/sf_market_and_10th.jpg",
    caption : "market & 10th", 
    captionLink : "https://maps.google.com/maps?q=market+and+10th,+sf,+ca&hl=en&sll=37.269174,-119.306607&sspn=12.3355,21.928711&hnear=Market+St+%26+10th+St,+San+Francisco,+California&t=m&z=16",
    captionColor : "#FFF",
    linksColor : "#FFF"
  },
  {
    label : "san francisco",
    greetingColor : "#FFF",
    image : "images/sf.jpg",
    caption : "mt davidson", 
    captionLink : "http://en.wikipedia.org/wiki/Mount_Davidson_(California)",
    captionColor : "#FFF",
    linksColor : "#FFF"
  }
];

function setBackground() {
  var greeting = "welcome to a little view of ";
  var backgroundInfo = backgrounds[Math.floor(Math.random()*backgrounds.length)];
  greeting += backgroundInfo.label;
  $("div#greeting").css("color", backgroundInfo.greetingColor);
  $("#greeting span").attr("title", greeting);             
  $("#greeting span").css("borderBottom", "1px solid " + backgroundInfo.greetingColor);
  var link = $("#bgCap a");
  link.attr("href", backgroundInfo.captionLink);
  link.html(backgroundInfo.caption);        
  link.css("color", backgroundInfo.captionColor);
  $("#links").css("color", backgroundInfo.linksColor);
  $("#links a").css("color", backgroundInfo.linksColor);
  $("#links span").css("borderBottom", "1px solid " + backgroundInfo.linksColor);
  // attempt to pre-load the desired image
  var img = document.createElement("img");
  img.id = "background";
  img.src = backgroundInfo.image;
  $(img).load(function() { 
    bgLoaded = true;
    // bring in the background as soon as it's loaded
    $("div#bg").css("backgroundImage", "url(" + backgroundInfo.image + ")");
    $("div#bg").css("opacity", 1);
    render();
  });
}

// setup
setBackground();