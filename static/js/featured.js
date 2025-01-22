// Example data for your template
const projects = [
  {
    title: "Resilient Communities Website",
    description:
      "NGO Website Made with Hugo + Tailwind, It Showcases what the organization Mission and Projects + has an itinerary builder for volunteer groups as well, and other cool stuff, check it out yourself ",
    tags: ["#Tailwind", "#Hugo"],
    link: "https://github.com/777leed/hugo_rc",
  },
  {
    title: "RC Tax Advisor",
    description:
      "This is a RAG bot with the knowledge base of tax forms, but the setup could be useful / customizable for anything else, it's made with Pinecone + Langchain + React for the front end made possible by @HaRaRa221 ",
    tags: ["#React", "#ExpressJs", "#Langchain", "#AI"],
    link: "https://github.com/777leed/tax_advisor_v2.0",
  },
  {
    title: "RC Monitoring App",
    description:
      "A Mobile App made to track RC interns ongoing on field projects during all phases but was repurposed urgently during the Earthquake in Morocco to be a Disaster Reflief Tracker, things such as mapping villages that were hit + their needs and population details, made with Flutter + Firebase, equipped with gps functionalities + google map  ",
    tags: ["#Flutter", "#Firebase", "#Maps API"],
    link: "https://github.com/777leed/montoring_app",
  },

  {
    title: "Vanilla Extract",
    description:
      "A note-taking / brainstorming app that's like a digital whiteboard, equipped with AI and all sort of unorthodox tools. Made with Electron + JS, HTML/CSS for all your creative needs.",
    tags: ["#ElectronJs", "#HTML/CSS"],
    link: "https://github.com/777leed/vanillaExtract",
  },
  {
    title: "Rain",
    description:
      "A SoundCloud followers tracker app built with Flask. It's simple but super handy for keeping tabs on your audience.",
    tags: ["#Flask", "#Python"],
    link: "https://github.com/777leed/Rain",
  },
  {
    title: "Vox",
    description:
      "An Obsidian plugin made with TypeScript + Whisper API. It's built to turn live voice recordings to text which was not available in Obsidian.",
    tags: ["#TypeScript", "#WhisperAPI", "#NodeJs"],
    link: "https://github.com/777leed/Vox",
  },
  {
    title: "NATIONSCAPE",
    description:
      "A flag game built with Vue.js, for testing your knowledge of flags worldwide. it's fun, I might make it multiplayer later.",
    tags: ["#Vue.js", "HTML/CSS"],
    link: "https://github.com/777leed/nationscape",
  },
  {
    title: "SYMPHONYVX",
    description:
      "A WhatsApp chatbot powered by Python + WhatsApp API + GPT. Built to handle conversations and tasks. basically chatgpt on your whatssap, not to brag but I'm pretty sure I was one of the firsts to implement this",
    tags: ["#Python", "#WhatsAppAPI", "#GPT"],
    link: "https://github.com/777leed/symvX",
  },
  {
    title: "YouTube Extensions",
    description:
      "I am a Youtube maniac so I made some Chrome extensions for easier YouTube navigation. Features include account switching, liking/disliking shortcuts, and more. Super useful for me at least!",
    tags: ["#ChromeExtensions", "Javascript", "#YouTube"],
    link: "https://github.com/777leed/My-Extensions",
  },
  {
    title: "Python Helpers",
    description:
      "Scripts mostly for language learning. Automates making Anki flashcards using Deepl API for translations, Google Sheets API, and YouTube API for subtitles. Think LingQ on a budget.",
    tags: ["#Python", "#DeeplAPI", "#GoogleSheetsAPI", "#YouTubeAPI"],
    link: "https://github.com/777leed/PyHelpers",
  },
  {
    title: "NULIFE (dead)",
    description:
      "We've all been there. This was a task + productivity mobile app made with Flutter. RIP NULIFE, you served well.",
    tags: ["#Flutter"],
    link: "https://github.com/777leed/Nulife",
  },
  {
    title: "Nine Men Morris",
    description:
      "A Nine Men Morris game made with Java + Swing for my friend (because he had no idea how to do it himself). Friendship coding at its finest.",
    tags: ["#Java", "#Swing"],
    link: "https://github.com/777leed/Nine-Mens-Morris",
  },
  {
    title: "SHELF",
    description:
      "This was made during my first internship. It's A warehouse storage products tracker for vendors (yes, the name says it all). Built with Java to keep things organized and running smoothly.",
    tags: ["#Java"],
    link: "https://github.com/777leed/SHELF",
  },
  {
    title: "PHOENIX CODE",
    description:
      "My Final year Project was an attempt to build a code learning platform it was my first project, so cut me some slack! Made with Kotlin + Firebase (it was love at first sight).",
    tags: ["#Kotlin", "#Firebase"],
    link: "https://github.com/777leed/Phoenix-Prototype-001",
  },
];

// Initialize Pagination.js
$("#pagination-container").pagination({
  dataSource: projects,
  pageSize: 8,
  callback: function (data, pagination) {
    const dataContainer = document.getElementById("data-container");
    dataContainer.innerHTML = ""; // Clear previous items
    data.forEach((project) => {
      dataContainer.innerHTML += `
        <div class="relative border border-white min-w-72 flex-1 h-48 p-4 pr-12 lg:max-w-xs hover:animate-pulse">
          <span>${project.title}</span>
          <div class="gap-4 flex flex-col justify-between">
            <p class="text-xs text-white/60 text-justify line-clamp-3">
              ${project.description}
            </p>
            <div class="flex gap-2 flex-wrap">
              ${project.tags
                .map(
                  (tag) => `
                <div class="bg-gray-300 text-black text-xs rounded-sm w-fit px-2">${tag}</div>
              `
                )
                .join("")}
            </div>
          </div>
          <a href="${project.link}" class="absolute bottom-0 right-0 p-4">
            <img src="/images/icons8/icons8-github-30.png" alt="GitHub" />
          </a>
        </div>
      `;
    });
  },
  className: "pagination-custom", // Add a custom class for styling
});
