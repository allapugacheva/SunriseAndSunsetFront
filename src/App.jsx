import AddSunriseAndSunsetComponent from './components/AddSunriseAndSunsetComponent'
import ListSunriseAndSunsetComponent from './components/ListSunriseAndSunsetComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* http://localhost:3000/sunrisesAndSunsets */}
          <Route path='/' element = {<ListSunriseAndSunsetComponent/>}></Route>
          {/* http://localhost:3000/sunrisesAndSunsets/add */}
          <Route path='/add' element = {<AddSunriseAndSunsetComponent/>}></Route>          
          {/* http://localhost:3000/sunrisesAndSunsets/update/1/1 */}
          <Route path='/update/:locationId/:dateId' element = {<AddSunriseAndSunsetComponent/>}></Route>          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
