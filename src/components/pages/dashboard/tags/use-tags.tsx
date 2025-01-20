"use client";

import { tagDto } from "@/dto/tagDto";
import { useCallback, useEffect, useState } from "react";

export const useTags = () => {
  const [tags, setTags] = useState<tagDto[]>([]);

  const loadPosts = useCallback(() => {
    fetch("http://localhost:3333/api/v1/tags")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch fail");
        }
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.tags)) {
          setTags(data.tags); // Corrige a estrutura dos dados
        } else {
          console.error("Invalid response format:", data);
          setTags([]); // Evita erros caso o formato esteja incorreto
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return { tags, setTags };
};
