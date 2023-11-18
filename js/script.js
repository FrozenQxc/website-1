function digitalRoot(n) {
	// Проверяем, является ли число однозначным
	if (n < 10) {
		return n // Если да, то возвращаем его как результат
	} else {
		let sum = 0
		// Преобразуем число в строку, чтобы легче работать с его цифрами
		let digits = n.toString()

		// Суммируем все цифры числа
		for (let digit of digits) {
			sum += parseInt(digit)
		}

		// Рекурсивно вызываем функцию для новой суммы
		return digitalRoot(sum)
	}
}

// Примеры использования
console.log(digitalRoot(16)) // 7
console.log(digitalRoot(942)) // 6
console.log(digitalRoot(132189)) // 6
console.log(digitalRoot(493193)) // 2
console.log(digitalRoot(36)) // 9
