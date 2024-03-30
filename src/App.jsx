import "./App.css";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { useSignMessage } from "wagmi";
function App() {
  const { open } = useWeb3Modal();
  const { address, isConnected, isDisconnected } = useAccount();
  console.log(isConnected, isDisconnected);

  const { signMessage } = useSignMessage();
  return (
    <>
      <button onClick={() => open()}>connect</button>
      <br />
      <br />

      <button onClick={() => open({ view: "NetWork" })}>connect NetWork</button>

      <br />
      <br />
      <button onClick={() => signMessage({ message: "hello to my app " })}>
        show message
      </button>

      <br />
      <br />
      <span>{address}</span>
    </>
  );
}

export default App;
