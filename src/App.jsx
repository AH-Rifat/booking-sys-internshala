import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-12">
            <nav className="navbar bg-body-tertiary">
              <div className="container">
                <a className="navbar-brand">Book My Show</a>
                <Link to={'/'} className="btn btn-primary" type="submit">Home</Link>
              </div>
            </nav>
          </div>
          <div className="col-12">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
