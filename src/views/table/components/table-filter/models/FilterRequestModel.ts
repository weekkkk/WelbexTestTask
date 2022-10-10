import { TestTableColumnEnum } from "../../../enums";
import { FilterConditionEnum } from "../enums";
import { IFilterRequest } from "../interfaces";
/**
 * Запрос фильтра
 */
export default class FilterRequestModel implements IFilterRequest {
  /**
   * Колонка по которой происводится фильтраци
   */
  Column: TestTableColumnEnum = TestTableColumnEnum.Name;
  /**
   * Условие по которому происводится фильтраци
   */
  Condition: FilterConditionEnum = FilterConditionEnum.Equals;
  /**
   * Занчение, с котором стравниваются строки
   */
  Value: string | number = '';
  constructor(obj?: Partial<FilterRequestModel>) {
    if (obj) Object.assign(this, obj);
  }
}
