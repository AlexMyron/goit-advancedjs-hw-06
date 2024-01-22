/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
}

function isWeekend(day: Days): boolean {
  return day === Days.SUN || day === Days.SAT;
}

