import { useEffect } from 'react';

export default function VoiceCommand({ executeCommand }) {
  useEffect(() => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript;
      executeCommand(command);
    };

    recognition.start();
  }, [executeCommand]);

  return <div>Listening for voice commands...</div>;
}
