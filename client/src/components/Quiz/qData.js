import happyE from "../../images/emotions/Asset 1.png";
import sadE from "../../images/emotions/Asset 2.png";
import annoyedE from "../../images/emotions/Asset 3.png";
import stressedE from "../../images/emotions/Asset 5.png";
import boringE from "../../images/emotions/Asset 6.png";
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
      { id: "1", answerText: "Happy", ansImg: happyE },
      { id: "2", answerText: "Annoyed", ansImg: annoyedE },
      { id: "3", answerText: "Sad", ansImg: sadE },
      { id: "4", answerText: "Stressed", ansImg: stressedE },
      { id: "5", answerText: "Boring", ansImg: boringE },
    ],
  },
  {
    questionText: "Choose your fun task?",
    task: true,
    emoji: false,
    reward: false,
    answerOptions: [
      { id: "1", answerText: "Listen", ansImg: listen, points: ["Listen", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "2", answerText: "Talk", ansImg: talk, points: ["Talk", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "3", answerText: "Read", ansImg: read, points: ["Read", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "4", answerText: "Volunteer", ansImg: volunteer, points: ["Volunteer", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "5", answerText: "Cycling", ansImg: cycling, points: ["Cycling", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "6", answerText: "Jog", ansImg: jog, points: ["Jog", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "7", answerText: "Meditate", ansImg: meditate, points: ["Meditate", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "8", answerText: "Exercise", ansImg: exercise, points: ["Exercise", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
    ],
  },
  {
    questionText: "Earn a Reward",
    task: false,
    emoji: false,
    reward: true,
    answerOptions: [
      { id: "1", answerText: "Game", ansImg: game },
      { id: "2", answerText: "Netflix & Chill", ansImg: netflix },
      { id: "3", answerText: "Icecream", ansImg: Icecream },
      { id: "4", answerText: "Nap", ansImg: nap },
      { id: "5", answerText: "Trip", ansImg: trip },
    ],
  },
];
