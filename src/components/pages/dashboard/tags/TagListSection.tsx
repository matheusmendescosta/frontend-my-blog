"use client";

import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { useTags } from "./use-tags";
import { DeleteIcon } from "lucide-react";

const TagListSection = () => {
  const { tags } = useTags();

  return (
    <>
      <Table>
        <TableCaption>A list of your recent tags.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead className="text-right">action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tags.map((tag, index) => (
            <TableRow key={index}>
              <TableCell>{tag.name}</TableCell>
              <TableCell>{tag.slug}</TableCell>
              <TableCell className="text-right">Delete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TagListSection;
