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
          <img src={gitHub} className='absolute top-3 right-3 w-8 h-8'></img>
        </a>
        <text className=' text-headerSmall md:headerMed lg:text-headerBig font-extrabold text-white select-none'>
          PopBear
        </text>
        <text className='  text-scoreSmall md:headerMed lg:text-scoreBig font-extrabold text-white select-none'>
          {score}
        </text>
      </div>
      <div className='flex items-center justify-center w-screen h-3/5'>
        <img
          src={img}
          className='w-bearSmall lg:w-bearBig h-bearSmall lg:h-bearBig select-none'
        ></img>
      </div>
    </div>
  );
}

export default App;
