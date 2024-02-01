// CORE-SDK
import AgoraUIKit from 'agora-react-uikit';

const App = () => { 
  const rtcProps = {
    appId: '96141aa914f742d5908000054a9f095c', 
    channel: 'test', 
    token: 'test', // enter your channel token as a string 
  }; 
  return (c
    <AgoraUIKit rtcProps={rtcProps} /> 
  ) 
};

export default App; 