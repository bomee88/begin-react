import React, { Component } from 'react'

class Hello extends Component {
  static defaultProps = { //class에서는 defaultProps를 이렇게 설정해줄 수도 있음.
    name: '이름없음',
    color: ''
  }
  render(){
    const { color, isSpecial, name } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    )
  }
}


// function Hello({color, name, isSpecial}){ 
// const style = {
//     color: color,
//     paddingBottom: 20
// }
// return (
//     <>
//         <div>안녕하세요 {name}입니다.</div>  
//         <div style={style}>내가 좋아하는 컬러는 {color}입니다.
//             {isSpecial && <div>진짜예요!</div> || <div>농담이에요</div>}
//         </div>
//     </>
//     ) 
// }
// Hello.defaultProps = {
//     name: '이름없음',
//     color: 'blue'
// }

export default Hello; 