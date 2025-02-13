import React, { useState } from 'react';
import axios from 'axios';
import Confetti from 'react-confetti'; // Optional: For confetti animation

const ValentineQuestion = () => {
  const [response, setResponse] = useState(null);

  const handleResponse = async (answer) => {
    try {
      await axios.post('http://localhost:5000/api/valentine/response', { answer });
      setResponse(answer);
    } catch (error) {
      console.error('Error saving response:', error);
    }
  };

  return (
    <div className="valentine-container">
      {/* Confetti animation when "Yes" is clicked */}
      {response === 'Yes' && <Confetti />}

      <h1>Will you be my Valentine Ankita 💖?</h1>

      {response === 'Yes' ? (
        <div className="cute-message">
          <p>Yoy chose me 🥺..</p>
          <p>I promise you you will not regret this decision at any 
            point in your life and i remember all the things 
            that we did together.
          </p>
          <img
            src="https://media.giphy.com/media/26xBwdIuRJiAIqHwA/giphy.gif"
            alt="Celebration"
            style={{ width: '200px', marginTop: '20px' }}
          />
        </div>
      ) : response === 'No' ? (
        <p>You said No. 😢</p>
      ) : (
        <div className="buttons">
          <button onClick={() => handleResponse('Yes')}>Yes</button>
          <button onClick={() => handleResponse('No')}>No</button>
        </div>
      )}
    </div>
  );
};

export default ValentineQuestion;