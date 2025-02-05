// "use client";

// import { userDto } from "@/dto/userDto";
// import { getToken } from "next-auth/jwt";
// import { NextRequest } from "next/server";
// import { useEffect, useState } from "react";

// export default function useEmployee(req: NextRequest) {
//   const [user, setUser] = useState<userDto>();

//   useEffect(() => {
//     const token = getToken({ req });
//     fetch(`localhost:3333/api/v1/user`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Fail");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUser(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [user, setUser]);

//   return { user };
// }
