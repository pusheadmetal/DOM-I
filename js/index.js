const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let aTags = document.getElementsByTagName("a");
let aTagsTotal = aTags.length;

for (let i = 0; i < aTagsTotal; i++){
  aTags[i].innerText = siteContent["nav"][`nav-item-${i+1}`];
}

//Turn Green

  let bgColor = "green";

  let getNav = document.getElementsByTagName("nav");
  getNav[0].style["background-color"] = bgColor;

//Stretch

  document.getElementsByTagName("button")[0].onclick = function(){
    if ( getNav[0].style["background-color"] === "green"){
      getNav[0].style["background-color"] = "red";
    }else{
      getNav[0].style["background-color"] = "green";
    }
  };

//Add New items

  let newAnchorTag = document.createElement("a");
  let newTextNode = document.createTextNode("Goodies");

  newAnchorTag.appendChild(newTextNode);
  getNav[0].appendChild(newAnchorTag);

  let anotherNewAnchorTag = document.createElement("a");
  let anotherNewTextNode = document.createTextNode("Gadgets");

  anotherNewAnchorTag.appendChild(anotherNewTextNode);
  getNav[0].prepend(anotherNewAnchorTag);

//CTA Start

  let getCTA = document.getElementsByClassName("cta-text");
  getCTA[0].getElementsByTagName("h1")[0].innerText = siteContent["cta"]["h1"];
  getCTA[0].getElementsByTagName("button")[0].innerText = siteContent["cta"]["button"];
  document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

//CTA End

//Main Start
  //Top Start

    let topContent = document.getElementsByClassName("top-content");
    topContent[0].getElementsByClassName("text-content")[0].getElementsByTagName("h4")[0].innerText = siteContent["main-content"]["features-h4"];
    topContent[0].getElementsByClassName("text-content")[0].getElementsByTagName("p")[0].innerText = siteContent["main-content"]["features-content"];
    topContent[0].getElementsByClassName("text-content")[1].getElementsByTagName("h4")[0].innerText = siteContent["main-content"]["about-h4"];
    topContent[0].getElementsByClassName("text-content")[1].getElementsByTagName("p")[0].innerText = siteContent["main-content"]["about-content"];

  //Top End
  //Middle Start

    document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

  //Middle End
  //Bottom Start

    let bottomContent = document.getElementsByClassName("bottom-content");
    bottomContent[0].getElementsByClassName("text-content")[0].getElementsByTagName("h4")[0].innerText = siteContent["main-content"]["services-h4"];
    bottomContent[0].getElementsByClassName("text-content")[0].getElementsByTagName("p")[0].innerText = siteContent["main-content"]["services-content"];
    bottomContent[0].getElementsByClassName("text-content")[1].getElementsByTagName("h4")[0].innerText = siteContent["main-content"]["product-h4"];
    bottomContent[0].getElementsByClassName("text-content")[1].getElementsByTagName("p")[0].innerText = siteContent["main-content"]["product-content"];
    bottomContent[0].getElementsByClassName("text-content")[2].getElementsByTagName("h4")[0].innerText = siteContent["main-content"]["vision-h4"];
    bottomContent[0].getElementsByClassName("text-content")[2].getElementsByTagName("p")[0].innerText = siteContent["main-content"]["vision-content"];

  //Bottom End
  //Contact Start

    let getContact = document.getElementsByClassName("contact");
    getContact[0].getElementsByTagName("h4")[0].innerText = siteContent["contact"]["contact-h4"];
    getContact[0].getElementsByTagName("p")[0].innerText = siteContent["contact"]["address"];
    getContact[0].getElementsByTagName("p")[1].innerText = siteContent["contact"]["phone"];
    getContact[0].getElementsByTagName("p")[2].innerText = siteContent["contact"]["email"];

  //Contact End
  //Footer Start

    let getFooter = document.getElementsByTagName("footer");
    getFooter[0].getElementsByTagName("p")[0].innerText = siteContent["footer"]["copyright"];

  //Footer End