import Header from "./components/Header/Header"
import Widget from "./components/Widget/Widget"
import "./main.scss"

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <Widget />
            </main>
        </div>
    )
}

export default App
