import { CellModel } from ".";
import { IRow } from "../interfaces";
/**
 * Ячейка
 */
export default class RowModel implements IRow {
  /**
   * Уникальный ключ
   */
  Id: number = 0;
  /**
   * Ячейки
   */
  Cells: CellModel[] = [];
  constructor ( obj?: Partial<RowModel> ) {
    if ( obj ) Object.assign( this, obj );
  }
}
