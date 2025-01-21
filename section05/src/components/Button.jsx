const Button=({text, color,children})=>{
//이벤트 객체체
    const onClickButton=(e)=>{
        console.log(e);
        console.log(text);
    };

    return (
    <button 
    onClick={onClickButton()} //이벤트 핸들러
    // onMouseEnter={onClickButton}
    style={{color:color}}
    >
        {text} - {color.toUpperCase()}
        {children}
        </button>
        );
};

Button.defaultProps={
    color:"black",
};

export default Button;