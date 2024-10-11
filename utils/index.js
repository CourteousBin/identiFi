import { ethers } from 'ethers';
import identiFi from './IdentiFi.json'

export const contract = async () => {
  // const provider = new ethers.providers.JsonRpcProvider('https://pre-rpc.bt.io');
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner()
    const contractReader = new ethers.Contract(
      '0xD0EdEeD3ea404b2eE4B9A2e618F1964bBA69bcbE',
      identiFi.abi,
      signer
    )
    return contractReader
  }

}