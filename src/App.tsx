import './App.css'

function App() {

  return (
    <>
      <div className="header">
        <h1>Sticky table header demo</h1>
      </div>
      <main className="main-content">
        <h3 className="table-header">Sticky thing - only left side</h3>
        <h3 className="table-header sticky">Sticky thing - left and top sides</h3>
        <div className="table">
          {Array(10 * 1).fill(0).map((_, i) => (
            <div key={i} className="table-cell-header" >
              Column header
            </div>
          ))}
          {Array(10 * 100).fill(0).map((_, i) => (
            <div key={i} className="table-cell">
              Lorem ipsum dolor sit a...
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">
        <div className="footer-content">
          Footer that shows on hover
        </div>
      </footer>
    </>
  )
}

export default App
