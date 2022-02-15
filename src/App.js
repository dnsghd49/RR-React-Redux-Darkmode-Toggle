import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { triggerThunk, clearBtn, nextBtn, backBtn } from "./features/dataSlice"

function App() {
  // your logic goes here!
  const dispatch = useDispatch()
  const gallery = useSelector((state) => state.data.value)

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(triggerThunk())}>Trigger Thunk</button>
        <button onClick={() => dispatch(clearBtn())}>Clear</button>
        <button onClick={() => dispatch(nextBtn())}>Next</button>
        <button onClick={() => dispatch(backBtn())}>Back</button>
      </div>
      <input onChange={(e) => dispatch()} />
      <div>
        {gallery}
      </div>
    </div>
  );
}

export default App;
