import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import QnaItem from "../components/QnaItem";

const TestPage = ({ tempList }) => {
    let navigate = useNavigate();

    const [qIdx, setIdx] = useState(0);

    const getQuestionIdx = () => {
        setIdx(qIdx + 1);

        if (qIdx + 1 === tempList.length) {
            navigate('/test-result')
        } else {
            setIdx(qIdx + 1);
        }
    };

    return (
        <section id="qna" className="qna">
            <QnaItem question={tempList[qIdx].q} answers={tempList[qIdx].a} handleQuestion={getQuestionIdx} />
        </section>
    );
};

const mapStateToProps = (state, ownProps) => {    
    return {
        tempList: state,
    };
};

TestPage.propTypes = {
    tempList: PropTypes.array,
};

export default connect(mapStateToProps)(TestPage);
