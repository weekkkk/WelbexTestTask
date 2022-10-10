import { TestTableColumnEnum } from "../../../enums";
import { SortConditionEnum } from "../enums";
import { ISortRequest } from "../interfaces";
/**
 * Запрос сортировки
 */
export default class SortRequestModel implements ISortRequest {
  /**
   * Колонка по которой происводится сортировка
   */
  Column: TestTableColumnEnum = TestTableColumnEnum.Name;
  /**
   * Условие по которому происводится сортировка
   */
  Condition: SortConditionEnum = SortConditionEnum.More;
  constructor ( obj?: Partial<SortRequestModel> ) {
    if ( obj ) Object.assign( this, obj );
  }
}
