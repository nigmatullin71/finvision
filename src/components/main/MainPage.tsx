import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const MainPage = () => {
  return (
    <div className="flex flex-col flex-grow">
      <Header />
      <main className="flex-grow">
        <div className="max-w-[1920px] mx-auto px-[160px] mb-[200px] mt-[64px]">
          {/* Заголовок с переносом строки и разными цветами */}
          <h1 className="text-[56px] text-white font-primary font-medium mb-6 leading-tight">
            Анализируй рынок криптовалют
            <br /> {/* Перенос строки */}
            <span className="text-blue">с помощью AI</span> {/* Часть текста в другом цвете */}
          </h1>

          {/* Дропдауны */}
          <div className="grid grid-cols-[376px_376px_376px] gap-8 mb-12">
          {/* Дропдаун "Инструмент" */}
          <div>
            <label className="block text-blue text-lg font-medium mb-2">Инструмент</label>
            <select className="w-full h-[56px] p-3 rounded-lg bg-secondary text-gray">
              <option>Выбрать</option>
            </select>
          </div>

          {/* Дропдаун "Таймфрейм" */}
          <div>
            <label className="block text-blue text-lg font-medium mb-2">Таймфрейм</label>
            <select className="w-full h-[56px] p-3 rounded-lg bg-secondary text-gray">
              <option>Выбрать</option>
            </select>
          </div>

          {/* Кнопка "Предсказать" */}
          <div className="flex items-end">
            <button className="w-full h-[56px] p-3 rounded-lg bg-brand text-white text-lg font-medium hover:bg-btn-hover active:bg-btn-active transition-colors">
              Предсказать
            </button>
          </div>
        </div>


          {/* Контейнеры AI Talks, Prediction и Статистика сделок */}
          <div className="grid grid-cols-[376px_784px_376px] gap-8">
            {/* AI Talks */}
            <div className="bg-secondary p-6 rounded-lg shadow-md h-[512px] font-primary text-[16px]">
              <h2 className="text-xl font-semibold text-blue mb-4">AI Talks</h2>
              <p className="text-white ">
                A neural network contemplates the taste of sunlight while training on data from a toaster that believes it’s a philosopher.
                <br /><br />
                Meanwhile, machine learning models juggle probabilities with hands made of pixelated uncertainty, whispering predictions to clouds that can’t hold rain.
                <br /><br />
                Deep learning deals into oceans of zeros and ones, only to resurface with a rubber duck that claims to understand quantum mechanics.
              </p>
            </div>

            {/* Prediction */}
            <div className="bg-secondary p-6 rounded-lg shadow-md h-[512px]">
              <h2 className="text-xl font-semibold text-blue mb-4">Prediction</h2>
              <div className="text-white">
                <p className="text-lg font-medium">BTCUSD: <span className="text-red-500">-96.470 USD</span></p>
              </div>
            </div>

            {/* Статистика сделок */}
            <div className="bg-secondary p-6 rounded-lg shadow-md h-[512px]">
  <h2 className="text-xl font-semibold text-blue mb-6">Статистика сделок</h2>
  <div className="space-y-4">
    {/* BTCUSDT */}
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {/* Иконка криптовалюты */}
        <img
          src="/path/to/btc-icon.png" // Укажите путь к иконке BTC
          alt="BTC"
          className="w-8 h-8 rounded-full mr-4"
        />
        <span className="text-white text-lg">BTCUSDT</span>
      </div>
      <div className="flex gap-2">
        {/* Блок с процентом */}
        <div className="w-16 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
          <p className="text-green-500 text-sm">+15%</p>
        </div>
        {/* Блок с статусом */}
        <div className="w-16 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
          <p className="text-green-500 text-sm">Win</p>
        </div>
      </div>
    </div>

    {/* ETHUSD */}
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {/* Иконка криптовалюты */}
        <img
          src="/path/to/eth-icon.png" // Укажите путь к иконке ETH
          alt="ETH"
          className="w-8 h-8 rounded-full mr-4"
        />
        <span className="text-white text-lg">ETHUSD</span>
      </div>
      <div className="flex gap-2">
        {/* Блок с процентом */}
        <div className="w-16 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
          <p className="text-red-500 text-sm">-3%</p>
        </div>
        {/* Блок с статусом */}
        <div className="w-16 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
          <p className="text-red-500 text-sm">Loss</p>
        </div>
      </div>
    </div>

    {/* SOLUSD */}
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {/* Иконка криптовалюты */}
        <img
          src="/path/to/sol-icon.png" // Укажите путь к иконке SOL
          alt="SOL"
          className="w-8 h-8 rounded-full mr-4"
        />
        <span className="text-white text-lg">SOLUSD</span>
      </div>
      <div className="flex gap-2">
        {/* Блок с процентом */}
        <div className="w-16 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
          <p className="text-green-500 text-sm">+3%</p>
        </div>
        {/* Блок с статусом */}
        <div className="w-16 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
          <p className="text-green-500 text-sm">Win</p>
        </div>
      </div>
    </div>

    {/* XRPUSD */}
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {/* Иконка криптовалюты */}
        <img
          src="/path/to/xrp-icon.png" // Укажите путь к иконке XRP
          alt="XRP"
          className="w-8 h-8 rounded-full mr-4"
        />
        <span className="text-white text-lg">XRPUSD</span>
      </div>
      <div className="flex gap-2">
        {/* Блок с процентом */}
        <div className="w-16 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
          <p className="text-green-500 text-sm">+5%</p>
        </div>
        {/* Блок с статусом */}
        <div className="w-16 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
          <p className="text-green-500 text-sm">Win</p>
        </div>
      </div>
    </div>

    {/* BNBUSD */}
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {/* Иконка криптовалюты */}
        <img
          src="/path/to/bnb-icon.png" // Укажите путь к иконке BNB
          alt="BNB"
          className="w-8 h-8 rounded-full mr-4"
        />
        <span className="text-white text-lg">BNBUSD</span>
      </div>
      <div className="flex gap-2">
        {/* Блок с процентом */}
        <div className="w-16 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
          <p className="text-red-500 text-sm">-8%</p>
        </div>
        {/* Блок с статусом */}
        <div className="w-16 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
          <p className="text-red-500 text-sm">Loss</p>
        </div>
      </div>
    </div>

    {/* DOGEUSD */}
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {/* Иконка криптовалюты */}
        <img
          src="/path/to/doge-icon.png" // Укажите путь к иконке DOGE
          alt="DOGE"
          className="w-8 h-8 rounded-full mr-4"
        />
        <span className="text-white text-lg">DOGEUSD</span>
      </div>
      <div className="flex gap-2">
        {/* Блок с процентом */}
        <div className="w-16 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
          <p className="text-red-500 text-sm">-10%</p>
        </div>
        {/* Блок с статусом */}
        <div className="w-16 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
          <p className="text-red-500 text-sm">Loss</p>
        </div>
      </div>
    </div>
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