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

for (let i = 0; i < team.length; i++) {
    userInfos = team[i];
    //console.log(userInfos.name, userInfos.role, userInfos.image);
    const domElement = document.querySelector("div");
    domElement.innerHTML += `Name: ${userInfos.name}<br><br>Job: ${userInfos.role}<br><br><img src = "img/${userInfos.image}"><br><br>`;
}