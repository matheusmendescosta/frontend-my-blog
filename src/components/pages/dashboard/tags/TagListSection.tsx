'use client';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useTags } from './use-tags';

const TagListSection = () => {
  const { tags, isLoading, error } = useTags();

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
          {tags &&
            tags.tags.map((tag, index) => (
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
