const func = (user, gender) => {
    const userInfo = {
        id: user.id,
        name: user.name,
        gender: typeof gender === "string" ? gender : gender === true ? "male" : "female",
    };
    return userInfo;
};
console.log(func({ name: "Helen", id: 12 }, false));
export {};
//# sourceMappingURL=index.js.map