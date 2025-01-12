import {isArtistAnswerCorrect, isGenreAnswerCorrect} from '../game';
import {GameType} from '../const';

export const ActionType = {
  INCREMENT_MISTAKES: 'game/incrementMistake',
  INCREMENT_STEP: 'game/incrementStep',
  RESET_GAME: 'game/reset',
};

export const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),
  resetGame: () => ({
    type: ActionType.RESET_GAME,
  }),
  incrementMistake: (question, userAnswer) => {
    let answerIsCorrect;

    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case GameType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
      default:
        answerIsCorrect = false;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  },
};
