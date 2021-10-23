import './App.css';
import AppLayout from './component/app-layout';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <h1
          style={{
            color: '#7F7F7F',
            fontWeight: 600,
            fontSize: 20,
            // lineHeight: 7,
            marginTop: 48,
            marginLeft: 15
          }}
        >
          Active Spaces
        </h1>
      </AppLayout>
    </div>
  );
}

export default App;
