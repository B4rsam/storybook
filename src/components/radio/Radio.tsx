import './radio.sass'

const Radio = () => {
    return (
       <form className='radioHolder'>
            <input type="radio" className="radioButton" id="radio1"/>
            <input type="radio" className="radioButton" id="radio2"/>
       </form>
    )
}

export default Radio