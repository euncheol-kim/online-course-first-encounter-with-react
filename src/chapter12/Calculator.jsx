import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }

    return <p>물이 끓지 않습니다.</p>
}

// to섭씨
function toCelsius(fahrenheit) {
    return ((fahrenheit-32)*5) / 9
}

// to화씨
function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// convert: 함수
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        console.log(`handleCelsiusChange`);
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        console.log(`handleFahrenheitChange`);
        setTemperature(temperature);
        setScale("f");
    }

    const celsius = 
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    
    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    )
}

export default Calculator;

