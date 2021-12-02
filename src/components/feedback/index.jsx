import React, { useEffect } from "react";

import GlobalStyles from "./GlobalStyles";

import MessageQueue, { useMessageQueue } from "./MessageQueue";

const Feedback = () => {
  const { addMessage, removeMessage, messages } = useMessageQueue();

  return (
    <>
      <GlobalStyles />
      <MessageQueue messages={messages} removeMessage={removeMessage} />
      <div>
        <button
          onClick={() => {
            if (messages.length % 2 === 0) {
                addMessage("Something went wrong!", "error");
            } else {
                addMessage("Succesful!", "success");
            }
          }}
        >
          Test Button
        </button>
      </div>
    </>
  );
};

export default Feedback;