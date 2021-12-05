// Getting DOM elements
let allProjects = document.querySelector(".all-projects");

// ProjectList is already gven;
const ongoingProjects = projectsList[0];
const doneProjects = projectsList[1];

// Creating Project card
function createProjectCard(card) {
  let projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
  let projectCover = document.createElement("div");
  projectCover.classList.add("project-cover");
  let name = document.createElement("h3");
  name.innerText = card.name;
  projectCover.appendChild(name);
  let image = document.createElement("img");
  image.src = card.screenShot;
  projectCard.appendChild(projectCover);
  projectCard.appendChild(image);
  projectCard.addEventListener("click", () => {
    showDetails(card);
  });
  return projectCard;
}

// Creating ongoing projects
function addCards(check) {
  if (check == "ongoing") {
    let ongoing = document.createElement("div");
    ongoing.classList.add("ongoing");
    let title = document.createElement("h1");
    ongoing.appendChild(title);
    let projects = document.createElement("div");
    projects.classList.add("projects");
    title.innerText = "ONGOING";
    ongoingProjects.forEach((e) => {
      projects.appendChild(createProjectCard(e));
    });
    ongoing.appendChild(projects);
    allProjects.appendChild(ongoing);
  } else if (check == "done") {
    let done = document.createElement("div");
    done.classList.add("done");
    let title = document.createElement("h1");
    done.appendChild(title);
    let projects = document.createElement("div");
    projects.classList.add("projects");
    title.innerText = "DONE";
    doneProjects.forEach((e) => {
      projects.appendChild(createProjectCard(e));
    });
    done.appendChild(projects);
    allProjects.appendChild(done);
  }
}

function showDetails(card) {
  // Container
  let detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-popup-container");
  // main popup
  let detailsPopUp = document.createElement("div");
  detailsPopUp.classList.add("details-popup");
  // close button
  let closeButton = document.createElement("button");
  closeButton.innerText = "×";
  // screenshot
  let image = document.createElement("img");
  image.id = "details-screenshot";
  image.src = card.screenShot;
  // Details
  let details = document.createElement("div");
  details.classList.add("details");

  let name = document.createElement("h1");
  name.innerText = card.name;

  let description = document.createElement("p");
  description.innerText = card.dec;
  // buttons
  let buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  let repolink = document.createElement("a");
  repolink.target = "_blank";
  repolink.href = card.repolink;
  let github = document.createElement("img");
  github.src = "./icons/github.svg";

  let prototype = document.createElement("a");
  prototype.target = "_blank";
  prototype.href = card.url;
  let website = document.createElement("img");
  website.src = "./icons/prototype.svg";

  // Creating structure
  repolink.appendChild(github);
  prototype.appendChild(website);
  buttonsContainer.appendChild(repolink);
  if (card.url != "") {
    buttonsContainer.appendChild(prototype);
  }
  details.appendChild(name);
  details.appendChild(description);
  details.appendChild(buttonsContainer);
  detailsPopUp.appendChild(closeButton);
  detailsPopUp.appendChild(image);
  detailsPopUp.appendChild(details);
  detailsContainer.appendChild(detailsPopUp);

  // Close popup
  closeButton.addEventListener("click", () => {
    document.querySelector(".details-popup-container").remove();
  });

  document.querySelector("body").appendChild(detailsContainer);
}

addCards("ongoing");
addCards("done");
