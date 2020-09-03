import React, { useEffect } from 'react'; //0. useEffect 선언

function User({ user, onRemove, onToggle }){
    const {username, email, id, active} = user;
    useEffect(()=>{
        //console.log('user 값이 설정됨');
        //console.log(user);
        return () => {
            //console.log('user 값이 바뀌기 전');
            //console.log(user);
        }
    },[user]);

    return(
        <div>
            <b
             style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button 
            //onRemove(id)이런식으로 쓰면 안됨
            onClick={() => onRemove(id)}>삭제</button> 
        </div>
    )
}

function UserList({ users, onRemove, onToggle }){
    return(
        <div>
            {
                users.map(
                    (user, index) => (
                    <User 
                        user={user} 
                        key={user.id}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />) //각 객체마다 가지고 있는 고유값을 설정해주어야 함. key
                )
            }
        </div>
    )
}

export default UserList;