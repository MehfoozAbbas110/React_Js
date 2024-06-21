import { useContext } from "react";
import { authcontext } from "../Context/Authcontext";
import { themeContext } from "../ThemeContext/Theme";

function Home(){
    const{state}= useContext(authcontext);
    const{themeState, dispatch}=useContext(themeContext);
    // const router=useNavigate();
    
    return(
        <div style=
     { 
        {
            backgroundColor: themeState.theme==="light"? "white": "#121212",
            color: themeState.theme==="light"? "#121212": "white",
          
            }}> 
            
            <h1>Home {state?.user?.name} </h1>
            <button style={{marginLeft: "0%",
                fontSize:"14px",
                width: "150px",
                height: "80px",
                backgroundColor: themeState.theme==="light"? "wheat": "white",
                color: themeState.theme==="light"? "black": "black",
                cursor:"pointer",
            }}
        onClick={() =>
          dispatch({ type: themeState?.theme === "light" ? "DARK" : "LIGHT" })
        }
      >
        Switch to {themeState?.theme === "dark" ? "light" : "dark"} Mode
      </button>
          
         

          
    
    </div>
   );

    }


export default Home;