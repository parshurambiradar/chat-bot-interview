// in ActionProvider.jsx
import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';



const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const { speak } = useSpeechSynthesis();
  const handleHello = (message) => {

    speak({text:message})
    const botMessage = createChatBotMessage(message);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;