import logo from './logo.svg';
import './App.css';
import { useFirebase } from './components/Firebase/FirebaseContext'





function App() {
  console.log(process.env.REACT_APP_API_KEY)
  const firebase = useFirebase()
  console.log(firebase)
  const testData = {
    name: "test",
  }
  const saveValue = () => {
    firebase.db.collection('leagues').add(testData).then(documentReference => {
      console.log("League Saved!", documentReference.id)
    }).catch(error => {
      console.log(error.message)
    })
  }

  const getLeagues = () => {
    console.log("Leagues: ")
    firebase.db.collection('leagues').get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map( doc => doc.data())
      console.log(data)
    }).catch(err => {
      console.log(err.message)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={saveValue}>Save Value</button>
        <button onClick={getLeagues}>Get Leagues</button>
      </header>
    </div>
  );
}

export default App;
