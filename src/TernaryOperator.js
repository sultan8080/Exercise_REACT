import React from 'react';
import ReactDOM from 'react-dom/client';
function TaskOk() {
  return <h1> DONE PERFECTLY </h1>
}

function TaskNotOk() {
  return <h1> NOT FINISHED PERFECTLY </h1>
}

function TaskVerification(props) {
  const isOk = props.isOk;
  return (
    <>
      {isOk ? <TaskOk /> : <TaskNotOk />}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<TaskVerification isOk={false} />);
root.render(<TaskVerification isOk={true} />);