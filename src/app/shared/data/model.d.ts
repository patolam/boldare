export interface Person {
  name?: string;
  surname?: string;
  city?: string;
  country?: string;
}

export interface Stats {
  likes?: number;
  following?: number;
  followers?: number;
}

export interface Comment {
  name?: string;
  surname?: string;
  text?: string;
  date?: number;
}

export interface Profile {
  person?: Person;
  stats?: Stats;
  comments?: Comment[];
}

export interface User {
  liked?: boolean;
  followed?: boolean;
  person?: Person;
}

export interface Auth {
  id?: string;
  email?: string;
  token?: string;
}
