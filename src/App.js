import { useState, useCallback } from "react";
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
      className='flex flex-col justify-center items-center w-full h-full bg-blue-400 absolute inset-0'
      {...bind}
      onClick={HandleScore}
    >
      <a href='https://github.com/soon-404/PopBear'>
        <img src={gitHub} className='absolute top-3 right-3 w-8 h-8'></img>
      </a>
      <text className=' top-10 text-5xl md:text-7xl font-extrabold text-white mb-10'>
        PopBear
      </text>
      <text className=' top-40 text-4xl md:text-6xl font-extrabold text-white'>
        {score}
      </text>
      <img
        src={img}
        className='w-bearSmall md:w-bearBig h-bearSmall md:h-bearBig'
      ></img>
      <text className='text-sm md:text-lg text-white absolute bottom-3'>
        soon-404
      </text>
    </div>
  );
}

export default App;
