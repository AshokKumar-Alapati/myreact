type HeaderLanguageProps = {
  setLanguage: (lang: string) => void;
  selectedLanguage: string;
};

function HeaderLanguage({ setLanguage, selectedLanguage }: HeaderLanguageProps) {
  return (
    <div className="flex space-x-1">
      {selectedLanguage === 'te' && (
        <button
          onClick={() => setLanguage('en')}
          className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 transition"
          aria-label="Switch to English"
        >
          English
        </button>
      )}
      {selectedLanguage === 'en' && (
        <button
          onClick={() => setLanguage('te')}
          className="px-2 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-300 transition"
          aria-label="Switch to Telugu"
        >
          తెలుగు
        </button>
      )}
    </div>
  );
}

export default HeaderLanguage;
