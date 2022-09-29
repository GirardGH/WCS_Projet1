const header = document.querySelector(".header");

const main = document.querySelector(".main");
const sectionArray = [
  {
    title: "News",
    image: "/assets/img/bgLaputa.jpg",
    htmlSpan: "<p>Test</p>",
    htmlP: "Paragraphe",
    htmlcontent: "<h2>If I make fun of you it's because I like you someone to provide for you documentary filmmaker everything destructive that I do. But I only smoke when drinking Think about it! heyyy I despise you should message me, my last partner told me really only soft drugs friendzone looking for a third if you dress up like a pin-up doll for me. Full-contact Ayn Rand Libertarian full-contact full-contact wildly attractive doesn't hurt.If I make fun of you it's because I like you someone to provide for you documentary filmmaker everything destructive that I do. But I only smoke when drinking Think about it! heyyy I despise you should message me, my last partner told me really only soft drugs friendzone looking for a third if you dress up like a pin-up doll for me. Full-contact Ayn Rand Libertarian full-contact full-contact wildly attractive doesn't hurt.If I make fun of you it's because I like you someone to provide for you documentary filmmaker everything destructive that I do. But I only smoke when drinking Think about it! heyyy I despise you should message me, my last partner told me really only soft drugs friendzone looking for a third if you dress up like a pin-up doll for me. Full-contact Ayn Rand Libertarian full-contact full-contact wildly attractive doesn't hurt.If I make fun of you it's because I like you someone to provide for you documentary filmmaker everything destructive that I do. But I only smoke when drinking Think about it! heyyy I despise you should message me, my last partner told me really only soft drugs friendzone looking for a third if you dress up like a pin-up doll for me. Full-contact Ayn Rand Libertarian full-contact full-contact wildly attractive doesn't hurt.If I make fun of you it's because I like you someone to provide for you documentary filmmaker everything destructive that I do. But I only smoke when drinking Think about it! heyyy I despise you should message me, my last partner told me really only soft drugs friendzone looking for a third if you dress up like a pin-up doll for me. Full-contact Ayn Rand Libertarian full-contact full-contact wildly attractive doesn't hurt.</h2>"
  },
  {
    title: "Biographie",
    image: "/assets/img/bgTotoro.jpeg",
    htmlSpan: "<img src='/assets/img/Joe_Hisaishi_2011.png' alt='Joe Coker'/><h2>If I make fun of you it's because I like you someone to provide for you documentary filmmaker everything destructive that I do. But I only smoke when drinking Think about it! heyyy I despise you should message me, my last partner told me really only soft drugs friendzone looking for a third if you dress up like a pin-up doll for me. Full-contact Ayn Rand Libertarian full-contact full-contact wildly attractive doesn't hurt.If I make fun of you it's because I like you someone to provide for you documentary filmmaker everything destructive that I do. But I only smoke when drinking Think about it! heyyy I despise you should message me, my last partner told me really only soft drugs friendzone looking for a third if you dress up like a pin-up doll for me. Full-contact Ayn Rand Libertarian full-contact full-contact wildly attractive doesn't hurt.If I make fun of you it's because I like you someone to provide for you documentary filmmaker everything destructive that I do. But I only smoke when drinking Think about it! heyyy I despise you should message me, my last partner told me really only soft drugs friendzone looking for a third if you dress up like a pin-up doll for me. Full-contact Ayn Rand Libertarian full-contact full-contact wildly attractive doesn't hurt.If I make fun of you it's because I like you someone to provide for you documentary filmmaker everything destructive that I do. But I only smoke when drinking Think about it! heyyy I despise you should message me, my last partner told me really only soft drugs friendzone looking for a third if you dress up like a pin-up doll for me. Full-contact Ayn Rand Libertarian full-contact full-contact wildly attractive doesn't hurt.If I make fun of you it's because I like you someone to provide for you documentary filmmaker everything destructive that I do. But I only smoke when drinking Think about it! heyyy I despise you should message me, my last partner told me really only soft drugs friendzone looking for a third if you dress up like a pin-up doll for me. Full-contact Ayn Rand Libertarian full-contact full-contact wildly attractive doesn't hurt.</h2>",
    htmlP: "",
    htmlcontent: "<h2>Div test content</h2>"
  },
  {
    title: "Discographie",
    image: "/assets/img/bgPorco.jpg",
    htmlSpan: "",
    htmlP: "",
    htmlcontent: "<div>PARATITION</div>"
  },
  {
    title: "Rewards",
    image: "/assets/img/bgMononoke.jpg",
    htmlSpan: "",
    htmlP: "",
    htmlcontent: "<iframe>ça marche</iframe>"
  }
];

/// Creation Header ///
const divParent = document.createElement("div");
divParent.classList.add("header-wrapper");
header.appendChild(divParent);

const headerTitle = document.createElement("h1");
headerTitle.innerHTML = `Joe </br> Hisaishi`;
headerTitle.classList.add("header-title");
divParent.appendChild(headerTitle);

const headerNav = document.createElement("nav");
headerNav.classList.add("header-nav");
divParent.appendChild(headerNav);

const navUl = document.createElement("ul");
navUl.classList.add("nav-ul");
headerNav.appendChild(navUl);

for (let i = 0; i < sectionArray.length; i++) {
  const navLi = document.createElement("li");
  navLi.classList.add("nav-li");
  navUl.appendChild(navLi);

  const navA = document.createElement("a");
  navA.innerHTML = `${sectionArray[i].title}`;
  navA.href = `#${sectionArray[i].title}`;
  navA.classList.add("nav-a");
  navUl.appendChild(navA);
}
///// Fin HEADER /////

function createSection(title, imageUrl, htmlSpan, htmlP, htmlcontent) {
    const section = document.createElement("section");
    section.id = `${title}`;
    section.classList.add("section");
    main.appendChild(section);
  
    const sectionFigure = document.createElement("figure");
    sectionFigure.classList.add("image-container");
    section.appendChild(sectionFigure);
  
    const figureImg = document.createElement("img");
    figureImg.src = `${imageUrl}`;
    figureImg.alt = `Description`;
    sectionFigure.appendChild(figureImg);
  
    const articleBody = document.createElement("article");
    articleBody.classList.add("content");
    section.appendChild(articleBody);
  
    const articleTitle = document.createElement("h2");
    articleTitle.innerHTML = `${title}`;
    articleTitle.classList.add("section-title");
    articleBody.appendChild(articleTitle);

    if (htmlSpan !=="" || htmlP !== "") {
      const articleSpan = document.createElement("span");
      articleSpan.innerHTML = `${htmlSpan}`;
      articleSpan.classList.add("byline");
      articleBody.appendChild(articleSpan);

      const articleP = document.createElement("p");
      articleP.innerHTML = `${htmlP}`;
      articleBody.appendChild(articleP);
    } else {
      const articlediv = document.createElement("div");
      articlediv.innerHTML = `${htmlcontent}`;
      articlediv.classList.add("freestyle");
      articleBody.appendChild(articlediv);
    }
  }

  for (let i = 0; i < sectionArray.length; i++) {
    createSection(sectionArray[i].title, sectionArray[i].image, sectionArray[i].htmlSpan, sectionArray[i].htmlP, sectionArray[i].htmlcontent);
  }