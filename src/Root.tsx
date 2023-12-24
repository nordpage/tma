import {
  SDKProvider,
} from '@tma.js/sdk-react';

import './App.css';
import WebApp from "@twa-dev/sdk";
import {SteamProfile} from "./pages/SteamProfile.tsx";


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
  return (
      <SDKProvider options={{ acceptCustomStyles: true, cssVars: true }}>
        <div className="container">
          <p className="title">Hello, {WebApp.initDataUnsafe.user?.first_name}!</p>
            <SteamProfile/>
        </div>
      </SDKProvider>
  );
}
