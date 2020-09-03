import React from 'react';

function Hello({color, name, isSpecial}){ 
const style = {
    color: color,
    paddingBottom: 20
}
return (
    <>
        <div>안녕하세요 {name}입니다.</div>  
        <div style={style}>내가 좋아하는 컬러는 {color}입니다.
            {isSpecial && <div>진짜예요!</div> || <div>농담이에요</div>}
        </div>
    </>
    ) 
}
Hello.defaultProps = {
    name: '이름없음',
    color: 'blue'
}

export default Hello; 