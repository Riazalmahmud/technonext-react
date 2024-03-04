
import './App.css'
import Feture from './component/feture/Feture'
import FooterComponent from './component/footer/FooterComponent'
import Header from './component/header/Header'
import Hero from './component/hero/Hero'
import User from './component/user/User'



function App() {

  return (
    <>
    <div className='m-0 l'>
    <Header ></Header>
    </div>


<Hero ></Hero>
<User></User>
<Feture></Feture>

<FooterComponent></FooterComponent>
    </>
  )
}

export default App
