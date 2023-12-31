import React from 'react';

import { useQuiz } from '../context/QuizContext';

const Progress = () => {
    const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

    return (
        <header className="progress">
            <progress value={index + Number(answer !== null)} max={numQuestions} />
            <p>Question <strong>{index}</strong> / {numQuestions}</p>
            <p><strong>{points}</strong> / {maxPossiblePoints}</p>
        </header>
    );
}

export default Progress;
