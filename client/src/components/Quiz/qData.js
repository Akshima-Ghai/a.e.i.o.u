export const questions = [
    {
        questionText: 'How was your day?',
        task: false,
        emoji: true,
        reward: false,
        answerOptions: [
            { id: '1', answerText: 'Happy', ansImg: '' },
            { id: '2', answerText: 'Annoyed', ansImg: '' },
            { id: '3', answerText: 'Sad', ansImg: '' },
            { id: '4', answerText: 'Stressed', ansImg: '' },
            { id: '5', answerText: 'Boring', ansImg: '' },
        ],
    },
    {
        questionText: 'Choose your fun task?',
        task: true,
        emoji: false,
        reward: false,
        answerOptions: [
            { id: '1', answerText: 'Listen', ansImg: '' },
            { id: '2', answerText: 'Talk', ansImg: '' },
            { id: '3', answerText: 'Read', ansImg: '' },
            { id: '4', answerText: 'Volunteering', ansImg: '' },
            { id: '5', answerText: 'Cycling', ansImg: '' },
        ],
    },
    {
        questionText: 'Earn a Reward',
        task: false,
        emoji: false,
        reward: true,
        answerOptions: [
            { id: '1', answerText: 'Game', ansImg: '' },
            { id: '2', answerText: 'Netflix & Chill', ansImg: '' },
            { id: '3', answerText: 'Icecream', ansImg: '' },
            { id: '4', answerText: 'Nap', ansImg: '' },
            { id: '5', answerText: 'Trip', ansImg: '' },
        ],
    },
];