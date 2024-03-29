import MemoBlock from '../MemoBlock/memoBlock';
import './style.css';

const Board = ({animating, handleMemoClick, memoBlocks}) => {
    return (
        <main className="board">
            {memoBlocks.map( (memoBlock, i) => {
                return <MemoBlock key={`${i}_${memoBlock.emoji}`} animating={animating} handleMemoClick={handleMemoClick} memoBlock={memoBlock} />
            })}
        </main>
    );
}

export default Board;
