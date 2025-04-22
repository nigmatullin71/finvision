import btcIcon from '../images/btc-icon.png';
import ethIcon from '../images/eth-icon.png';
import solIcon from '../images/sol-icon.png';
import xrpIcon from '../images/xrp-icon.png';
import bnbIcon from '../images/bnb-icon.png';
import dogeIcon from '../images/doge-icon.png';



export const cryptoData = [
  {
    name: 'BTCUSDT',
    logo: btcIcon,
    change: '+15%',
    status: 'Win',
    prediction: [
      { time: '10:00', value: 96500 },
      { time: '11:00', value: 96400 },
      { time: '12:00', value: 96300 },
      { time: '13:00', value: 96200 },
      { time: '14:00', value: 96100 },
      { time: '15:00', value: 96000 },
    ],
  },
  {
    name: 'ETHUSD',
    logo: ethIcon,
    change: '-3%',
    status: 'Loss',
    prediction: [
      { time: '10:00', value: 1500 },
      { time: '11:00', value: 1490 },
      { time: '12:00', value: 1480 },
      { time: '13:00', value: 1470 },
      { time: '14:00', value: 1460 },
      { time: '15:00', value: 1450 },
    ],
  },
  {
    name: 'SOLUSD',
    logo: solIcon,
    change: '+3%',
    status: 'Win',
    prediction: [
      { time: '10:00', value: 240 },
      { time: '11:00', value: 239 },
      { time: '12:00', value: 238 },
      { time: '13:00', value: 237 },
      { time: '14:00', value: 236 },
      { time: '15:00', value: 235 },
    ],
  },
  {
    name: 'XRPUSD',
    logo: xrpIcon,
    change: '+5%',
    status: 'Win',
    prediction: [
      { time: '10:00', value: 1.82 },
      { time: '11:00', value: 1.80 },
      { time: '12:00', value: 1.78 },
      { time: '13:00', value: 1.76 },
      { time: '14:00', value: 1.74 },
      { time: '15:00', value: 1.72 },
    ],
  },
  {
    name: 'BNBUSD',
    logo: bnbIcon,
    change: '-8%',
    status: 'Loss',
    prediction: [
      { time: '10:00', value: 655.08 },
      { time: '11:00', value: 654.00 },
      { time: '12:00', value: 653.00 },
      { time: '13:00', value: 652.00 },
      { time: '14:00', value: 651.00 },
      { time: '15:00', value: 650.00 },
    ],
  },
  {
    name: 'DOGEUSD',
    logo: dogeIcon,
    change: '-10%',
    status: 'Loss',
    prediction: [
      { time: '10:00', value: 0.42 },
      { time: '11:00', value: 0.41 },
      { time: '12:00', value: 0.40 },
      { time: '13:00', value: 0.39 },
      { time: '14:00', value: 0.38 },
      { time: '15:00', value: 0.37 },
    ],
  },
];

export const bestWorstPerformers = [
  {
    name: 'BTCUSDT',
    growthOverTheDay: '96 000 USD',
    growthPercent: '-5%',
    price: '98 000 USD',
  },
  {
    name: 'ETHUSD',
    growthOverTheDay: '4 666 USD',
    growthPercent: '-5%',
    price: '4 500 USD',
  },
  {
    name: 'SOLUSD',
    growthOverTheDay: '239,59 USD',
    growthPercent: '+3%',
    price: '240,5 USD',
  },
  {
    name: 'XRPUSD',
    growthOverTheDay: '1,82 USD',
    growthPercent: '-7%',
    price: '1,74 USD',
  },
  {
    name: 'BNBUSD',
    growthOverTheDay: '655,08 USD',
    growthPercent: '-2%',
    price: '655,08 USD',
  },
  {
    name: 'DOGEUSD',
    growthOverTheDay: '0,42 USD',
    growthPercent: '+3%',
    price: '0,52 USD',
  },
];

export const trendingCrypto = cryptoData[0]; 