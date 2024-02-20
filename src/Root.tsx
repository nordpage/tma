import {
    SDKProvider,
} from '@tma.js/sdk-react';

import './App.css';
import WebApp from "@twa-dev/sdk";
import {Mocks} from "./pages/Mocks.tsx";




// function MainButton() {
//   const mb = useMainButton();
//   const bb = useBackButton();
//
//   const [count, setCount] = useState(0);
//
//   useEffect(() => {
//     const removeMainButtonClick = mb.on('click', () => {
//       setCount((prevCount) => prevCount + 1);
//     });
//     const removeBackButtonClick = bb.on('click', () => {
//       setCount((prevCount) => prevCount - 1)
//     });
//
//     return () => {
//       removeMainButtonClick();
//       removeBackButtonClick();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//
//   // When component mounted, display Main Button.
//   useEffect(() => {
//     mb.enable().show();
//   }, [])
//
//   useEffect(() => {
//     mb.setText("Search");
//   }, [mb, count]);
//
//   useEffect(() => {
//     if (count === 0) {
//       bb.hide();
//       return;
//     }
//     bb.show();
//   }, [bb, count]);
//
//   return null;
// }
//
// /**
//  * Displays current application init data.
//  */
// function InitData() {
//   const initData = useInitData();
//
//   const initDataJson = useMemo(() => {
//     if (!initData) {
//       return 'Init data is empty.';
//     }
//     const { authDate, chat, hash, canSendAfter, queryId, receiver, user, startParam } = initData;
//
//     return JSON.stringify({
//       authDate,
//       chat,
//       hash,
//       canSendAfter,
//       queryId,
//       receiver,
//       user,
//       startParam,
//     }, null, ' ');
//   }, [initData]);
//
//   return (
//     <pre>
//       <code>
//         {initDataJson}
//       </code>
//     </pre>
//   );
// }
//
// interface SDKProviderErrorProps {
//   error: unknown;
// }
//
// function SDKProviderError({ error }: SDKProviderErrorProps) {
//   return (
//     <div>
//       Oops. Something went wrong.
//       <blockquote>
//         <code>
//           {error instanceof Error
//             ? error.message
//             : JSON.stringify(error)}
//         </code>
//       </blockquote>
//     </div>
//   );
// }
//
// function SDKProviderLoading() {
//   return <div>SDK is loading.</div>;
// }
//
// function SDKInitialState() {
//   return <div>Waiting for initialization to start.</div>;
// }



export function Root() {
    function buttonOn(){
        // do something on btn click
    }

    const main_page = document.querySelector('#main_page');


    if  (main_page){
        WebApp.expand() //expand window after page loading

        WebApp.MainButton.onClick(buttonOn) //set func on main button click
        WebApp.MainButton.show() //show telegram btn
    }
  return (
      <SDKProvider options={{ acceptCustomStyles: true, cssVars: true, async: true }}>
          <div className="container">
              <Mocks/>
          </div>
      </SDKProvider>
  );
}
