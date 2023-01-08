// my age
function getAge() {
  const birthDate = new Date("1999-03-31");
  const  birthYear = birthDate.getFullYear();
  return new Date().getFullYear() - birthYear;
}

export const aboutMe = {
  title: "Let me introduce myself",
  details: [
    {
      id: 1,
      text: ` I'm Mrabet saâd, a ${getAge()} years old programmer, from Tangier Morocco 🇲🇦. `,
      icon: "🧔🏻",
    },
    {
      id: 2,
      text: " I got my bachelor's degree in Computer Engineering at 2021. ",
      icon: "🧑🏼‍🎓",
    },
    {
      id: 3,
      text: `
              I enjoy being challenged and engaging with projects that require me to work outside
              my comfort zone and knowledge set, as continuing to learn new languages and 
              development techniques.
           `,
      icon: "🎯",
    },
    {
      id: 4,
      text: " I'm fluent in many programming languages, especially in Js/Ts & Python. ",
      icon: "💻",
    },
    {
      id: 5,
      text: `
              My field of Interest are building new  Web Technologies and Products and also in 
              areas related Mobile application and Natural Language Processing.
           `,
      icon: "🔎",
    },
    {
      id: 6,
      text: `
              whenever possible, i also apply my passion for developing products with multiple 
              different frameworks and technologies, like Django, React, Angular, Vite, Redux, Node.js ...
           `,
      icon: "💭",
    },
  ],
};
