import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageSelector = ({ setApiKey }) => {
    const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English (Change as needed)

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Update API Key with the selected language
    setApiKey(`https://newsapi.org/v2/top-headlines?&apiKey=fa9248d531e940989b6ba8beb3ab7389&language=${language}`); // Replace YOUR_BASE_API_URL with your actual base URL
    // Reload the page to fetch news in the selected language
    window.location.reload();
  };

  return (
    <div>
      <h3>Select Language:</h3>
      <div>
        <button onClick={() => handleLanguageChange('ar')}>English</button>
        <button onClick={() => handleLanguageChange('de')}>Spanish</button>        
        <button onClick={() => handleLanguageChange('en')}>Spanish</button>
        <button onClick={() => handleLanguageChange('es')}>Spanish</button>
        <button onClick={() => handleLanguageChange('fr')}>Spanish</button>
        <button onClick={() => handleLanguageChange('he')}>Spanish</button>
        <button onClick={() => handleLanguageChange('it')}>Spanish</button>
        <button onClick={() => handleLanguageChange('nl')}>Spanish</button>
        <button onClick={() => handleLanguageChange('no')}>Spanish</button>
        <button onClick={() => handleLanguageChange('pt')}>Spanish</button>
        <button onClick={() => handleLanguageChange('ru')}>Spanish</button>
        <button onClick={() => handleLanguageChange('sv')}>Spanish</button>
        <button onClick={() => handleLanguageChange('ud')}>Spanish</button>
        <button onClick={() => handleLanguageChange('zh')}>Spanish</button>

        {/* Add buttons for other languages */}
      </div>
    </div>
  );
};

export default LanguageSelector;
