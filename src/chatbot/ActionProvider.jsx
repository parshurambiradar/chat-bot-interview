// in ActionProvider.jsx
import React from 'react';
import useAudioStore from '../store';



const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const { setSpeaking } = useAudioStore();
  const handleHello = (message) => {
    //setBlob(message)
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.onstart  = function(event) {
      console.log("Speech synthesis started.");
      setSpeaking(true)
    };
    
    utterance.onend =function(event) {
      console.log("Speech synthesis ended.");
      setSpeaking(false)
    };
    console.log(utterance)
    speechSynthesis.speak(utterance);
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