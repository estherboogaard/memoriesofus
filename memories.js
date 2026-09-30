/*
  EASY MEMORY EDITOR
  ------------------
  To add or change a memory, edit the list below.

  Required:
    unlockDate = the date this memory should become visible (YYYY-MM-DD)
    title      = title shown after unlocking
    message    = your memory/story

  Optional:
    photo          = path to a photo, e.g. "photos/first-kiss.jpg"
    photoAlt       = short description for accessibility
    photoCaption   = text shown below the photo

  IMPORTANT:
  The unlock date is the anniversary date, not the original date.
  Example: an event from 21 September 2025 unlocks on 21 September 2026.
*/

const memories = [
  {
    unlockDate: "2026-09-21",
    title: "The day I first held your hand",
    message: "Best decision I ever made",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-09-22",
    title: "Our first text",
    message: "Ik had op zich kunnen weten dat uren wachten tot het een normaal tijdstip was om je te appen een teken was dat ik je misschien toch wel best wel leuk vond. Vanaf het moment na die wedstrijd dat je door je enkel was gegaan maakte ik me zorgen om je en wilde ik je helpen. Ik wilde je eigenlijk die avond al appen❤️",
    photo: "photos/photo.firsttext.jpg",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-09-23",
    title: "Added Snapchat",
    message: "Yes, I was trying to cheer you up. But spending this time being an idiot with you was so much fun and made me so happy. The idea that it was in any way helpful to you made me even happier. The start of me laughing more and being happier than I had ever been in my life❤️",
    photo: [
      "photos/photo.firstsnaps1.jpg",
      "photos/photo.firstsnaps2.jpg"
    ],
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-10-11",
    title: "First time at your house + sleepover",
    message: "May have been a little awkward.. but I still loved every fucking moment with you. And stop hating on my kipfilet rolls.",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-10-18",
    title: "The first time I wore your clothes",
    message: "I mean I definetely liked the shirt.. a lil extra",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-10-26",
    title: "Our first movie night",
    message: "Cuudddllessss",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-10-27",
    title: "Our first FaceTime",
    message: "The real milestone",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-11-01",
    title: "The first time you watched a livestream",
    message: "I realized something was up when Jeslyn said to me 'sinds wanneer kijkt Febe basketbal livestreams'. I felt so special",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-11-03",
    title: "Your first time in Ede",
    message: "Nee, geen boederijen. Wel een legendary filmpje that we will never forget.",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-11-10",
    title: "Sneaking out of practice for McDonald's",
    message: "What can I say",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-11-16",
    title: "“Accidentally” switching rings",
    message: "Hated that...",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-11-18",
    title: "Our first conversation",
    message: "Finally",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-11-19",
    title: "Our first kiss",
    message: "24 hours before that kiss were intens. The hour-long stare even more so. Tomorrow will be worse.",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-11-20",
    title: "The Thursday",
    message: "I don't think this needs any explanation. Felt pretty fucking unreal",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-11-29",
    title: "Our first date",
    message: "A little chaos with some sprinkles of hospital, pretty representative of our lives. Glad we still went❤️",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-12-02",
    title: "Official",
    message: "In my first car",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2026-12-25",
    title: "Our first Christmas",
    message: "",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2027-01-01",
    title: "Our first New Year's kiss",
    message: "",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2027-01-02",
    title: "Febe's birthday",
    message: "",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2027-02-20",
    title: "Our first vacation",
    message: "",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2027-05-05",
    title: "The first time moving out",
    message: "",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2027-05-12",
    title: "Telling my parents about you",
    message: "",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2027-07-29",
    title: "Our first family vacation",
    message: "",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  },
  {
    unlockDate: "2027-09-10",
    title: "Berlin",
    message: "",
    photo: "",
    photoAlt: "",
    photoCaption: ""
  }
];
