import listen from "../../images/listen/Asset 1.png";
import talk from "../../images/talk/Asset 1.png";
import read from "../../images/read/Asset 1.png";
import volunteer from "../../images/volunteer/Asset 1.png";
import cycling from "../../images/cycling/Asset 1.png";
import exercise from "../../images/exercise/Asset 1.png";
import jog from "../../images/jog/Asset 1.png";
import meditate from "../../images/meditate/Asset 1.png";
import game from "../../images/game/Asset 1.png";
import Icecream from "../../images/ice cream/Asset 1.png";
import nap from "../../images/nap/Asset 1.png";
import netflix from "../../images/netflix&chill/Asset 1.png";
import trip from "../../images/trip/Asset 1.png";

export const questions = [
  {
    questionText: "How was your day?",
    task: false,
    emoji: true,
    reward: false,
    answerOptions: [
      { id: "1", answerText: "Happy", ansEmo: "๐" },
      { id: "2", answerText: "Annoyed", ansEmo: "๐" },
      { id: "3", answerText: "Sad", ansEmo: "๐ข" },
      { id: "4", answerText: "Stressed", ansEmo: "๐ซ" },
      { id: "5", answerText: "Boring", ansEmo: "๐ช" },
    ],
  },
  {
    questionText: "Choose your fun task?",
    task: true,
    emoji: false,
    reward: false,
    answerOptions: [
      {
        id: "1", answerText: "Listen", ansEmo: '๐ถ', ansImg: listen, points: [
          "Listen to your favourite songs",
          "Music is intimately tied to our emotional memory",
          "Music increases our dopamine levels  โ the โfeel goodโ hormone"
        ]
      },
      {
        id: "2", answerText: "Talk", ansEmo: '๐ฌ', ansImg: talk, points: [
          "Call your friends",
          "Try to regularly make time with your friend",
          "Talking to someone about your feelings can help in reduction of stress",
        ]
      },
      {
        id: "3", answerText: "Read", ansEmo: '๐', ansImg: read, points: [
          "Read novels, poems and short stories",
          "Reading can be a beautiful escape from the daily routine",
          "Reading gives an opportunity to unplug from the world and a chance to rest",
        ]
      },
      {
        id: "4", answerText: "Volunteer", ansEmo: '๐โโ๏ธ', ansImg: volunteer, points: [
          "Volunteering helps counteract the effects of stress, anger, and anxiety",
          "Nothing relieves stress better than a meaningful connection to another person",
          "Volunteering is a fun and easy way to explore your interests and passions",
        ]
      },
      {
        id: "5", answerText: "Cycling", ansEmo: '๐ตโโ๏ธ', ansImg: cycling, points: [
          "Cycling lends itself quite easily to joining a group of like-minded people",
          "It promotes positive mental health",
          "It helps you sleep better",]
      },
      {
        id: "6", answerText: "Jog", ansEmo: '๐โโ๏ธ', ansImg: jog, points: [
          "Jogging can control stress",
          "Jogging lessens feelings of loneliness and isolation",
          "It also improves your memory and ability to learn",
        ]
      },
      {
        id: "7", answerText: "Meditate", ansEmo: '๐งโโ๏ธ', ansImg: meditate, points: [
          "Meditation helps in improving better focus and concentration",
          "It can improve your tolerance for pain",
          "Mindfulness meditation encourages you to slow down and allows for deeper self-reflection",
        ]
      },
      {
        id: "8", answerText: "Exercise", ansEmo: '๐๏ธโโ๏ธ', ansImg: exercise, points: [
          "Exercise is a natural and effective anti-anxiety treatment",
          "It relieves tension and stress, boosts physical and mental energy",
          "Exercise is a scientifically proven mood booster",
        ]
      },
    ],
  },
  {
    questionText: "Earn a Reward",
    task: false,
    emoji: false,
    reward: true,
    answerOptions: [
      {
        id: "1", answerText: "Game", ansEmo: "๐ฎ", ansImg: game, points: [
          "Enjoy playing your favourite games",
          "Video games can improve manual dexterity",
        ]
      },
      {
        id: "2", answerText: "Netflix", ansEmo: "๐ฌ", ansImg: netflix, points: [
          "Watch your favourite series/movies",
          "It will help you cope with stress",
        ]
      },
      {
        id: "3", answerText: "Icecream", ansEmo: "๐ฆ", ansImg: Icecream, points: [
          "Reward yourself with your favourite icecream",
          "Ice cream stimulates the thrombotonin, which is a hormone of happiness",
        ]
      },
      {
        id: "4", answerText: "Nap", ansEmo: "๐ด", ansImg: nap, points: [
          "Nothing is better than a peaceful nap",
          "Sleep can boost your immune system",
        ]
      },
      {
        id: "5", answerText: "Trip", ansEmo: "โบ", ansImg: trip, points: [
          "Forget your worries with a short trip to beach/mountains",
          "Exposure to nature will make you feel better both emotionally and physically"
        ]
      },
    ],
  },
];
