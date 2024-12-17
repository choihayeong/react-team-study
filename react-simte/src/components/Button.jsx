import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = (props) => {
    const { btntext, link, onClickEvent } = props;

    if (link) {
        return <Link to={link}>{btntext}</Link>
    } else {
        return (
            <button type="button" onClick={onClickEvent}>{btntext}</button>
        );
    }

};

Button.propTypes = {
    btntext: PropTypes.string.isRequired,
    link: PropTypes.string,
    onClickEvent: PropTypes.func
};

export default Button;
