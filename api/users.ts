export interface User {
  id: string;
  name: string;
}

const USERS: User[] = [
  { id: "usr_1", name: "Ada" },
  { id: "usr_2", name: "Linus" },
  { id: "usr_3", name: "Grace" },
];

/** GET /users */
export function listUsers() {
  return { data: USERS };
}
