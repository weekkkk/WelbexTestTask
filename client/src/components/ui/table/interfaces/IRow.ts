import { CellModel } from "../models";
/**
 * Строка
 */
export default interface IRow {
  /**
   * Уникальный ключ
   */
  Id: number;
  /**
   * Ячейки
   */
  Cells: CellModel[];
}
