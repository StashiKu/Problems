// Миша сидел на занятиях математики в Высшей школе экономики и решал следующую задачу: дано n
//  целых чисел и нужно расставить между ними знаки + и ×
//  так, чтобы результат полученного арифметического выражения был нечётным (например, между числами 5, 7, 2
// , можно расставить арифметические знаки следующим образом:  5 × 7 + 2 = 37). 
// Так как примеры становились все больше и больше, а Миша срочно убегает в гости, от вас требуется написать программу решающую данную задачу.
// Формат ввода В первой строке содержится единственное число n (2 ≤ n ≤ 10^5). Во второй строке содержится n целых чисел ai
// , разделённых пробелами (−10^9 ≤ ai ≤ 10^9). Гарантируется, что решение существует.

// Формат вывода
//     В одной строке выведите n−1 символ + или ×, в результате применения которых получается нечётный результат. 
//     (Для вывода используйте соответственно знаки «+» (ASCII код—43) и «x» (ASCII код—120), без кавычек).

// Пример 1
// Ввод	Вывод
// 3        x+
// 5 7 2

// Пример 2
// Ввод	Вывод
// 2        +
// 4 -5
