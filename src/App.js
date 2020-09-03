import React, { useRef, useState, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })
  const { username, email } = inputs;
  const onChange = e =>{
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'bmyu',
        email: 'bomee88@naver.com',
        active: true,
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false,
    },
    {
        id: 3,
        username: 'sample',
        email: 'sample@example.com',
        active: false,
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email:''
    })
    console.log(nextId.current); // 4
    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id)); //지우는id와 비교해서 아닌것만 배열에 넣는 것이다.
  }

  const onToggle = id => {
    setUsers(users.map(
      user => user.id ===id? { ...user, active: !user.active }
      :user
    ))
  }
  const count = useMemo(() => countActiveUsers(users),[users]); //이 부분은 useMemo로 감싸준다. useEffect와 같이 첫번째 파라미터는 함수, 두번째 deps 배열에는 바뀌는 것을 참조할 props를 넣어준다. 결국 deps의 값이 바뀌어야만 앞의 파라미터에 들어있는 함수를 실행시킨다.

  return(
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users} 
        onRemove={onRemove} 
        onToggle={onToggle}
      />
      <div>활성 사용자 수 : {count}</div>
    </>
  )
}

export default App;
