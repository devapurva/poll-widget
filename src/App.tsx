import React from "react";
import Poll from "./components/Poll";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="bg-blue-500 text-white p-4">
                <h1 className="text-2xl">Poll Widget</h1>
            </header>
            <main className="p-4">
                <Poll
                    question="How do you feel today?"
                    options={[
                        "Brilliant! I have so much energy",
                        "Always can be worse.",
                        "Please, end my misery.",
                    ]}
                />
                <Poll
                    question="How do you like the Opinary test?"
                    options={[
                        "It was great and so challenging.",
                        "Not bad, but you can improve.",
                        "It was a nightmare, never again.",
                    ]}
                />
            </main>
        </div>
    );
}

export default App;
