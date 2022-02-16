import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { triggerThunk, clearBtn, nextBtn, backBtn, inputAct } from "./features/dataSlice"

function App() {
  // your logic goes here!
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const renderImg = () => {
    if (data.apiData) {
      return <img style={{ 'width': '100vw' }} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>image here</p>
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(triggerThunk())}>Trigger Thunk</button>
        <button onClick={() => dispatch(clearBtn())}>Clear</button>
        <button onClick={() => dispatch(nextBtn())}>Next</button>
        <button onClick={() => dispatch(backBtn())}>Back</button>
      </div>
      <input onChange={(e) => dispatch(inputAct())} />
      <div>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}

export default App;
