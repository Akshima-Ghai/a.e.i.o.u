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
      { id: "1", answerText: "Happy", ansEmo: "😁" },
      { id: "2", answerText: "Annoyed", ansEmo: "😑" },
      { id: "3", answerText: "Sad", ansEmo: "😢" },
      { id: "4", answerText: "Stressed", ansEmo: "😫" },
      { id: "5", answerText: "Boring", ansEmo: "😪" },
    ],
  },
  {
    questionText: "Choose your fun task?",
    task: true,
    emoji: false,
    reward: false,
    answerOptions: [
      { id: "1", answerText: "Listen", ansEmo: "🎶", ansImg: listen, points: ["Listen", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "2", answerText: "Talk", ansEmo: "👬", ansImg: talk, points: ["Talk", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "3", answerText: "Read", ansEmo: "📙", ansImg: read, points: ["Read", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "4", answerText: "Volunteer", ansEmo: "🙋‍♂️", ansImg: volunteer, points: ["Volunteer", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "5", answerText: "Cycling", ansEmo: "🚵‍♀️", ansImg: cycling, points: ["Cycling", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "6", answerText: "Jog", ansEmo: "🏃‍♂️", ansImg: jog, points: ["Jog", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "7", answerText: "Meditate", ansEmo: "🧘‍♀️", ansImg: meditate, points: ["Meditate", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "8", answerText: "Exercise", ansEmo: "🏋️‍♀️", ansImg: exercise, points: ["Exercise", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
    ],
  },
  {
    questionText: "Earn a Reward",
    task: false,
    emoji: false,
    reward: true,
    answerOptions: [
      { id: "1", answerText: "Game", ansEmo: "🎮", ansImg: game, points: ["Game", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "2", answerText: "Netflix", ansEmo: "🎬", ansImg: netflix, points: ["Netflix", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "3", answerText: "Icecream", ansEmo: "🍦", ansImg: Icecream, points: ["Ice Cream", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "4", answerText: "Nap", ansEmo: "😴", ansImg: nap, points: ["Nap", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
      { id: "5", answerText: "Trip", ansEmo: "⛺", ansImg: trip, points: ["Trip", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
    ],
  },
];
