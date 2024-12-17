import Button from "../components/Button";

const TestResult = () => {
    return (
        <section>
            <h2>Test Result</h2>
            <div>
                <Button btntext={`처음으로`} link={"/"} />
                <Button btntext={`테스트 다시하기`} link={"/test-page"} />
            </div>
        </section>
    );
};

export default TestResult;
