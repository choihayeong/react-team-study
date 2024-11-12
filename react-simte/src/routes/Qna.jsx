import { useState } from "react";

const Qna = () => {
    const [current, setCurrent] = useState(0);

    return (
        <div className="qna">
            <div className="qna__item">
                <div>Q. 질문 1</div>
                <div className="qna__answer">
                    <span>A. 답변 A</span>
                    <span>B. 답변 B</span>
                </div>
            </div>

        </div>
    );
};

export default Qna;
