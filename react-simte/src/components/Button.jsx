import PropTypes from "prop-types";

const Button = (props) => {
    const {btntext, onClickEvent} = props;

    return (
        <button type="button" onClick={onClickEvent}>{btntext}</button>
    );
};

Button.propTypes = {
    btntext: PropTypes.string.isRequired,
    onClickEvent: PropTypes.func
}

export default Button;
