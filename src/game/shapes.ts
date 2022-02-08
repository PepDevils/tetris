
// TODO use me instead
    //#region types
    export type IShape = Array<Array<string|number>>;
    export type ITetrominus = Record<string, ITetrisPiece>;
    //#endregion

    //#region interfaces
    export interface ITetrisPiece {
        shape: IShape;
        color: string;
        complexity: number;
    }
    //#endregion

    //#region class's
    export class TetrisPiece implements ITetrisPiece {

        constructor(
            public shape: IShape,
            public color: string,
            public complexity: number
        ) {

        }
    }
    //#endregion

    //#region functions
    export const buildTetrominos: () => ITetrominus = () => {
        const record = {} as ITetrominus;
        record['0'] = new TetrisPiece([[0]], '0, 0, 0', 0)
        record['I'] = new TetrisPiece([[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]], '80, 227, 230', 0)
        record['J'] = new TetrisPiece([[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]], '36, 95, 223', 0)
        record['L'] = new TetrisPiece([[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']], '223, 173, 36', 0)
        record['O'] = new TetrisPiece([['O', 'O'], ['O', 'O']],'223, 217, 36' , 0)
        record['S'] = new TetrisPiece([[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]], '48, 211, 56', 0)
        record['T'] = new TetrisPiece([[0, 0, 0], ['T', 'T', 'T'], [0, 'T', 0]], '132, 61, 198', 0)
        record['Z'] = new TetrisPiece([['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]], '227, 78, 78' , 0)
        return record;
    }
    
    
    export const randomTetromino: (tetrominus: ITetrominus) => ITetrisPiece = (tetrominus: ITetrominus) => {
        // const tetrominosIndexes = 'IJLOSTZ';
        const keys = Object.keys(tetrominus);
        const tetrominosIndexes = [...keys];
    
        const randTetromino: any =
          tetrominosIndexes[Math.floor(Math.random() * tetrominosIndexes.length)];
    
        return tetrominus[randTetromino];
    
        // return TETROMINOS[randTetromino];
    };
    //#endregion