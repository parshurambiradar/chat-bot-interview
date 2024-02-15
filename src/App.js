import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './App.css';
import config from './chatbot/config';
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import AudioWaveVisualizer from './AudioVisualizer';
import useAudioStore from './store';


function App() {
  const { speaking} = useAudioStore();
  const upsideDownStyle = {
    transform: 'rotate(180deg)'
  };
  return (
    <div className="App">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
        <div>
          {speaking && (
            <>
            <div>
                <AudioWaveVisualizer />
                {/* <AudioWaveVisualizer style={upsideDownStyle} /> */}

            </div>

            </>
          )}
        </div>
    </div>
  );
}

export default App;
