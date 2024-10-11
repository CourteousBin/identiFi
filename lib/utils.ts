import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * clsx
 * 简单易用: clsx 提供了一种简洁的方式来处理多个类名，可以通过条件判断来决定是否包含某个类名。
 * 支持多种输入类型: clsx 可以接受字符串、数组和对象作为参数。
 * 对象：可以使用对象的键值对，键是类名，值是布尔值，只有当值为 true 时，类名才会被包含在结果中。
 */

/**
 * twMerge
 * 它的主要功能是合并多个 Tailwind CSS 类名，并自动解决类名之间的冲突，以确保最终生成的类名是有效且符合预期的。
 * 自动合并: twMerge 会根据 Tailwind CSS 的优先级规则合并类名。
 * 例如，如果你同时使用了 bg-red-500 和 bg-blue-500，它会只保留最后一个有效的类名
 * 简化类名管理: 在使用 Tailwind CSS 时，可能会出现多个类名相互冲突的情况。twMerge 可以帮助开发者轻松管理这些类名，避免手动处理冲突。
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 这段代码通过结合 clsx 和 tailwind-merge，提供了一个强大的工具，
 * 用于在 React 或其他 JavaScript 框架中动态生成和合并 Tailwind CSS 类名。
 * 它不仅简化了类名的管理，还确保了最终生成的类名是有效且符合预期的。
 */