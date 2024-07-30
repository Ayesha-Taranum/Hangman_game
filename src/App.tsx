import { useCallback, useEffect, useState } from 'react';
import words from './wordList.json';
import HangmanStage from './component/HangmanStage';
import WordDisplay from './component/WordDisplay';
import GuessKeyboard from './component/GuessKeyboard';
import { Toaster, toast } from 'react-hot-toast';

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessLetters, setGuessLetters] = useState<string[]>([]);

  const incorrectLetters = guessLetters.filter(
      letter => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
      .split('')
      .every(letter => guessLetters.includes(letter));

  const addGuessLetter = useCallback((letter: string) => {
    if (guessLetters.includes(letter) || isLoser || isWinner) {
      return;
    } else {
      setGuessLetters(currentLetters => [...currentLetters, letter]);
    }
  }, [guessLetters, isLoser, isWinner]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) {
        return;
      } else {
        e.preventDefault();
        addGuessLetter(key);
      }
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessLetters]);

  useEffect(() => {
    if (isWinner) {
      toast('Congratulations, you won!', {
        icon: '👏',
        duration: 5000
      });
    }
  }, [isWinner]);

  useEffect(() => {
    if (isLoser) {
      toast.error('You lost', {
        duration: 5000
      });
    }
  }, [isLoser, wordToGuess]);

  const resetGame = () => {
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
    setGuessLetters([]);
  };

  return (
      <div className='bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-200 via-blue-200 to-purple-200 h-screen'>
        <div className='font-adlam max-w-3xl flex items-center flex-col gap-8 mx-auto pt-12'>
          <Toaster/>
          <HangmanStage numberOfGuess={incorrectLetters.length}/>
          <WordDisplay
              result={isLoser}
              guessLetters={guessLetters}
              wordToGuess={wordToGuess}
          />
          <div className='self-stretch'>
            <GuessKeyboard
                disabled={isWinner || isLoser}
                activeLetter={guessLetters.filter(letter => wordToGuess.includes(letter))}
                inactiveLetter={incorrectLetters}
                addGuessLetter={addGuessLetter}
            />
          </div>

          <div className="flex rounded-full mx-auto bg-indigo-100 shadow-lg">
            <button onClick={resetGame}
                    className="flex-1 font-bold text-xl bg-white px-6 py-1 rounded-full hover:bg-indigo-200 hover:text-indigo-600">
              Reset Game
            </button>
          </div>
        </div>
      </div>
  );
}

export default App;
