import React from 'react';
import favicon from '../../../photos/favicon.jpg';
import curvedCopper from '../../../photos/copperCurved.png';

import './MyWave.scss';
class MyWave extends React.Component {
  render() {
    return (
      <div className="wave">
        <div className="wave">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,160L40,160C80,160,160,160,240,176C320,192,400,224,480,224C560,224,640,192,720,154.7C800,117,880,75,960,96C1040,117,1120,203,1200,202.7C1280,203,1360,117,1400,74.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
   {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="374659" src={curvedCopper} fill-opacity="1" d="M0,64L34.3,85.3C68.6,107,137,149,206,144C274.3,139,343,85,411,58.7C480,32,549,32,617,74.7C685.7,117,754,203,823,197.3C891.4,192,960,96,1029,90.7C1097.1,85,1166,171,1234,197.3C1302.9,224,1371,192,1406,176L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
</svg>   
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2e3F53" fill-opacity="1" d="M0,96L26.7,112C53.3,128,107,160,160,165.3C213.3,171,267,149,320,133.3C373.3,117,427,107,480,85.3C533.3,64,587,32,640,42.7C693.3,53,747,107,800,154.7C853.3,203,907,245,960,272C1013.3,299,1067,309,1120,309.3C1173.3,309,1227,299,1280,261.3C1333.3,224,1387,160,1413,128L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>       
</div> 
             <img className="favicon" src={curvedCopper}/>
             <div className="color-variant"></div>
    //  <i className="navbar-brand text-center mx-auto"> 2021 OEM Tube Assemblies</i> */}
          </div>
      </div>
    );
  }
}

export default MyWave;