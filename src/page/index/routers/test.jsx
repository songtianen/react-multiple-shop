import React from 'react';
import axios from 'axios';

function Test() {
  function getData() {
    axios
      .post('/api/user/login', { username: '宋天恩', password: '123456' })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div
      style={{
        width: 100,
        height: 100,
        marginBottom: 100,
        background: 'red',
      }}
      onClick={getData}
    >
      测试json-server
    </div>
  );
}
export default Test;
