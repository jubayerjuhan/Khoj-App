import * as React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

export default function FindingSvg(props) {
  return (
    <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}>
      <Rect width="110" height="30" rx="15" fill="#D5E6FC" />
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M27.8657 21.122L24.7837 17.9854C26.9432 15.762 27.009 12.193 24.933 9.88788C22.857 7.58275 19.3752 7.35888 17.0335 9.37995C14.6918 11.401 14.3205 14.9504 16.191 17.4329C18.0615 19.9154 21.5107 20.4507 24.0165 18.6475L27.1586 21.8626C27.3557 22.0506 27.6629 22.045 27.8535 21.8501C28.044 21.6551 28.0494 21.3408 27.8657 21.139V21.122ZM16.088 13.8898C16.088 11.2509 18.1787 9.11156 20.7577 9.11156C23.3367 9.11156 25.4274 11.2509 25.4274 13.8898C25.4274 16.5288 23.3367 18.668 20.7577 18.668C18.1787 18.668 16.088 16.5288 16.088 13.8898Z" fill="#1977F3" />
      <Path d="M27.8657 21.122H28.3657V20.9174L28.2224 20.7715L27.8657 21.122ZM24.7837 17.9854L24.425 17.637L24.0847 17.9874L24.4271 18.3358L24.7837 17.9854ZM24.0165 18.6475L24.3741 18.2981L24.0735 17.9905L23.7245 18.2417L24.0165 18.6475ZM27.1586 21.8626L26.801 22.2121L26.8072 22.2184L26.8136 22.2245L27.1586 21.8626ZM27.8657 21.139H27.3657V21.3326L27.496 21.4757L27.8657 21.139ZM28.2224 20.7715L25.1403 17.635L24.4271 18.3358L27.5091 21.4724L28.2224 20.7715ZM25.1424 18.3338C27.4855 15.9213 27.5564 12.0537 25.3045 9.55327L24.5615 10.2225C26.4616 12.3323 26.4009 15.6027 24.425 17.637L25.1424 18.3338ZM25.3045 9.55327C23.0473 7.04699 19.2555 6.80177 16.7069 9.00144L17.3602 9.75847C19.495 7.91599 22.6666 8.11852 24.5615 10.2225L25.3045 9.55327ZM16.7069 9.00144C14.1643 11.1959 13.764 15.0427 15.7917 17.7338L16.5903 17.132C14.877 14.8581 15.2194 11.6062 17.3602 9.75847L16.7069 9.00144ZM15.7917 17.7338C17.8239 20.4309 21.5795 21.0172 24.3086 19.0534L23.7245 18.2417C21.4418 19.8843 18.2991 19.3998 16.5903 17.132L15.7917 17.7338ZM23.6589 18.997L26.801 22.2121L27.5162 21.5131L24.3741 18.2981L23.6589 18.997ZM26.8136 22.2245C27.2091 22.6016 27.8294 22.59 28.211 22.1995L27.4959 21.5006C27.4947 21.5018 27.4948 21.5013 27.4962 21.5007C27.4973 21.5002 27.4984 21.5 27.4995 21.5C27.5005 21.5 27.5017 21.5002 27.5029 21.5006C27.5044 21.5012 27.5047 21.5017 27.5036 21.5007L26.8136 22.2245ZM28.211 22.1995C28.5869 21.8149 28.5972 21.1997 28.2354 20.8024L27.496 21.4757C27.4978 21.4776 27.5001 21.4813 27.5 21.4885C27.4999 21.4956 27.4974 21.499 27.4959 21.5006L28.211 22.1995ZM28.3657 21.139V21.122H27.3657V21.139H28.3657ZM16.588 13.8898C16.588 11.5161 18.4656 9.61156 20.7577 9.61156V8.61156C17.8918 8.61156 15.588 10.9856 15.588 13.8898H16.588ZM20.7577 9.61156C23.0498 9.61156 24.9274 11.5161 24.9274 13.8898H25.9274C25.9274 10.9856 23.6236 8.61156 20.7577 8.61156V9.61156ZM24.9274 13.8898C24.9274 16.2635 23.0498 18.168 20.7577 18.168V19.168C23.6236 19.168 25.9274 16.794 25.9274 13.8898H24.9274ZM20.7577 18.168C18.4656 18.168 16.588 16.2635 16.588 13.8898H15.588C15.588 16.794 17.8918 19.168 20.7577 19.168V18.168Z" fill="#1977F3" />
      <Path d="M39.1328 19H38.0781V10.5449H43.2109V11.4941H39.1328V14.4004H42.877V15.3379H39.1328V19ZM45.8398 19V12.6836H46.8477V19H45.8398ZM46.8418 11.1953C46.7051 11.332 46.5391 11.4004 46.3438 11.4004C46.1484 11.4004 45.9824 11.332 45.8457 11.1953C45.709 11.0547 45.6406 10.8887 45.6406 10.6973C45.6406 10.5059 45.709 10.3418 45.8457 10.2051C45.9824 10.0645 46.1484 9.99414 46.3438 9.99414C46.5391 9.99414 46.7051 10.0645 46.8418 10.2051C46.9785 10.3418 47.0469 10.5059 47.0469 10.6973C47.0469 10.8887 46.9785 11.0547 46.8418 11.1953ZM49.7695 19V12.6836H50.7305V13.6797H50.8242C51.1602 12.9414 51.793 12.5723 52.7227 12.5723C53.4297 12.5723 53.9746 12.7754 54.3574 13.1816C54.7402 13.584 54.9316 14.1602 54.9316 14.9102V19H53.9238V15.1562C53.9238 14.5898 53.8008 14.1699 53.5547 13.8965C53.3125 13.6191 52.9395 13.4805 52.4355 13.4805C51.9277 13.4805 51.5234 13.6406 51.2227 13.9609C50.9258 14.2773 50.7773 14.7109 50.7773 15.2617V19H49.7695ZM60.1152 19.1113C59.3066 19.1113 58.6621 18.8145 58.1816 18.2207C57.7012 17.627 57.4609 16.834 57.4609 15.8418C57.4609 14.8535 57.7012 14.0625 58.1816 13.4688C58.666 12.8711 59.3105 12.5723 60.1152 12.5723C60.5566 12.5723 60.9512 12.6719 61.2988 12.8711C61.6504 13.0664 61.916 13.3359 62.0957 13.6797H62.1836V10.1758H63.1914V19H62.2305V17.9922H62.1367C61.9375 18.3438 61.6602 18.6191 61.3047 18.8184C60.9492 19.0137 60.5527 19.1113 60.1152 19.1113ZM60.3496 13.4805C59.7754 13.4805 59.3242 13.6914 58.9961 14.1133C58.668 14.5312 58.5039 15.1074 58.5039 15.8418C58.5039 16.5801 58.666 17.1582 58.9902 17.5762C59.3184 17.9941 59.7715 18.2031 60.3496 18.2031C60.9238 18.2031 61.377 17.9922 61.709 17.5703C62.041 17.1484 62.207 16.5723 62.207 15.8418C62.207 15.1191 62.0391 14.5449 61.7031 14.1191C61.3711 13.6934 60.9199 13.4805 60.3496 13.4805ZM66.1719 19V12.6836H67.1797V19H66.1719ZM67.1738 11.1953C67.0371 11.332 66.8711 11.4004 66.6758 11.4004C66.4805 11.4004 66.3145 11.332 66.1777 11.1953C66.041 11.0547 65.9727 10.8887 65.9727 10.6973C65.9727 10.5059 66.041 10.3418 66.1777 10.2051C66.3145 10.0645 66.4805 9.99414 66.6758 9.99414C66.8711 9.99414 67.0371 10.0645 67.1738 10.2051C67.3105 10.3418 67.3789 10.5059 67.3789 10.6973C67.3789 10.8887 67.3105 11.0547 67.1738 11.1953ZM70.1016 19V12.6836H71.0625V13.6797H71.1562C71.4922 12.9414 72.125 12.5723 73.0547 12.5723C73.7617 12.5723 74.3066 12.7754 74.6895 13.1816C75.0723 13.584 75.2637 14.1602 75.2637 14.9102V19H74.2559V15.1562C74.2559 14.5898 74.1328 14.1699 73.8867 13.8965C73.6445 13.6191 73.2715 13.4805 72.7676 13.4805C72.2598 13.4805 71.8555 13.6406 71.5547 13.9609C71.2578 14.2773 71.1094 14.7109 71.1094 15.2617V19H70.1016ZM80.6641 18.0156C81.2461 18.0156 81.7031 17.8125 82.0352 17.4062C82.3711 16.9961 82.5391 16.4434 82.5391 15.748C82.5391 15.0566 82.3711 14.5059 82.0352 14.0957C81.6992 13.6855 81.2422 13.4805 80.6641 13.4805C80.0859 13.4805 79.6367 13.6836 79.3164 14.0898C78.9961 14.4961 78.8359 15.0488 78.8359 15.748C78.8359 16.4473 78.9961 17 79.3164 17.4062C79.6367 17.8125 80.0859 18.0156 80.6641 18.0156ZM80.7109 21.4258C79.957 21.4258 79.3457 21.2695 78.877 20.957C78.4121 20.6445 78.1406 20.2246 78.0625 19.6973H79.1289C79.1836 19.959 79.3496 20.166 79.627 20.3184C79.9043 20.4707 80.2656 20.5469 80.7109 20.5469C81.2773 20.5469 81.7188 20.4141 82.0352 20.1484C82.3555 19.8867 82.5156 19.5234 82.5156 19.0586V17.8164H82.4219C82.2227 18.1641 81.9512 18.4336 81.6074 18.625C81.2637 18.8125 80.875 18.9062 80.4414 18.9062C79.6289 18.9062 78.9844 18.6191 78.5078 18.0449C78.0312 17.4668 77.793 16.7012 77.793 15.748C77.793 14.7949 78.0332 14.0273 78.5137 13.4453C78.9941 12.8633 79.6367 12.5723 80.4414 12.5723C80.8828 12.5723 81.2852 12.6738 81.6484 12.877C82.0117 13.0762 82.2852 13.3457 82.4688 13.6855H82.5625V12.6836H83.5234V19.1113C83.5234 19.8184 83.2695 20.3809 82.7617 20.7988C82.2539 21.2168 81.5703 21.4258 80.7109 21.4258Z" fill="#1977F3" />
    </Svg>
  );
}