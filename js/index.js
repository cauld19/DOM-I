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

/* nav */

let navBar = document.querySelectorAll('header nav a');
navBar[0].textContent = siteContent['nav']['nav-item-1']
navBar[1].textContent = siteContent['nav']['nav-item-2']
navBar[2].textContent = siteContent['nav']['nav-item-3']
navBar[3].textContent = siteContent['nav']['nav-item-4']
navBar[4].textContent = siteContent['nav']['nav-item-5']
navBar[5].textContent = siteContent['nav']['nav-item-6']

navBar.forEach((item) => {
  item.style.color = 'green';
})




let newATag = document.querySelector('header nav')

let newNav = document.createElement('a');
newNav.textContent = "Mystery";

let newNav2 = document.createElement('a');
newNav2.textContent = "Trial";

newATag.appendChild(newNav);

newATag.prepend(newNav2);

newNav.style.color = 'green';
newNav2.style.color = 'green';

/* cta */

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = '../img/header-img.png';

let ctaText = document.querySelector('h1');
ctaText.textContent = siteContent['cta']['h1'];

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];


/* main content */

let mainContentHeader = document.querySelectorAll('.main-content .text-content h4');
mainContentHeader[0].textContent = siteContent['main-content']['features-h4']
mainContentHeader[1].textContent = siteContent['main-content']['about-h4']

let middleImg = document.querySelector('#middle-img');
middleImg.src = '../img/mid-page-accent.jpg';

let mainContentText = document.querySelectorAll('.main-content .text-content p');
mainContentText[0].textContent = siteContent['main-content']['features-content']
mainContentText[1].textContent = siteContent['main-content']['about-content']

/* bottom content*/

let bottomContentHeader = document.querySelectorAll('.bottom-content .text-content h4');
bottomContentHeader[0].textContent = siteContent['main-content']['services-h4']
bottomContentHeader[1].textContent = siteContent['main-content']['product-h4']
bottomContentHeader[2].textContent = siteContent['main-content']['vision-h4']

let bottomContentText = document.querySelectorAll('.bottom-content .text-content p');
bottomContentText[0].textContent = siteContent['main-content']['services-content']
bottomContentText[1].textContent = siteContent['main-content']['product-content']
bottomContentText[2].textContent = siteContent['main-content']['vision-content'];

/* contact */

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4']
let contactText = document.querySelectorAll('.contact p');
contactText[0].textContent = siteContent['contact']['address']
contactText[1].textContent = siteContent['contact']['phone']
contactText[2].textContent = siteContent['contact']['email']

/* footer */

let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright']

