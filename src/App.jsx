
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './reducers/counterReducer';
import './App.css';
import { useTranslation } from 'react-i18next';


function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>

<h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ar')}>Arabic</button>

        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
  
    </>
  );
}

export default App;
