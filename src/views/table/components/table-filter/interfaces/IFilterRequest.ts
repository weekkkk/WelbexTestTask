import { TestTableColumnEnum } from "../enums";
import { FilterConditionEnum } from "../enums";
/**
 * Запрос фильтра
 */
export default interface IFilterRequest {
  /**
   * Колонка по которой происводится фильтраци
   */
  Column: TestTableColumnEnum
  /**
   * Условие по которому происводится фильтраци
   */
  Condition: FilterConditionEnum
  /**
   * Занчение, с котором стравниваются строки
   */
  Value: string | number
}