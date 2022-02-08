
import { IPosition, IPlayer, Player } from './player';
import { buildTetrominos, randomTetromino } from './shapes';
import { TetrisStage, TetrisStageBuilder } from './stage';


export {
    buildTetrominos, randomTetromino, TetrisStageBuilder, Player
};
export type { IPosition, IPlayer, TetrisStage };
// export as namespace Game



// // TODO use me instead

// export Game from './'


// class a {
//     constructor() {
//         Game.buildTetrominos()
//     }
// }

// declare module '_Game' {
//     export namespace Game {}
// }
