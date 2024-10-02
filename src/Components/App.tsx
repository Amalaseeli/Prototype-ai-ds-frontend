
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import '../App.css'
import Demo from '../Pages/Demo'
import Layout from '../Pages/Layout'
import Kernel from '../Pages/Kernel'
import TrainTest from '../Pages/TrainTest'
import Model from '../Pages/Model'
import Visualization from '../Pages/Visualization'
import Counter from '../Pages/Counter'
import Timer from '../Pages/Timer'
import TextInput from '../Pages/TextInput'



function App() {


  return (
    <>
<BrowserRouter>
<Routes>
  <Route index element={< Demo/>}/>
  <Route path='/' element={<Layout />}>
    <Route path='kernel' element={<Kernel />} />
      <Route path='TrainTest' element={<TrainTest />} />
      <Route path='Model' element={<Model />} />
      <Route path='Visualize' element={<Visualization />} />
      <Route path='Counter' element={<Counter />} />
      <Route path='Timer' element={< Timer/>} />
      <Route path='TextInput' element={<TextInput/>} />
  </Route>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
