import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Footer from "@/scenes/footer"
import { useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <div className='app bg-gray-20'>
      <Navbar 
      selectedPage = {selectedPage}
      setSelectedPage = {setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Footer selectedPage = {selectedPage} setSelectedPage={setSelectedPage}/>        
    </div>
  )
}

export default App
