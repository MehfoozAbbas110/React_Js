import { useContext } from "react";
import { authcontext } from "../Context/Authcontext";

function Home(){
    const{state}= useContext(authcontext)
    // const router=useNavigate();
    return <div>
        <h1>Home- Hi!! {state?.user?.name} </h1>
        {/* <img src="https://www.creativefabrica.com/wp-content/uploads/2023/01/06/HOME-Fonts-56578737-1.png" height="700"  alt="placeholder" />; */}
    </div>;
}

export default Home;