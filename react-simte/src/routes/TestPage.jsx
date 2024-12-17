import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import QnaItem from "../components/QnaItem";
import { actionCreators } from "../store";

const TestPage = ({ qnaList, getResult }) => {
    let navigate = useNavigate();

    const [qIdx, setIdx] = useState(0);

    const getQuestionIdx = (e) => {
        setIdx(qIdx + 1);

        if (qIdx + 1 === qnaList.length) {
            navigate('/test-result')
        } else {
            setIdx(qIdx + 1);
            console.log(e);
            console.log(qnaList[qIdx].a);
            // getResult(qnaList[qIdx].a.type);
        }
    };

    return (
        <section id="qna" className="qna">
            <QnaItem question={qnaList[qIdx].q} answers={qnaList[qIdx].a} handleQuestion={getQuestionIdx} />
        </section>
    );
};

const mapStateToProps = (state, ownProps) => {    
    return {
        qnaList: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);

    return {
        getResult: (type) => dispatch(actionCreators.getResult(type)),
    }
};

TestPage.propTypes = {
    tempList: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
