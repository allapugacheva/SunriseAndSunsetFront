import AddSunriseAndSunsetComponent from './components/AddSunriseAndSunsetComponent'
import ListSunriseAndSunsetComponent from './components/ListSunriseAndSunsetComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* http://localhost:3000/sunrisesAndSunsets */}
          <Route path='/sunrisesAndSunsets' element = {<ListSunriseAndSunsetComponent/>}></Route>
          {/* http://localhost:3000/sunrisesAndSunsets/add */}
          <Route path='/sunrisesAndSunsets/add' element = {<AddSunriseAndSunsetComponent/>}></Route>          
          {/* http://localhost:3000/sunrisesAndSunsets/update/1/1 */}
          <Route path='/sunrisesAndSunsets/update/:locationId/:dateId' element = {<AddSunriseAndSunsetComponent/>}></Route>          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
