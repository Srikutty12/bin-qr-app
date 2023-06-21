import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [start, setStart] = useState(false);
  const [complete, setComplete] = useState(false);
  const [value, setValue] = useState("{}");

  function rand_10(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
  }

  return (
    <div className="App">
      {!start && (
        <>
          <h1>Welcome to Smart Trash bin system</h1>
          <h1>Click start</h1>
          <button
            style={{
              color: "#fff",
              background: "green",
              fontSize: "20px",
              padding: "5px 24px",
              border: "none",
              borderRadius: "9px",
              width: "20%",
            }}
            onClick={() => setStart(true)}
          >
            Start
          </button>
        </>
      )}
      {start && !complete ? (
        <>
          <h1>
            Open and put the garbage into the trash bin. Click complete once
            completed
          </h1>
          <button
            style={{
              color: "#fff",
              background: "green",
              fontSize: "20px",
              padding: "5px 24px",
              border: "none",
              borderRadius: "9px",
              width: "20%",
            }}
            onClick={() => {
              setValue(JSON.stringify({
                points: rand_10(1, 500),
              }));
              setComplete(true);
            }}
          >
            Complete
          </button>
        </>
      ) : null}
      {start && complete ? (
        <>
          <div
            style={{
              height: "auto",
              margin: "0 auto",
              maxWidth: "23vw",
            }}
          >
            <h2>Click "Done" once you got points</h2>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={value}
              viewBox={`0 0 256 256`}
            />
            <button
              style={{
                color: "#fff",
                background: "green",
                fontSize: "20px",
                padding: "5px 24px",
                border: "none",
                borderRadius: "9px",
                width: "80%",
                marginTop: "20px",
              }}
              onClick={() => {
                setComplete(false);
                setStart(false);
              }}
            >
              Done
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
