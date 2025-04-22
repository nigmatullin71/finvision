import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { cryptoData } from '../../mocks/cryptoData';


// Импорт необходимых модулей и компонентов из React и других файлов
// cryptoData - это макет данных для информации о криптовалютах, пока что нет данных из бд, работаем с ними


// Определение компонента MainPage
const MainPage = () => {
  // Переменные состояния для управления выбранным временным интервалом, криптовалютой и предсказанием
  const [timeframe, setTimeframe] = useState('1h'); // Временной интервал задал по умолчанию - 1 час
  const [crypto, setCrypto] = useState('BTCUSDT'); // Криптовалюта по умолчанию - BTCUSDT
  const [prediction, setPrediction] = useState('96 470 USD'); // Значение предсказания по умолчанию

  // Поиск данных выбранной криптовалюты из макета данных
  const selectedCrypto = cryptoData.find(c => c.name === crypto);
  const btcData = selectedCrypto ? selectedCrypto.prediction : [];

  // Хук useEffect для загрузки данных предсказаний при изменении криптовалюты или временного интервала
  useEffect(() => {
    if (selectedCrypto) {
      // setBtcData(selectedCrypto.prediction);
    }
  }, [crypto]);

  // Функция для обработки обновлений предсказаний
  const handlePredict = () => {
    // Обновление состояния предсказания с новым сообщением предсказания
    setPrediction(`${crypto} prediction for ${timeframe}`);
  };

  // Возврат null, если криптовалюта не выбрана
  if (!selectedCrypto) return null;

  // Отображение макета главной страницы
  return (
    <div className="flex flex-col flex-grow">
      <Header /> 
      <main className="flex-grow">
        <div className="max-w-[1920px] mx-auto px-[160px] mb-[200px] mt-[64px]">
          {/* Заголовок страницы */}
          <h1 className="text-[56px] text-white font-primary font-medium mb-6 leading-tight">
            Анализируй рынок криптовалют
            <br /> 
            <span className="text-blue">с помощью AI</span> {/* Часть текста в другом цвете */}
          </h1>

          {/* Выпадающие списки для выбора инструмента и временного интервала */}
          <div className="grid grid-cols-[376px_376px_376px] gap-8 mb-12">
            {/* Выпадающий список для выбора инструмента */}
            <div>
              <label className="block text-blue text-lg font-medium mb-2">Инструмент</label>
              <select className="w-full h-[56px] p-3 rounded-lg bg-secondary text-gray" value={crypto} onChange={(e) => setCrypto(e.target.value)}>
                {cryptoData.map(c => (
                  <option key={c.name} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Выпадающий список для выбора временного интервала */}
            <div>
              <label className="block text-blue text-lg font-medium mb-2">Таймфрейм</label>
              <select className="w-full h-[56px] p-3 rounded-lg bg-secondary text-gray" value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
                <option value="1h">1 Hour</option>
                <option value="4h">4 Hours</option>
                <option value="1d">1 Day</option>
              </select>
            </div>

            {/* Кнопка для запуска предсказания */}
            <div className="flex items-end">
              <button className="w-full h-[56px] p-3 rounded-lg bg-brand text-white text-lg font-medium hover:bg-btn-hover active:bg-btn-active transition-colors" onClick={handlePredict}>
                Предсказать
              </button>
            </div>
          </div>

          {/* Контейнеры для AI Talks, Prediction и Статистики сделок */}
          <div className="grid grid-cols-[376px_784px_376px] gap-8">
            {/* Раздел AI Talks */}
            <div className="bg-secondary p-6 rounded-lg shadow-md h-[512px] font-primary text-[16px]">
              <h2 className="text-xl font-semibold text-blue mb-4">AI Talks</h2>
              <p className="text-white ">
                A neural network contemplates the taste of sunlight while training on data from a toaster that believes it's a philosopher.
                <br /><br />
                Meanwhile, machine learning models juggle probabilities with hands made of pixelated uncertainty, whispering predictions to clouds that can't hold rain.
                <br /><br />
                Deep learning deals into oceans of zeros and ones, only to resurface with a rubber duck that claims to understand quantum mechanics.
              </p>
            </div>

            {/* Раздел Prediction */}
            <div className="bg-secondary p-6 rounded-lg shadow-md h-[512px]">
              <h2 className="text-xl font-semibold text-blue mb-4">Prediction</h2>
              <div className="text-white mb-6">
                <p className="text-lg font-medium">{crypto}: <span className="text-red-500">{prediction}</span></p>
              </div>

              {/* Статическое представление графика */}
              <div className="flex justify-between items-end h-[300px] bg-gray-800 p-4 rounded-lg">
                <div className="flex flex-col justify-between h-full text-gray-400">
                  {btcData.map((p, index) => (
                    <span key={index}>{p.value}</span>
                  ))}
                </div>

                <div className="flex gap-2 items-end w-full">
                  {btcData.map((p, index) => (
                    <div key={index} className="w-8" style={{ height: `${(p.value / 1000) * 100}%`, backgroundColor: p.value > btcData[index - 1]?.value ? 'green' : 'red' }}></div>
                  ))}
                </div>

                <div className="flex justify-between w-full text-gray-400 mt-4">
                  {btcData.map((p, index) => (
                    <span key={index}>{p.time}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Раздел Статистики сделок */}
            <div className="bg-secondary p-6 rounded-lg shadow-md h-[512px]">
              <h2 className="text-xl font-semibold text-blue mb-6">Статистика сделок</h2>
              <div className="space-y-4 h-full">
                {cryptoData.map((c, index) => (
                  <div key={c.name} className={`flex justify-between items-center ${index !== cryptoData.length - 1 ? 'border-b border-line-gray' : ''} pb-4`}>
                    <div className="flex items-center">
                      <img
                        src={c.logo}
                        alt={c.name}
                        className="w-6 h-6 rounded-full mr-4"
                      />
                      <span className="text-white text-lg">{c.name}</span>
                    </div>
                    <div className="flex gap-2">
                      {/* Блок, показывающий процентное изменение */}
                      <div className={`w-16 h-8 ${c.change.includes('+') ? 'bg-green-500/20' : 'bg-red-500/20'} rounded-lg flex items-center justify-center`}>
                        <p className={`${c.change.includes('+') ? 'text-green-500' : 'text-red-500'} text-sm`}>{c.change}</p>
                      </div>
                      {/* Блок, показывающий статус */}
                      <div className={`w-16 h-8 ${c.status === 'Win' ? 'bg-green-500/20' : 'bg-red-500/20'} rounded-lg flex items-center justify-center`}>
                        <p className={`${c.status === 'Win' ? 'text-green-500' : 'text-red-500'} text-sm`}>{c.status}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer /> 
    </div>
  );
};


export default MainPage;