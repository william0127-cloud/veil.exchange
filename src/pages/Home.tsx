import * as React from "react";
import HomeHeader from "../component/home/HomeHeader.tsx";
import Card from "../component/Card1.tsx";
import CryptoModal from "../component/CryptoModal.tsx";
import PrivacyAndSecurity from "../component/home/PrivacyAndSecurity.tsx";
import ExchangeCrypto from "../component/home/ExchangeCrypto.tsx";
import RecentTransaction from "../component/home/RecentTransantion.tsx";
import SupportedCrypto from "../component/home/SupportedCrypto.tsx";
import LatestUpdates from "../component/home/LatestUpdates.tsx";
import TrackOrder from "../component/home/TrackOrder.tsx";

interface Service {
  subtitle: string;
  description: string;
  logo: string;
}

interface Crypto {
  name: string;
  url: string;
  short: string;
}

interface UpdateCard {
  title: string;
  logo: string;
}

const cryptoData: Crypto[] = [
  { name: "Bitcoin", url: "/assets/svg/btc.svg", short: "BTC" },
  { name: "Ethereum", url: "/assets/svg/eth.svg", short: "ETH" },
  { name: "BNB Smart Chain", url: "/assets/svg/bnb.svg", short: "BABBSC" },
  { name: "Solana", url: "/assets/svg/sol.svg", short: "SOL" },
  { name: "Uniswap", url: "/assets/svg/uni.svg", short: "UNI" },
  { name: "Cardano", url: "/assets/svg/ada.svg", short: "ADA" },
  { name: "BinanceUSD(ERC20)", url: "/assets/svg/busd.svg", short: "BUSD" },
  { name: "Dai(ERC20)", url: "/assets/svg/dai.svg", short: "DAI" },
  { name: "Dogecoin", url: "/assets/svg/doge.svg", short: "DOGE" },
  { name: "Bitcoin", url: "/assets/svg/btc.svg", short: "BTC" },
  { name: "Ethereum", url: "/assets/svg/eth.svg", short: "ETH" },
  { name: "BNB Smart Chain", url: "/assets/svg/bnb.svg", short: "BABBSC" },
  { name: "Solana", url: "/assets/svg/sol.svg", short: "SOL" },
  { name: "Uniswap", url: "/assets/svg/uni.svg", short: "UNI" },
  { name: "Cardano", url: "/assets/svg/ada.svg", short: "ADA" },
  { name: "BinanceUSD(ERC20)", url: "/assets/svg/busd.svg", short: "BUSD" },
  { name: "Dai(ERC20)", url: "/assets/svg/dai.svg", short: "DAI" },
  { name: "Dogecoin", url: "/assets/svg/doge.svg", short: "DOGE" },
  { name: "Bitcoin", url: "/assets/svg/btc.svg", short: "BTC" },
  { name: "Ethereum", url: "/assets/svg/eth.svg", short: "ETH" },
  { name: "BNB Smart Chain", url: "/assets/svg/bnb.svg", short: "BABBSC" },
  { name: "Solana", url: "/assets/svg/sol.svg", short: "SOL" },
  { name: "Uniswap", url: "/assets/svg/uni.svg", short: "UNI" },
  { name: "Cardano", url: "/assets/svg/ada.svg", short: "ADA" },
  { name: "BinanceUSD(ERC20)", url: "/assets/svg/busd.svg", short: "BUSD" },
  { name: "Dai(ERC20)", url: "/assets/svg/dai.svg", short: "DAI" },
  { name: "Dogecoin", url: "/assets/svg/doge.svg", short: "DOGE" },
  { name: "Bitcoin", url: "/assets/svg/btc.svg", short: "BTC" },
  { name: "Ethereum", url: "/assets/svg/eth.svg", short: "ETH" },
  { name: "BNB Smart Chain", url: "/assets/svg/bnb.svg", short: "BABBSC" },
  { name: "Solana", url: "/assets/svg/sol.svg", short: "SOL" },
  { name: "Uniswap", url: "/assets/svg/uni.svg", short: "UNI" },
  { name: "Cardano", url: "/assets/svg/ada.svg", short: "ADA" },
  { name: "BinanceUSD(ERC20)", url: "/assets/svg/busd.svg", short: "BUSD" },
  { name: "Dai(ERC20)", url: "/assets/svg/dai.svg", short: "DAI" },
  { name: "Dogecoin", url: "/assets/svg/doge.svg", short: "DOGE" },
];

const updateCardData: UpdateCard[] = [
  { title: "Goatseus Maximus(SOL)", logo: "/assets/svg/goat.svg" },
  { title: "Peanut the Squirrel(SOL)", logo: "/assets/svg/pnut.webp" },
  { title: "Dai(MATIC)", logo: "/assets/svg/dai.svg" },
];

const cardData: Service[] = [
  {
    subtitle: "Privacy-Driven",
    description: "Anonymized exchange with no sign-ups or limits.",
    logo: "/assets/image/privacy-driven.webp",
  },
  {
    subtitle: "Seamless Exchange",
    description:
      "Fast and effective exchange between wallets and cryptocurrencies.",
    logo: "/assets/image/seamless-process.webp",
  },
  {
    subtitle: "Zero Wallet Limits",
    description: "No wallet or amount limitations on all exchanges through us!",
    logo: "/assets/image/no-limits-wallet.webp",
  },
];

function MainContainer() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [modalNo, setModalNo] = React.useState<number>(1);
  const [sendCrypto, setSendCrypto] = React.useState<number>(0);
  const [receiveCrypto, setReceiveCrypto] = React.useState<number>(1);

  return (
    <div>
      <HomeHeader></HomeHeader>
      <PrivacyAndSecurity cardData={cardData}></PrivacyAndSecurity>
      <ExchangeCrypto
        cryptoData={cryptoData}
        setOpen={setOpen}
        setModalNo={setModalNo}
        sendCrypto={sendCrypto}
        receiveCrypto={receiveCrypto}
        setSendCrypto={setSendCrypto}
        setReceiveCrypto={setReceiveCrypto}
      ></ExchangeCrypto>
      <RecentTransaction></RecentTransaction>
      <SupportedCrypto cryptoData={cryptoData}></SupportedCrypto>
      <LatestUpdates updateCardData={updateCardData}></LatestUpdates>
      <TrackOrder></TrackOrder>
      <CryptoModal
        open={open}
        setOpen={setOpen}
        setSendCrypto={setSendCrypto}
        setReceiveCrypto={setReceiveCrypto}
        cryptoData={cryptoData}
        modalNo={modalNo}
      ></CryptoModal>
    </div>
  );
}
export default MainContainer;
