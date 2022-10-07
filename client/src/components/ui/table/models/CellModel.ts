import { ICell } from "../interfaces";
/**
 * Ячейка
 */
export default class CellModel implements ICell {
  /**
   * Уникальный ключ
   */
  Id: number = 0;
  /**
   * Заголовок
   */
  Title: string = "";
  constructor(obj?: Partial<CellModel>) {
    if (obj) Object.assign(this, obj);
  }
}
