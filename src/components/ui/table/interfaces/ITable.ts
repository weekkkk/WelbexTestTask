import { RowModel } from "../models";
/**
 * Строка
 */
export default interface IRow {
  /**
   * Уникальный ключ
   */
  Id: number;
  /**
   * Шапка
   */
  Header: RowModel;
  /**
   * Строки
   */
  Rows: RowModel[];
}
