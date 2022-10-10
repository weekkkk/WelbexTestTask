import { TestTableColumnEnum } from "../../../enums";
import { SortConditionEnum } from "../enums";
/**
 * Запрос сортировки
 */
export default interface IFilterRequest {
  /**
   * Колонка по которой происводится сортировка
   */
  Column: TestTableColumnEnum
  /**
   * Условие по которому происводится сортировка
   */
  Condition: SortConditionEnum
}