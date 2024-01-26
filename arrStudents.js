let arrStudents = [
  {
    name: "Студент 1",
    faculty: "Факультет иностранных языков и регионоведения",
    course: 2,
    grades: [4, 3, 5, 4, 4, 4, 4, 3, 5, 5, 3, 5],
  },
  {
    name: "Студент 2",
    faculty: "Факультет химии",
    course: 3,
    grades: [3, 5, 3, 3, 3, 4, 5, 3, 4, 4, 5, 4],
  },
  {
    name: "Студент 3",
    faculty: "Факультет механики и математики",
    course: 1,
    grades: [4, 3, 5, 3, 4, 5, 4, 4, 5, 3, 3, 3],
  },
  {
    name: "Студент 4",
    faculty: "Факультет физической механики",
    course: 4,
    grades: [4, 5, 4, 5, 5, 4, 4, 3, 3, 5, 4, 4],
  },
  {
    name: "Студент 5",
    faculty: "Факультет геологии",
    course: 3,
    grades: [4, 4, 4, 3, 4, 3, 3, 4, 4, 5, 3, 3],
  },
  {
    name: "Студент 6",
    faculty: "Факультет вычислительной математики и кибернетики",
    course: 2,
    grades: [5, 4, 4, 4, 3, 3, 3, 4, 5, 3, 4, 5],
  },
  {
    name: "Студент 7",
    faculty: "Факультет биологии",
    course: 1,
    grades: [4, 4, 5, 3, 5, 4, 5, 3, 5, 4, 4, 4],
  },
  {
    name: "Студент 8",
    faculty: "Факультет политологии",
    course: 3,
    grades: [3, 4, 4, 3, 5, 4, 5, 3, 5, 3, 5, 5],
  },
  {
    name: "Студент 9",
    faculty: "Факультет социологии",
    course: 4,
    grades: [4, 3, 3, 3, 4, 4, 3, 5, 4, 4, 4, 3],
  },
  {
    name: "Студент 10",
    faculty: "Факультет иностранных языков и регионоведения",
    course: 2,
    grades: [4, 5, 4, 3, 4, 3, 3, 5, 5, 3, 5, 5],
  },
  {
    name: "Студент 11",
    faculty: "Факультет географии",
    course: 1,
    grades: [4, 3, 4, 5, 4, 4, 5, 4, 3, 5, 5, 3],
  },
  {
    name: "Студент 12",
    faculty: "Факультет химии",
    course: 1,
    grades: [4, 5, 3, 4, 4, 5, 4, 4, 4, 3, 4, 5],
  },
  {
    name: "Студент 13",
    faculty: "Факультет фундаментальной математики",
    course: 4,
    grades: [4, 3, 5, 4, 3, 4, 3, 5, 4, 3, 4, 4],
  },
  {
    name: "Студент 14",
    faculty: "Факультет прикладной математики и информатики",
    course: 3,
    grades: [5, 3, 4, 3, 3, 3, 4, 5, 5, 5, 3, 5],
  },
  {
    name: "Студент 15",
    faculty: "Факультет экономики",
    course: 4,
    grades: [4, 3, 5, 3, 5, 3, 5, 4, 3, 3, 3, 4],
  },
  {
    name: "Студент 16",
    faculty: "Факультет иностранных языков и регионоведения",
    course: 2,
    grades: [3, 4, 4, 5, 5, 5, 5, 3, 4, 3, 5, 4],
  },
  {
    name: "Студент 17",
    faculty: "Факультет права",
    course: 1,
    grades: [4, 5, 5, 5, 5, 5, 3, 3, 5, 3, 3, 4],
  },
  {
    name: "Студент 18",
    faculty: "Факультет географии",
    course: 1,
    grades: [4, 4, 3, 4, 3, 5, 4, 3, 3, 3, 3, 5],
  },
  {
    name: "Студент 19",
    faculty: "Факультет иностранных языков и регионоведения",
    course: 2,
    grades: [3, 3, 5, 4, 4, 3, 5, 4, 3, 4, 4, 5],
  },
  {
    name: "Студент 20",
    faculty: "Факультет прикладной математики и информатики",
    course: 3,
    grades: [4, 5, 4, 3, 4, 5, 5, 5, 3, 5, 4, 5],
  },
  {
    name: "Студент 21",
    faculty: "Факультет психологии",
    course: 1,
    grades: [5, 5, 3, 4, 4, 5, 3, 5, 3, 4, 3, 5],
  },
  {
    name: "Студент 22",
    faculty: "Факультет химии",
    course: 4,
    grades: [5, 4, 3, 3, 3, 5, 5, 5, 3, 3, 4, 3],
  },
  {
    name: "Студент 23",
    faculty: "Факультет культурологии",
    course: 4,
    grades: [4, 5, 4, 3, 4, 4, 3, 5, 5, 5, 5, 4],
  },
  {
    name: "Студент 24",
    faculty: "Факультет биологии",
    course: 2,
    grades: [3, 4, 5, 5, 4, 5, 3, 5, 3, 3, 5, 5],
  },
  {
    name: "Студент 25",
    faculty: "Факультет социологии",
    course: 1,
    grades: [5, 3, 5, 4, 4, 5, 5, 3, 4, 5, 3, 4],
  },
  {
    name: "Студент 26",
    faculty: "Факультет химии",
    course: 1,
    grades: [3, 3, 5, 4, 4, 3, 5, 4, 4, 4, 4, 4],
  },
  {
    name: "Студент 27",
    faculty: "Факультет физики",
    course: 1,
    grades: [3, 5, 5, 3, 3, 4, 5, 3, 5, 3, 5, 4],
  },
  {
    name: "Студент 28",
    faculty: "Факультет географии",
    course: 3,
    grades: [5, 3, 4, 3, 3, 4, 5, 5, 4, 5, 3, 3],
  },
  {
    name: "Студент 29",
    faculty: "Факультет физической механики",
    course: 2,
    grades: [3, 4, 4, 5, 4, 4, 5, 5, 5, 3, 5, 3],
  },
  {
    name: "Студент 30",
    faculty: "Факультет экономики",
    course: 1,
    grades: [5, 4, 3, 4, 5, 3, 3, 4, 3, 3, 5, 3],
  },
  {
    name: "Студент 31",
    faculty: "Факультет философии",
    course: 1,
    grades: [3, 5, 3, 4, 5, 3, 3, 5, 3, 3, 4, 4],
  },
  {
    name: "Студент 32",
    faculty: "Факультет культурологии",
    course: 2,
    grades: [3, 4, 3, 4, 5, 4, 4, 3, 5, 3, 5, 4],
  },
  {
    name: "Студент 33",
    faculty: "Факультет физической механики",
    course: 3,
    grades: [5, 4, 5, 4, 4, 5, 3, 3, 4, 5, 3, 5],
  },
  {
    name: "Студент 34",
    faculty: "Факультет биологии",
    course: 4,
    grades: [4, 4, 4, 4, 3, 5, 5, 5, 3, 5, 5, 3],
  },
  {
    name: "Студент 35",
    faculty: "Факультет экономики",
    course: 1,
    grades: [5, 4, 5, 5, 3, 3, 3, 5, 3, 5, 4, 3],
  },
  {
    name: "Студент 36",
    faculty: "Факультет фундаментальной математики",
    course: 4,
    grades: [4, 3, 3, 3, 3, 5, 5, 5, 3, 3, 5, 3],
  },
  {
    name: "Студент 37",
    faculty: "Факультет физической механики",
    course: 3,
    grades: [3, 5, 5, 3, 5, 5, 5, 5, 5, 4, 5, 4],
  },
  {
    name: "Студент 38",
    faculty: "Факультет химии",
    course: 1,
    grades: [4, 4, 5, 3, 4, 4, 4, 3, 5, 3, 5, 3],
  },
  {
    name: "Студент 39",
    faculty: "Факультет физической механики",
    course: 4,
    grades: [5, 3, 3, 5, 3, 5, 4, 5, 4, 5, 3, 5],
  },
  {
    name: "Студент 40",
    faculty: "Факультет геологии",
    course: 4,
    grades: [4, 3, 5, 3, 5, 3, 5, 4, 4, 4, 3, 4],
  },
  {
    name: "Студент 41",
    faculty: "Факультет права",
    course: 2,
    grades: [3, 4, 4, 3, 3, 5, 3, 5, 4, 3, 4, 3],
  },
  {
    name: "Студент 42",
    faculty: "Факультет права",
    course: 1,
    grades: [3, 4, 5, 3, 4, 3, 3, 5, 3, 5, 5, 5],
  },
  {
    name: "Студент 43",
    faculty: "Факультет механики и математики",
    course: 4,
    grades: [5, 4, 5, 5, 3, 4, 4, 5, 5, 3, 4, 4],
  },
  {
    name: "Студент 44",
    faculty: "Факультет механики и математики",
    course: 1,
    grades: [3, 5, 3, 3, 4, 5, 4, 5, 5, 4, 3, 3],
  },
  {
    name: "Студент 45",
    faculty: "Факультет географии",
    course: 1,
    grades: [4, 3, 4, 5, 3, 5, 5, 5, 3, 3, 3, 4],
  },
  {
    name: "Студент 46",
    faculty: "Факультет иностранных языков и регионоведения",
    course: 2,
    grades: [5, 4, 3, 5, 3, 3, 4, 3, 3, 3, 5, 3],
  },
  {
    name: "Студент 47",
    faculty: "Факультет истории",
    course: 4,
    grades: [3, 4, 4, 5, 4, 4, 5, 4, 4, 3, 3, 4],
  },
  {
    name: "Студент 48",
    faculty: "Факультет физической механики",
    course: 1,
    grades: [3, 3, 5, 3, 4, 4, 3, 5, 3, 4, 3, 5],
  },
  {
    name: "Студент 49",
    faculty: "Факультет философии",
    course: 3,
    grades: [3, 4, 5, 4, 5, 3, 3, 4, 5, 3, 5, 3],
  },
  {
    name: "Студент 50",
    faculty: "Факультет журналистики",
    course: 2,
    grades: [5, 3, 5, 5, 4, 4, 4, 4, 5, 3, 4, 3],
  },
  {
    name: "Студент 51",
    faculty: "Факультет биологии",
    course: 1,
    grades: [3, 3, 3, 4, 4, 5, 5, 3, 3, 5, 4, 5],
  },
  {
    name: "Студент 52",
    faculty: "Факультет культурологии",
    course: 4,
    grades: [3, 4, 5, 3, 3, 3, 4, 4, 3, 3, 4, 3],
  },
  {
    name: "Студент 53",
    faculty: "Факультет механики и математики",
    course: 2,
    grades: [5, 5, 3, 4, 3, 4, 4, 3, 3, 3, 5, 3],
  },
  {
    name: "Студент 54",
    faculty: "Факультет права",
    course: 4,
    grades: [5, 5, 4, 4, 5, 4, 4, 5, 4, 4, 5, 4],
  },
  {
    name: "Студент 55",
    faculty: "Факультет физической механики",
    course: 3,
    grades: [3, 4, 3, 4, 5, 3, 4, 3, 3, 5, 3, 4],
  },
  {
    name: "Студент 56",
    faculty: "Факультет географии",
    course: 2,
    grades: [4, 4, 4, 3, 4, 3, 5, 3, 4, 5, 3, 3],
  },
  {
    name: "Студент 57",
    faculty: "Факультет биологии",
    course: 3,
    grades: [3, 5, 3, 5, 5, 4, 4, 4, 4, 3, 5, 4],
  },
  {
    name: "Студент 58",
    faculty: "Факультет механики и математики",
    course: 3,
    grades: [4, 5, 4, 4, 5, 4, 5, 3, 5, 3, 5, 3],
  },
  {
    name: "Студент 59",
    faculty: "Факультет иностранных языков и регионоведения",
    course: 3,
    grades: [5, 5, 5, 4, 5, 4, 5, 4, 3, 4, 3, 4],
  },
  {
    name: "Студент 60",
    faculty: "Факультет философии",
    course: 4,
    grades: [3, 3, 3, 3, 4, 3, 4, 5, 4, 3, 5, 4],
  },
  {
    name: "Студент 61",
    faculty: "Факультет физики",
    course: 3,
    grades: [3, 5, 3, 5, 3, 3, 3, 4, 3, 3, 5, 5],
  },
  {
    name: "Студент 62",
    faculty: "Факультет механики и математики",
    course: 3,
    grades: [5, 5, 5, 4, 4, 5, 3, 5, 3, 3, 3, 4],
  },
  {
    name: "Студент 63",
    faculty: "Факультет истории",
    course: 4,
    grades: [4, 5, 3, 3, 5, 4, 3, 5, 5, 3, 3, 5],
  },
  {
    name: "Студент 64",
    faculty: "Факультет иностранных языков и регионоведения",
    course: 2,
    grades: [4, 3, 4, 4, 4, 3, 5, 3, 4, 4, 4, 4],
  },
  {
    name: "Студент 65",
    faculty: "Факультет экономики",
    course: 2,
    grades: [3, 3, 3, 4, 4, 3, 4, 5, 5, 4, 3, 5],
  },
  {
    name: "Студент 66",
    faculty: "Факультет политологии",
    course: 3,
    grades: [5, 3, 3, 4, 4, 5, 3, 4, 3, 3, 3, 3],
  },
  {
    name: "Студент 67",
    faculty: "Факультет социологии",
    course: 2,
    grades: [5, 4, 4, 5, 5, 5, 3, 3, 3, 4, 4, 5],
  },
  {
    name: "Студент 68",
    faculty: "Факультет политологии",
    course: 2,
    grades: [3, 3, 3, 4, 3, 4, 5, 3, 4, 3, 5, 4],
  },
  {
    name: "Студент 69",
    faculty: "Факультет социологии",
    course: 1,
    grades: [5, 3, 4, 5, 4, 4, 4, 4, 3, 5, 3, 5],
  },
  {
    name: "Студент 70",
    faculty: "Факультет социологии",
    course: 1,
    grades: [3, 3, 5, 3, 4, 3, 5, 3, 5, 3, 5, 3],
  },
  {
    name: "Студент 71",
    faculty: "Факультет вычислительной математики и кибернетики",
    course: 1,
    grades: [3, 3, 4, 5, 3, 3, 3, 4, 5, 3, 3, 5],
  },
  {
    name: "Студент 72",
    faculty: "Факультет физики",
    course: 4,
    grades: [4, 5, 5, 3, 5, 4, 3, 5, 3, 3, 3, 3],
  },
  {
    name: "Студент 73",
    faculty: "Факультет психологии",
    course: 1,
    grades: [3, 5, 4, 4, 5, 3, 4, 4, 5, 4, 4, 5],
  },
  {
    name: "Студент 74",
    faculty: "Факультет социологии",
    course: 4,
    grades: [5, 5, 3, 3, 5, 3, 4, 4, 5, 3, 3, 5],
  },
  {
    name: "Студент 75",
    faculty: "Факультет вычислительной математики и кибернетики",
    course: 4,
    grades: [5, 4, 3, 4, 4, 4, 4, 3, 4, 3, 5, 5],
  },
  {
    name: "Студент 76",
    faculty: "Факультет вычислительной математики и кибернетики",
    course: 1,
    grades: [4, 5, 5, 4, 5, 3, 5, 5, 5, 4, 5, 4],
  },
  {
    name: "Студент 77",
    faculty: "Факультет биологии",
    course: 2,
    grades: [5, 4, 5, 5, 4, 3, 5, 5, 3, 5, 3, 3],
  },
  {
    name: "Студент 78",
    faculty: "Факультет физики",
    course: 3,
    grades: [3, 5, 5, 3, 4, 5, 5, 3, 4, 3, 4, 3],
  },
  {
    name: "Студент 79",
    faculty: "Факультет биологии",
    course: 2,
    grades: [3, 5, 5, 3, 5, 5, 4, 5, 5, 3, 3, 3],
  },
  {
    name: "Студент 80",
    faculty: "Факультет биологии",
    course: 4,
    grades: [4, 5, 3, 3, 4, 5, 4, 4, 5, 3, 3, 3],
  },
  {
    name: "Студент 81",
    faculty: "Факультет механики и математики",
    course: 1,
    grades: [3, 3, 5, 3, 5, 4, 4, 4, 4, 4, 5, 5],
  },
  {
    name: "Студент 82",
    faculty: "Факультет химии",
    course: 3,
    grades: [4, 3, 5, 3, 3, 5, 3, 5, 5, 5, 5, 4],
  },
  {
    name: "Студент 83",
    faculty: "Факультет журналистики",
    course: 1,
    grades: [5, 5, 5, 4, 4, 4, 3, 4, 5, 4, 4, 3],
  },
  {
    name: "Студент 84",
    faculty: "Факультет фундаментальной математики",
    course: 1,
    grades: [5, 5, 3, 5, 4, 4, 4, 3, 5, 4, 5, 4],
  },
  {
    name: "Студент 85",
    faculty: "Факультет социологии",
    course: 1,
    grades: [5, 5, 4, 5, 3, 3, 4, 5, 5, 3, 4, 5],
  },
  {
    name: "Студент 86",
    faculty: "Факультет вычислительной математики и кибернетики",
    course: 1,
    grades: [5, 5, 4, 4, 5, 4, 5, 4, 5, 5, 3, 5],
  },
  {
    name: "Студент 87",
    faculty: "Факультет фундаментальной математики",
    course: 1,
    grades: [3, 3, 3, 4, 3, 4, 3, 4, 3, 5, 5, 5],
  },
  {
    name: "Студент 88",
    faculty: "Факультет физики",
    course: 3,
    grades: [3, 5, 4, 3, 3, 4, 4, 5, 5, 3, 4, 3],
  },
  {
    name: "Студент 89",
    faculty: "Факультет социологии",
    course: 4,
    grades: [5, 5, 3, 5, 5, 5, 4, 4, 4, 4, 3, 3],
  },
  {
    name: "Студент 90",
    faculty: "Факультет культурологии",
    course: 4,
    grades: [3, 5, 4, 4, 3, 3, 4, 3, 4, 4, 4, 4],
  },
  {
    name: "Студент 91",
    faculty: "Факультет иностранных языков и регионоведения",
    course: 4,
    grades: [4, 5, 4, 3, 3, 5, 4, 4, 5, 5, 3, 3],
  },
  {
    name: "Студент 92",
    faculty: "Факультет политологии",
    course: 4,
    grades: [3, 4, 3, 5, 5, 5, 5, 3, 4, 3, 3, 5],
  },
  {
    name: "Студент 93",
    faculty: "Факультет биологии",
    course: 4,
    grades: [5, 5, 5, 4, 3, 4, 3, 4, 4, 4, 5, 5],
  },
  {
    name: "Студент 94",
    faculty: "Факультет психологии",
    course: 2,
    grades: [4, 5, 5, 4, 5, 4, 4, 3, 3, 5, 4, 5],
  },
  {
    name: "Студент 95",
    faculty: "Факультет иностранных языков и регионоведения",
    course: 4,
    grades: [5, 5, 5, 5, 4, 3, 5, 4, 4, 5, 5, 4],
  },
  {
    name: "Студент 96",
    faculty: "Факультет экономики",
    course: 1,
    grades: [3, 4, 3, 4, 4, 4, 4, 4, 5, 5, 5, 4],
  },
  {
    name: "Студент 97",
    faculty: "Факультет иностранных языков и регионоведения",
    course: 4,
    grades: [4, 5, 3, 3, 4, 4, 5, 4, 5, 5, 4, 3],
  },
  {
    name: "Студент 98",
    faculty: "Факультет биологии",
    course: 1,
    grades: [3, 5, 4, 5, 3, 5, 4, 3, 5, 3, 4, 5],
  },
  {
    name: "Студент 99",
    faculty: "Факультет физической механики",
    course: 3,
    grades: [5, 5, 5, 5, 3, 3, 5, 3, 4, 4, 4, 3],
  },
  {
    name: "Студент 100",
    faculty: "Факультет журналистики",
    course: 1,
    grades: [4, 5, 5, 4, 3, 5, 3, 4, 5, 5, 4, 4],
  },
];

// function maxAverageGrade(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     let averageGrade =
//       element.grades.reduce((acc, num) => acc + num, 0) / element.grades.length;
//     element.averageGrade = averageGrade;
//   }
//   let result = arr.sort((a, b) => a.averageGrade - b.averageGrade)[
//     arr.length - 1
//   ];
//   return result;
// }

// console.log(maxAverageGrade(arrStudents));

// function minAverageGrade(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     let averageGrade =
//       element.grades.reduce((acc, num) => acc + num, 0) / element.grades.length;
//     element.averageGrade = averageGrade;
//   }
//   let result = arr.sort((a, b) => a.averageGrade - b.averageGrade)[0];
//   return result;
// }

// console.log(minAverageGrade(arrStudents));

// function getMaxFiveGrades(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     let count = 0;
//     element.grades.forEach((num) => {
//       if (num === 5) {
//         count++;
//       }
//       return count;
//     });
//     element.fiveGrades = count;
//   }
//   let result = arr.sort((a, b) => a.fiveGrades - b.fiveGrades)[arr.length - 1];
//   return result;
// }

// console.log(getMaxFiveGrades(arrStudents));

// function sortedByAverageGrade(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     let averageGrade =
//       element.grades.reduce((acc, num) => acc + num, 0) / element.grades.length;
//     element.averageGrade = averageGrade;
//   }
//   return arr.sort((a, b) => b.averageGrade - a.averageGrade);
// }

// console.log(sortedByAverageGrade(arrStudents));

function countStudentsOnCourse(arr) {
  let result = [];
  for (let i = 0; i <= 3; i++) {
    let array = [...arr.filter((item) => item.course === i + 1)];
    result.push({
      studentsOnCourse: { students: array.length, course: i + 1 },
    });
  }
  return result;
}

console.log(countStudentsOnCourse(arrStudents));
