interface User {
  name: string;
  id: number;
}

const func = (user: User, gender: string | boolean): object => {
  const userInfo = {
    id: user.id,
    name: user.name,
    gender:
      typeof gender === "string" ? gender : gender === true ? "male" : "female",
  };
  return userInfo;
};

console.log(func({ name: "Helen", id: 12 }, false));
