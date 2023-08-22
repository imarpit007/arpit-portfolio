const projects = [
  {
    id: 1,
    title: "BHPS's Mycreatehealth",
    live: "https://www.mycreatehealth.com/secure/employee/login",
    img: "assets/projects/bhps2.png",
    techs: ["JavaScript", "Angular", "AWS", "Nodejs" ,"HTML", "CSS", "Ionic"],
    description:
      "This app is used to provide health card, insurances and benifits, claims, prescriptions, coverage summary, QLE and other benifits to US resident patient through web and mobile application",
  },
  {
    id: 2,
    title: "Ripple CRM",
    live: "http://www.ripplecrm.com/",
    img: "assets/projects/ripplecrm1.png",
    techs: ["JavaScript", "Angular", "AWS", "Nodejs" ,"HTML", "CSS"],
    description:
      "This website was developed for Lead & Client Management, Workflow Automation, Customer Service, Employee Tracking, Collecting Real-time data, CRM analytics, Reporting, Event Management and Email Campaining.",
  },
  {
    id: 3,
    title: "Paciolo",
    live: "https://www.paciolo.com/",
    img: "assets/projects/paciolo.png",
    techs: ["JavaScript", "Angular", "AWS", "Nodejs" ,"HTML", "CSS"],
    description:
      "Paciolo  is  a  cloud-based  software  that  offers  services  for  electronic  invoices,  recurring  payments,  data  analysis,  andwarehouse management.",
  },
  {
    id: 4,
    title: "Saferwatchapp",
    live: "https://www.saferwatchapp.com/",
    img: "assets/projects/saferwatchapp.png",
    techs: ["JavaScript", "Angular", "AWS", "Nodejs" ,"HTML", "CSS"],
    description:
      "This was a web and mobile based security system that was built to provide higher level of safety. It send texts, photos,video and audio files in real time to Law Enforcement.",
  },
  {
    id: 5,
    title: "WePropertyOwners (WePo)",
    live: "https://wepropertyowners.com/",
    img: "assets/projects/wepropertyowners.png",
    techs: ["JavaScript", "Angular", "AWS", "Nodejs" ,"HTML", "CSS"],
    description:
      "WePropertyOwners (WePo) is a comprehensive global listing platform for physical real estate properties, personal assetsand tokenized crypto-assets that current owners can either sell in whole or in a part via fractional share ownerships.",
  },
  {
    id: 6,
    title: "WeCoOwn (We Co-owners)",
    live: "https://wecoown.com/",
    img: "assets/projects/wecoown.png",
    techs: ["JavaScript", "Angular", "AWS", "Nodejs" ,"HTML", "CSS"],
    description:
      "While WeCoOwn is a social community platform, where sellers can list for free to sell or lease their properties. Members caneasily find and recruit for free other like-minded co-buyers to research, purchase, and manage a real estate propertytogether.",
  },
];

const parentElement = document.querySelector(".carousel");

projects.forEach((project) => {
  const { title, live, img, techs, description } = project;

  // Create slide container
  const slideContainer = document.createElement("div");
  slideContainer.classList.add(
    "slide",
    "grid",
    "grid-template-columns-2",
    "gap-3"
  );

  // Create project image link
  const imageLink = document.createElement("a");
  imageLink.classList.add("project-img");
  imageLink.href = live;
  imageLink.target = "_blank";
  imageLink.rel = "noopener noreferrer";

  // Create project image
  const image = document.createElement("img");
  image.src = img;
  image.alt = `${title} Image`;

  // Append image to image link
  imageLink.appendChild(image);

  // Create project description container
  const projectDescription = document.createElement("div");
  projectDescription.classList.add("project-description");

  // Create project title
  const projectTitle = document.createElement("h4");
  projectTitle.textContent = title;

  // Create project description text
  const projectText = document.createElement("p");
  projectText.classList.add("section-text");
  projectText.textContent = description;

  // Create technology list
  const techList = document.createElement("ul");
  techList.classList.add("tech-use");

  // Create technology list items
  techs.forEach((tech) => {
    const techItem = document.createElement("li");
    techItem.textContent = tech;
    techList.appendChild(techItem);
  });

  // Create project links container
  const projectLinks = document.createElement("div");
  projectLinks.classList.add(
    "project-links",
    "flex",
    "align-items-center"
  );

  // Create source code link
  const sourceCodeLink = document.createElement("a");
  sourceCodeLink.classList.add("project-link");
  sourceCodeLink.title = "Source Code";
  sourceCodeLink.target = "_blank";
  sourceCodeLink.rel = "noopener noreferrer";

  // Create source code icon
  const sourceCodeIcon = document.createElement("i");
  sourceCodeIcon.classList.add("fa-brands", "fa-lg");

  // Append source code icon to source code link
  sourceCodeLink.appendChild(sourceCodeIcon);

  // Create live demo link
  const liveDemoLink = document.createElement("a");
  liveDemoLink.classList.add("project-link");
  liveDemoLink.title = "Live Demo";
  liveDemoLink.href = live;
  liveDemoLink.target = "_blank";
  liveDemoLink.rel = "noopener noreferrer";

  // Create live demo icon
  const liveDemoIcon = document.createElement("i");
  liveDemoIcon.classList.add("fa-solid", "fa-arrow-up-right-from-square");

  // Append live demo icon to live demo link
  liveDemoLink.appendChild(liveDemoIcon);

  // Append all elements to project links container
  projectLinks.appendChild(sourceCodeLink);
  projectLinks.appendChild(liveDemoLink);

  // Append all elements to project description container
  projectDescription.appendChild(projectTitle);
  projectDescription.appendChild(projectText);
  projectDescription.appendChild(techList);
  projectDescription.appendChild(projectLinks);

  // Append image link and project description container to slide container
  slideContainer.appendChild(imageLink);
  slideContainer.appendChild(projectDescription);

  // Append slide container to desired parent element
  parentElement.appendChild(slideContainer);
});
