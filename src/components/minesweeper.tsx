import MinesweeperGame from "react-minesweeper";

export function Minesweeper({ onWin, onLose }: { onWin: any; onLose: any }) {
  return (
    <div>
      <MinesweeperGame onWin={onWin} onLose={onLose} />
    </div>
  );
}
