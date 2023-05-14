import react from "react";
import { useNavigate } from "react-router-dom";
import LandingPage from "../pages/landingPage";

const LandingComponent = () => {
    const Navigate = useNavigate();

    const navigateToHome = () => {
        Navigate("/home");
    }

    setTimeout(navigateToHome,2000);

    return(
        <LandingPage />
    )
}
export default LandingComponent;