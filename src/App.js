import { useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import normalBear from "./images/normalBear.png";
import smileBear from "./images/smileBear.png";
import gitHub from "./images/GitHub.png";
import useSound from "use-sound";
import { useLongPress } from "use-long-press";
import pop from "./sounds/POP.mp3";
function App() {
  const [score, setScore] = useState(0);
  const [img, setImg] = useState(normalBear);
  const [enabled, setEnabled] = useState(true);
  const [play] = useSound(pop);
  const callback = useCallback((event) => {
    // alert("Long pressed!");
  }, []);

  const bind = useLongPress(enabled ? callback : null, {
    onStart: (event) => HandleDamage(),
    onFinish: (event) => HandleImg(),
    onCancel: (event) => HandleImg(),
    threshold: 150,
    captureEvent: true,
    cancelOnMovement: false,
    detect: "both",
  });

  const HandleDamage = () => {
    setImg(smileBear);
  };

  const HandleScore = () => {
    setScore(score + 1);
    play();
  };

  const HandleImg = () => {
    setImg(normalBear);
  };
  return (
    <div
      className='flex flex-col items-center w-screen h-screen bg-blue-400 overscroll-auto'
      {...bind}
      onClick={HandleScore}
    >
      <div className='flex flex-col items-center justify-center w-screen h-2/5'>
        <a href='https://github.com/soon-404/PopBear'>
          <img src={gitHub} className='absolute w-8 h-8 top-3 right-3'></img>
        </a>
        <text className='font-extrabold text-white select-none text-headerSmall md:headerMed lg:text-headerBig'>
          PopBear
        </text>
        <text className='font-extrabold text-white select-none text-scoreSmall md:headerMed lg:text-scoreBig'>
          {score}
        </text>
      </div>
      <div className='flex items-center justify-center w-screen h-3/5'>
        <img src={img} className='w-64 h-64 select-none sm:w-96 sm:h-96'></img>
      </div>
    </div>
  );
}

export default App;
