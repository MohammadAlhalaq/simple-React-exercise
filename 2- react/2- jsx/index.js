const Jsx = () => (
    <div>
        <h1 className="reod" onClick={() => {console.log("hello world");}}>
            hello word
        </h1>
        <p>hello my frind</p>
    </div>
);

ReactDOM.render(<Jsx />, document.getElementById('root'));
