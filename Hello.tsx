import React, { useEffect, useState } from 'react';
import { Api } from './requests';
import { Select } from './Select';

export const PostList = () => {
  const [posts, setPosts] = useState<any>([]);
  useEffect(() => {
    const Get = async () => await Api.getData().then((data) => setPosts(data));
    Get();
  }, []);

  const users = [...new Set(posts.map((el) => el.userId))];
  console.log(posts);

  const [currentUser, setCurrentUser] = useState(1);

  const handleChange = (event) => {
    setCurrentUser(event.target.value);
  };

  console.log(currentUser);

  const options: any = users.map((el) => ({
    key: el,
    value: el,
    displayValue: `User: ${el}`,
  }));

  return (
    <div>
      <Select options={options} onChange={handleChange} />
      {posts
        .filter((el) => el.userId === +currentUser)
        .map((el) => (
          <div key={el.id}>
            <h1> {el.title}</h1>
            <span> {el.body}</span>
          </div>
        ))}
    </div>
  );
};
