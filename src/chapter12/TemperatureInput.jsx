const scaleNames={
    c: "섭씨",
    f: "화씨",
};

function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]});
            </legend>
            {/* onChange: 입력필드의 값을 변경할 때 발생  */}
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    )
}

export default TemperatureInput