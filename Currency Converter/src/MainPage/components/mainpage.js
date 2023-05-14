//Importing Packages
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Importing Files
import MainPage from "../pages/mainpage";


const MainComponent = () => {


    const [Value,setValue] = useState({
        "USD":"",
        "EURO":"",
        "POUND":"",
        "DINAR":"",
        "INR":""
    })
    //Creating State to increment and decrement
    let [scrollValue,setScrollValue] = useState(0);
    let [enableConvert,setEnableConvert] = useState(false);
    let [convertingCurrency,setconvertingCurrency] = useState("");
    let [pkrValue,setPKRValue] = useState("0.00");

    let [currencies,setCurrencies] = useState([
        {
            currency:"USD",
            value:1
        },
        {
            currency:"EURO",
            value:2
        },
        {
            currency:"POUND",
            value:3
        },
        {
            currency:"DINAR",
            value:4
        },
        {
            currency:"INR",
            value:5
        }
        
    ])
    let [idValue,setIdValue] = useState(0);

    const Navigate = useNavigate();

    const changeHandler = (event) => {
        event.preventDefault();
        setValue({...Value, [event.target.name]:event.target.value});
    }

    const pictureHandler = (e) => {
        e.preventDefault();
        let newScroll = scrollValue + 1;
        setScrollValue(newScroll);
    }

    const conversion = (curr) => {
        setEnableConvert(true);
        let newCurrency = curr;
        setconvertingCurrency(newCurrency);
    }

    const incrementPictureHandler = (e) => {
        e.preventDefault();
        let decrementedValue = scrollValue + 1;
        setScrollValue(decrementedValue);
    }

    const decrementPictureHandler = (e) => {
        e.preventDefault();
        let decrementedValue = scrollValue - 1;
        setScrollValue(decrementedValue);
    }

    const navBarNavigation = (myLink) => {
        Navigate(myLink);
    }

    const finishConversion = (currency) => {

        if(currency === "USD")
        {
            let newUSD = Value.USD * 284.36;
            setPKRValue(newUSD);
        }

        else if(currency === "EURO")
        {
            let newEuro = Value.EURO * 311.02;
            setPKRValue(newEuro);
        }

        else if(currency === "POUND")
        {
            let newPOUND = Value.POUND * 354.30;
            setPKRValue(newPOUND);
        }

        else if(currency === "DINAR")
        {
            let newDINAR = Value.DINAR * 934.07;
            setPKRValue(newDINAR);
        }

        else if(currency === "INR")
        {
            let newINR = Value.INR * 3.46;
            setPKRValue(newINR);
        }

        console.log(Value.USD);
    }

    return(
        <MainPage 
            scrollValue={scrollValue} 
            pictureHandler={pictureHandler} 
            decrementPictureHandler={decrementPictureHandler} 
            incrementPictureHandler={incrementPictureHandler}
            navBarNavigation={navBarNavigation}
            currencies={currencies}
            idValue={idValue}
            conversion={conversion}
            enableConvert={enableConvert}
            convertingCurrency={convertingCurrency}
            finishConversion={finishConversion}
            pkrValue={pkrValue}
            Value={Value}
            changeHandler={changeHandler}
        />
    )
}

export default MainComponent