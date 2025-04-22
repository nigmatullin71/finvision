import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { cryptoData, bestWorstPerformers, trendingCrypto } from '../../mocks/cryptoData';

// Основной компонент для страницы обзора
const OverviewPage = () => {
  return (
    <div className="flex flex-col flex-grow">
      <Header /> 
      <main className="flex-grow">
        <div className="max-w-[1920px] mx-auto px-[160px] mb-[200px] mt-[64px]">
          <h1 className="text-[56px] text-blue font-primary font-medium mb-6 leading-tight">
            Tranding
          </h1>
          {/* Раздел трендов */}
          <div className="flex items-center justify-start mb-8">
            <div className="bg-tranding p-4 rounded-lg w-[324px] h-[88px] flex items-center justify-start">
              <img src={trendingCrypto.logo} alt={trendingCrypto.name} className="w-6 h-6 rounded-full mr-4" />
              <div className="text-white text-lg font-medium">{trendingCrypto.name}</div>
              <div className="w-16 h-8 bg-green-500/20 rounded-lg flex items-center justify-center ml-auto">
                <p className="text-green-500 text-sm font-medium">{trendingCrypto.change}</p>
              </div>
            </div>
          </div>
          {/* Раздел лучших/худших исполнителей */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue mb-4">Best/Worst performers</h2>
              <div className="grid grid-cols-3 gap-4">
                <span className="text-gray">Name</span>
                <span className="text-gray ml-auto">Growth over the day</span>
                <span className="text-gray ml-auto">Today's price</span>
              </div>
              <div className="space-y-5 mt-4 h-full">
                {bestWorstPerformers.map((c: any, index: number) => (
                  <div key={c.name} className={`grid grid-cols-3 gap-4 items-center pb-4 ${index !== bestWorstPerformers.length - 1 ? 'border-b border-line-gray' : ''}`}>
                    <div className="flex items-center">
                      <img src={cryptoData.find(cd => cd.name === c.name)?.logo} alt={c.name} className="w-6 h-6 rounded-full mr-4" />
                      <span className="text-white text-lg">{c.name}</span>
                    </div>
                    <span className="text-white text-lg ml-auto">{c.growthOverTheDay} <span className={`${c.growthPercent.includes('+') ? 'text-green-500' : 'text-red-500'}`}>{c.growthPercent}</span></span>
                    <span className="text-white text-lg ml-auto">{c.price}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Раздел новостей */}
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue mb-14">News</h2>
              <div className="space-y-4 h-full mt-4">
                {cryptoData.map((c: any, index: number) => (
                  <div key={c.name} className={`grid grid-cols-2 gap-4 items-center pb-4 ${index !== cryptoData.length - 1 ? 'border-b border-line-gray' : ''}`}>
                    <div className="flex items-center">
                      <img src={c.logo} alt={c.name} className="w-6 h-6 rounded-full mr-4" />
                      <span className="text-white text-lg">{c.name}</span>
                    </div>
                    <div className="flex gap-2 ml-auto">
                      <div className={`w-16 h-8 ${c.change.includes('+') ? 'bg-green-500/20' : 'bg-red-500/20'} rounded-lg flex items-center justify-center`}>
                        <p className={`${c.change.includes('+') ? 'text-green-500' : 'text-red-500'} text-sm`}>{c.change}</p>
                      </div>
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

export default OverviewPage;