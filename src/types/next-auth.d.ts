import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      token: string;
    };
  }
}

declare module "next-auth" {
  interface User {
    role?: string;
    token?: string;
  }
}
