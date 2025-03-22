'use client';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { t, i18n } = useTranslation('common');

  // Detect browser's default language and set it
  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage; // Get browser language
    const lang = browserLang.split('-')[0]; // Extract base language

    // Supported languages
    const availableLanguages = ['en', 'fr', 'ar']; // Added 'ar' for Arabic (RTL)

    // Set language only if it's supported
    if (availableLanguages.includes(lang)) {
      i18n.changeLanguage(lang);
      updateDirection(lang);
    } else {
      i18n.changeLanguage('en'); // Fallback to English
      updateDirection('en');
    }
  }, []);

  // Function to update direction based on language
  const updateDirection = (lang) => {
    const isRtl = ['ar', 'he', 'fa', 'ur'].includes(lang); // RTL languages
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  };

  // Change language and update direction on button click
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    updateDirection(lang);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>{t('greeting')}</h1>
        <p>{t('description')}</p>
        <h2>{t('welcome_user', { name: 'Niraj' })}</h2>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => changeLanguage('en')}>🇺🇸 English</button>
        <button
          onClick={() => changeLanguage('fr')}
          style={{ marginLeft: '10px' }}
        >
          🇫🇷 French
        </button>
        <button
          onClick={() => changeLanguage('ar')}
          style={{ marginLeft: '10px' }}
        >
          🕌 Arabic
        </button>
      </div>
    </div>
  );
}
