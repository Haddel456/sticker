import { useCallback, useState } from "react";
import {
  useGetBoards,
  useGetBoard,
  useAddBoard,
  useDeleteBoard,
  useUpdateBoard,
} from "../api/boardsApi";
import { demoBoardList } from "../../pages/dashboardPage/demoData";

export const useBoardsHelpers = () => {
  const [pendingGetBoards, setPendingBoards] = useState(false);
  const [isErrorGetBoards, setIsErrorBoards] = useState(false);


  const [getBoardApi] = useGetBoard();
  const [getBoardsApi] = useGetBoards();
  const [addBoardApi] =  useAddBoard();
  const [deleteBoardApi] = useDeleteBoard();
  const [updateBoardApi] = useUpdateBoard();
  

const getBoards = useCallback(
  async () => {
      setPendingBoards(true);
      setIsErrorBoards(false); 
      try {
          const response = await getBoardsApi(); 
          const boardsData = response.data;
          setBoardsList(boardsData);

          return boardsData; 
      } catch (e) {
          console.log("🚀 ~ getBoards ~ e:", e.stack);
          setIsErrorBoards(true); 
      } finally {
          setPendingBoards(false); 
      }
  },
  [getBoardsApi] 
);

 const getBoard = useCallback(
    async (id) => {
        setPendingBoards(true);
        setIsErrorBoards(false);
        try {
            const boardsData = await getBoardsApi(id);
            return boardsData.data;
        } catch (e) {
            console.log("🚀 ~ getEvent ~ e:", e.stack);
            setIsErrorBoards(true);
        } finally {
            setPendingBoards(false);
        }
        return BoardsList[0];
    },
    [getBoardApi]
  );

  const addBoard = useCallback(
    async (data) => {
        setPendingBoards(true);
        setIsErrorBoards(false);
        try {
          const response = await addBoardApi(id, data);
          const newBoard = response.data;
          setBoardsList([...BoardsList, newBoard]);
          return newBoard;
        } catch (e) {
            console.log("🚀 ~ addBorad ~ e:", e.stack);
            setIsErrorBoards(true);
        } finally {
            setPendingBoards(false);
        }
    },
    [ id, getBoardsApi, addBoardApi, BoardsList]
  );


  const deleteBoard = useCallback(
    async (id) => {
        setPendingBoards(true);
        setIsErrorBoards(false);
        try {
          await deleteBoardApi(id); 
            setBoardsList(prevBoards => prevBoards.filter(board => board.id !== id));
            return id; 
        } catch (e) {
            console.log("🚀 ~ deleteBoard ~ e:", e.stack);
            setIsErrorBoards(true);
        } finally {
            setPendingBoards(false);
        }
    },
    [deleteBoardApi]
  );

  const updateBoard = useCallback(
    async (id, updatedData) => {
        setPendingBoards(true);
        setIsErrorBoards(false);
        try { 
            const response = await updateBoardApi(id, updatedData); 
            const updatedBoard = response.data;
            setBoardsList(prevBoards => 
                prevBoards.map(board => 
                    board.id === id ? updatedBoard : board
                )
            );

            return updatedBoard;
        } catch (e) {
            console.log("🚀 ~ updateBoard ~ e:", e.stack);
            setIsErrorBoards(true);
        } finally {
            setPendingBoards(false);
        }
    },
    [updateBoardApi]
);


  return {
    getBoards,
    getBoard,
    addBoard,
    deleteBoard,
    updateBoard,
    pendingGetBoards,
    isErrorGetBoards
  };
};