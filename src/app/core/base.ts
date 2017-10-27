/**
 * Класс-загрушка для обозначения базового класса Object при использовании миксинов
 * Пример:
 * `class RequestObjectCard extends ExtraCardMixin(BaseObject) {`
 */
export class BaseObject {
  constructor(...args: any[]) {}
}

/**
 * Тип-помошник для создания миксинов
 * Пример:
 * `export function ExtraCardMixin<TBase extends Constructor>(Base: TBase) {`
 */
export type Constructor<T = BaseObject> = new(...args: any[]) => T;
