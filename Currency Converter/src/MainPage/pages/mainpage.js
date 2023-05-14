import React from "react";
import Aux from "../../Auxiliary/auxiliary";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faRemove
} from '@fortawesome/free-solid-svg-icons'


import './mainpage.css';
import FooterComponent from "../../Footer/components/footer";

 const MainPage = (props) => {
    return(
        <Aux>
            <section className="body__outer__external">
                <section className="myNavbar">
                    <div className="currencylogo">
                        <h1 className="currencyConverterTitle">Currency Converter</h1>
                    </div>
                    <div className="myCurrency">
                        Your Currency: PKR
                    </div>
                </section>
                <section className="details">
                    <section className="details__inner">
                        <div className="featureNotAvailable">
                            Conversion to PKR is only available yet.
                            <FontAwesomeIcon  className="faRemove" icon={faRemove} />
                        </div>
                        <section className="all__currencies">
                            {
                                props.currencies.map(result=>{
                                    return <div onClick={() =>props.conversion(result.currency)} key={result.value}>
                                        {result.currency}
                                    </div>
                                })
                            }
                        </section>

                        {
                            props.enableConvert? <section className="output">
                                <input 
                                    placeholder={"Enter Amount in " + props.convertingCurrency} 
                                    name={props.convertingCurrency}
                                    onChange={props.changeHandler}
                                />
                                {
                                    props.pkrValue === 0 ? 
                                        <p>Try Retyping Your Amount</p> 
                                    : 
                                        <p>The amount in PKR is: {props.pkrValue} Rs</p>
                                }
                                <div className="convert" onClick={() => props.finishConversion(props.convertingCurrency)}>
                                    Convert
                                </div>
                            </section>:null
                        }
                    </section>
                </section>
            </section>
            <FooterComponent />
        </Aux>
    )
}

export default MainPage