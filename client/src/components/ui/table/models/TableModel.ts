import { ITable } from "../interfaces";
import { RowModel } from "../models";
/**
 * Строка
 */
export default class TableModel implements ITable {
  /**
   * Уникальный ключ
   */
  Id: number = 0;
  /**
   * Шапка
   */
  Header: RowModel = new RowModel();
  /**
   * Строки
   */
  Rows: RowModel[] = [];
  constructor ( obj?: Partial<TableModel> ) {
    if ( obj ) Object.assign( this, obj );
  }
}
