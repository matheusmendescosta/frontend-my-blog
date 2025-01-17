"use client";

import { userDto } from "@/dto/userDto";
import { useEffect, useState } from "react";

export default function useEmployee({ employeeId }: { employeeId: string }) {
  const [user, setUser] = useState<userDto>();

  useEffect(() => {
    const token = "your-token-here"; // Replace with your actual token
    fetch(`http://localhost:3333/api/employee/${employeeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fail");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employeeId, setUser]);

  return { user };
}
