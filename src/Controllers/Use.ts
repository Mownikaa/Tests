import { NextFunction, Response, Request } from "express";

const users = [
    { id: 1, name: "Andrea", age: 3 },
    { id: 2, name: "Tom", age: 4 },
    { id: 3, name: "Jerry", age: 5 },
  ];
  export const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    res.json(users);
  };

  export const getUserById = (req: Request, res: Response, next: NextFunction) => {
    const user = users.find((user) => user.id === Number(req.params.id));
    res.json(user);
  };

  export const createUser = (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    users.push(user);
    res.json(user);  
  };

  export const updateUser = (req: Request, res: Response, next: NextFunction) => {
  const update = req.body;
  const userId = Number(req.params.id);
  const finduser = users.find((user) => user.id === userId);
  if(!finduser){
    return res.json("no user Found")
  }
  finduser.name = update.name;
  finduser.age = update.age;
  res.status(200).json(finduser);
};

export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const list = users.findIndex((user) => user.id === Number(req.params.id))
 if (list >= 0) {
  let deletedUser = users.splice(list, 1);
  res.status(200).json(users);
} else {
  res.status(404).json({ error: "No user found!!" });
}
};
