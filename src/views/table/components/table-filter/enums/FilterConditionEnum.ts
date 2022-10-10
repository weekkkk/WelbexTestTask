/**
 * Условия фильтрации
 */
enum FilterConditionEnum {
  /**
   * Равно
   */
  Equals = 1,
  /**
   * Содержит
   */
  Contains = 2,
  /**
   * Больше
   */
  More = 3,
  /**
   * Меньше
   */
  Less = 4,
}
export default FilterConditionEnum;
