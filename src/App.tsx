import {useState} from 'react'
import Home from "./pages/Home";
import { ThemeProvider } from 'styled-components';



const screenSize : {}= {
  verysmall : "576px" ,
    mobile: "767px",
  meduim : "992px" ,
  larg : '1200px'
}

const darkMode : {} = {
    colorElements: 'hsl(209, 23%, 22%)',
    colorBackground: 'hsl(207, 26%, 17%)',
  colorText: ' hsl(0, 0%, 100%)',
    
  size : screenSize ,

}

const lightMode : {} = {
    colorText: 'hsl(200, 15%, 8%)',
    colorBackground: ' hsl(0, 0%, 98%)',
    colorElements: ' hsl(0, 0%, 100%)',  
    
  size : screenSize ,
}

function App() {
  const [theme, setTheme] = useState(false);
  
  function toggle() : void {
    setTheme((prv) => {
      return prv = !prv
    })
  }
  return (
    <ThemeProvider theme={theme ? lightMode : darkMode}  >
        <Home clickEvent={toggle}></Home>
    </ThemeProvider>
  );
}

export default App;
