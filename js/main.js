const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];
console.log(team)

let userInfos = "";
const teamContainer = document.querySelector(".team-container");
console.log(teamContainer);

for (let i = 0; i < team.length; i++) {
    userInfos = team[i];
    //console.log(userInfos.name, userInfos.role, userInfos.image);
    const domElement = document.querySelector("div");
    generateCard();
}



function generateCard () {
    const teamCard = document.createElement("div");
    teamCard.classList.add("team-card");
    const cardImg = document.createElement("div");
    cardImg.classList.add("card-image");
    cardImg.innerHTML = `<img src = "img/${userInfos.image}"/>`;
    teamCard.append(cardImg);
    const cardTxt = document.createElement("div");
    cardTxt.classList.add("card-text");
    teamCard.append(cardTxt);
    const title = document.createElement("h3");
    title.innerHTML = `${userInfos.name}`;
    const p = document.createElement("p");
    p.innerHTML = `${userInfos.role}`;
    cardTxt.append(title, p);
    teamContainer.append(teamCard);
}   
