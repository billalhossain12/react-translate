import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // Access i18next instance

  const changeLanguage = (e) => {
    localStorage.setItem('languageCode', e.target.value)
    i18n.changeLanguage(e.target.value); // Changes the language dynamically
  };

  return (
   <div className='flex justify-center items-center'>
     <select defaultValue={localStorage.getItem('languageCode')} className='outline-none border-[1px] border-gray-300 px-5 py-2 rounded-md' onChange={changeLanguage} name="language" id="language">
      <option value="en">English</option>
      <option value="bn">বাংলা</option>
      <option value="hi">हिन्दी</option>
      <option value="te">తెలుగు</option>
    </select>
   </div>
  );
};

export default LanguageSwitcher;

