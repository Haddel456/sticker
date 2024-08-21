import { useCallback, useState } from "react";
import {
  useGetBoards,
  useGetBoard,
} from "../api/boardsApi";
import { demoBoardList } from "../../pages/dashboardPage/demoData";

export const useBoardsHelpers = () => {
  const [pendingGetBoards, setPendingBoards] = useState(false);
  const [isErrorGetBoards, setIsErrorBoards] = useState(false);


//   const [getBoardsApi] = useGetBoard();


 const getBoard = ()=> demoBoardList[0];
// useCallback(
//     async (id) => {
//         // setPendingBoards(true);
//         // setIsErrorBoards(false);
//         // try {
//         //     const boardsData = await getBoardsApi(id);

//         //     return boardsData.data;
//         // } catch (e) {
//         //     console.log("🚀 ~ getEvent ~ e:", e.stack);
//         //     setIsErrorBoards(true);
//         // } finally {
//         //     setPendingBoards(false);
//         // }
//         return BoardsList[0];
//     },
//     [getBoardsApi]
//   );


  return {
    getBoard,
    pendingGetBoards,
    isErrorGetBoards
  };
};