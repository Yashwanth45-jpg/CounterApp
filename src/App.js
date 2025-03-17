import "./App.css";
import {useState} from 'react'
function App() {
  const [count, setCount] = useState(0);

  function ResetHandler() {
    setCount(0);
  }

  function IncreaseHandler() {
    setCount(count+1);
  }

  function DecreaseHandler() {
    if(count === 0) {
      return;
    }
    else{
      setCount(count-1);
    }
  }

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
      <div className='text-[#0398d4] font-medium text-2xl'>Icrement and Decrement</div>
      <div className='w-[] h-[] bg-white flex flex-row justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
        <button onClick={DecreaseHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          -
        </button>
        <div className='font-bold gap-12 text-5xl'>
          {count}
        </div>
        <button onClick={IncreaseHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          +
        </button>
      </div>
      <button onClick={ResetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>
        reset
      </button>
    </div>
  );
}

export default App;
