// Getting DOM elements
let allProjects = document.querySelector(".all-projects");

// ProjectList is already gven;
const ongoingProjects = projectsList[0];
const doneProjects = projectsList[1];

// Creating Project card
function createProjectCard(card) {
  let projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
  projectCard.id = card.name;
  let projectCover = document.createElement("div");
  projectCover.classList.add("project-cover");
  let name = document.createElement("h3");
  name.innerText = card.name;
  projectCover.appendChild(name);
  let image = document.createElement("img");
  image.src = card.screenShot;
  projectCard.appendChild(projectCover);
  projectCard.appendChild(image);
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

addCards("ongoing");
addCards("done");
// console.log(doneProjects);
