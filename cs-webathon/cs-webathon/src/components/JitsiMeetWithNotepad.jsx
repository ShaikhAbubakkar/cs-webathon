import React, { useEffect } from 'react';
import '../styles/JitsiMeetWithNotepad.css'; // Assuming you will create this CSS file

const JitsiMeetWithNotepad = () => {
  useEffect(() => {
    // Load Jitsi Meet API script dynamically
    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.onload = () => {
      const domain = "meet.jit.si";
      const options = {
        roomName: "Meeting",
        width: "100%",
        height: "100%",
        parentNode: document.querySelector('#jitsi-container'),
      };
      const api = new window.JitsiMeetExternalAPI(domain, options);

      // Optional: Add event listeners
      api.addEventListener('videoConferenceJoined', () => {
        console.log('Local User Joined');
      });
      api.addEventListener('participantJoined', (participant) => {
        console.log('Participant Joined:', participant);
      });
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <div id="jitsi-container"></div>
      <div id="notepad-container">
        <div id="notepad-header" contentEditable="true">Editable Title</div>
        <textarea id="notepad" placeholder="Take notes here..."></textarea>
      </div>
    </div>
  );
};

export default JitsiMeetWithNotepad;
