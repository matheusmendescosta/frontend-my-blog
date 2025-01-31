// import { useState, useEffect } from 'react';

// interface PaginationOptions {
//   initialOffset?: number;
//   limit: number;
// }

// interface PaginationResult {
//   offset: number;
//   limit: number;
//   hasMore: boolean;
//   nextPage: () => void;
//   resetPagination: () => void;
// }

// const usePagination = ({ initialOffset = 0, limit }: PaginationOptions): PaginationResult => {
//   const [offset, setOffset] = useState(initialOffset);
//   const [hasMore, setHasMore] = useState(false);

//   const nextPage = () => {
//     setOffset((prevOffset) => prevOffset + limit);
//   };

//   const resetPagination = () => {
//     setOffset(initialOffset);
//     setHasMore(false);
//   };

//   useEffect(() => {
//     // Here you would typically check if there are more items to load from the backend
//     // For example, you could make an API call to check if there are more items
//     // and update the hasMore state accordingly.
//     // This is a placeholder for that logic.
//     const checkHasMoreItems = async () => {
//       // Example API call to check if there are more items
//       // const response = await fetch(`/api/items?offset=${offset}&limit=${limit}`);
//       // const data = await response.json();
//       // setHasMore(data.hasMore);

//       // Placeholder logic
//       setHasMore(true); // Set to false when there are no more items
//     };

//     checkHasMoreItems();
//   }, [offset, limit]);

//   return {
//     offset,
//     limit,
//     hasMore,
//     nextPage,
//     resetPagination,
//   };
// };

// export default usePagination;
