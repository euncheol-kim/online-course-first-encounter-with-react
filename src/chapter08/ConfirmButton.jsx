import React, {useState} from "react";

// 1] bind()방식
// class ConfirmButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isConfirmed: false,
//         };

//         this.handleConfirm = this.handleConfirm.bind(this);
//     }

//     handleConfirm() {
//         this.setState((prevState) => ({
//             isConfirmed: !prevState.isConfirmed,
//         }));
//     }

//     render() {
//         return (
//             <button
//                 onClick={this.handleConfirm}
//                 disabled={this.state.isConfirmed}
//             >
//                 {this.state.isConfirmed ? "확인됨" : "확인하기"}
//             </button>
//         );
//     }
// }


// 2] 화살표 함수 방식
// class ConfirmButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isConfirmed: false,
//         };

//     }

//     handleConfirm = () => {
//         this.setState((prevState) => ({
//             isConfirmed: !prevState.isConfirmed,
//         }));
//     }

//     render() {
//         return (
//             <button
//                 onClick={this.handleConfirm}
//                 disabled={this.state.isConfirmed}
//             >
//                 {this.state.isConfirmed ? "확인됨" : "확인하기"}
//             </button>
//         );
//     }
// }

// 3] 함수 컴포넌트로의 변경
// 가장 많이 사용할 방식이므로 숙지
// function ConfirmButton(props) {
//     const[isConfirmed, setIsConfirmed] = useState(false);
    
//     const handleConfirm = () => {
//         setIsConfirmed((prevIsConfirmed) => !isConfirmed);
//     }


//     return(
//         <button onClick={handleConfirm} disabled={isConfirmed}> 
//             {isConfirmed ? "확인됨" : "확인하기"}
//         </button>
//     );
// }

// 4 ] arrow function으로 변경해보기
const ConfirmButton = (props) => {
    const[isConfirmed, setIsConfirmed] = useState(false);
    
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !isConfirmed);
    }


    return(
        <button onClick={handleConfirm} disabled={isConfirmed}> 
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;
