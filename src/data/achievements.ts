import mapAngarsk from "../img/mapAngarsk.png"
import mapMeget from "../img/mapMeget.png"
import mapKuda from "../img/KudaMap.png"
import mapZima from "../img/mapZima.png"
import mapUrik from "../img/mapUrik.png"
import chupin from "../img/trainers/Chupin.png"
import kovalenko from "../img/trainers/Kovalenko.png"
import odinaev from "../img/trainers/Odinaev.png"
import schmakov from "../img/trainers/Shmakov.png"
import novzov from "../img/trainers/novzov.png"

interface ImyDataBranch {
  address?: string
  name: string
  map: string
  trainer: string[]
  trainerPhoto: string[]
  preText: string[]
  text: string[][]
}

interface ImyDataBranches {
  [key: string]: ImyDataBranch
}

export const myDataBranches: ImyDataBranches = {
  angarsk: {
    address: "https://go.2gis.com/7hng0a",
    name: "г. Ангарск 15-й микрорайон, ст33 ФОК",
    map: mapAngarsk,
    trainer: ["Чупин Вадим Владимирович", "Вишняков Егор Александрович"],
    trainerPhoto: [chupin, chupin],
    preText: [
      "Тренер ск. «ЭРОН» Федерации рукопашного боя. Черный пояс 2 дан по спортивному каратэ. Мастер спорта судья Всероссийской и Международной категории",
      "Тренер ск. «ЭРОН» Федерации рукопашного боя. Черный пояс 2 дан по спортивному каратэ. Мастер спорта судья Всероссийской и Международной категории",
    ],
    text: [
      [
        "Тренер ск. «ЭРОН» Федерации рукопашного боя. Черный пояс 2 дан по спортивному каратэ. Мастер спорта судья Всероссийской и Международной категории",
        "черный пояс II – ой дан по спортивному каратэ , мастер спорта по рукопашному бою, тренер высшей категории ,окончил ИТФК, РГУФК, судья всероссийской и международной категории, Бывший главный тренер сборной Дальней авиации и сборной Военно-воздушных сил , а с 2013 года по 2021 год Главный тренер Центрального военного округа по Армейскому рукопашному бою, Инструктор по специальной и физической подготовке Гвардейской 24 отдельной бригады специального назначения.) Отслужив 22 года в ВС Уволен по достижении предельного возраста нахождения на воинской службе по контракту.",
      ],
      [
        "Тренер ск. «ЭРОН» Федерации рукопашного боя. Черный пояс 2 дан по спортивному каратэ. Мастер спорта судья Всероссийской и Международной категории",
        "черный пояс II – ой дан по спортивному каратэ , мастер спорта по рукопашному бою, тренер высшей категории ,окончил ИТФК, РГУФК, судья всероссийской и международной категории, Бывший главный тренер сборной Дальней авиации и сборной Военно-воздушных сил , а с 2013 года по 2021 год Главный тренер Центрального военного округа по Армейскому рукопашному бою, Инструктор по специальной и физической подготовке Гвардейской 24 отдельной бригады специального назначения.) Отслужив 22 года в ВС Уволен по достижении предельного возраста нахождения на воинской службе по контракту.",
      ],
    ],
  },
  meget: {
    name: "п. Мегет, переулок Школьный, шк. №41",
    map: mapMeget,
    address: "https://go.2gis.com/sioxa",
    trainer: ["Новцов Андрей Сергеевич", "Шмаков Алексей Викторович"],
    trainerPhoto: [novzov, schmakov],
    preText: [
      "Тренер ск. «ЭРОН» Федерации рукопашного боя. КМС Черный пояс по Спортивному каратэ, судья 1 категории.",
      "Тренер ск. «ЭРОН» Федерации рукопашного боя. Черный пояс по спортивному каратэ, КМС , судья 1 категории.",
    ],
    text: [
      [
        "Тренер ск. «ЭРОН» Федерации рукопашного боя. КМС Черный пояс по Спортивному каратэ, судья 1 категории.",
        "Занимаюсь 20 лет,тренерский стаж 7 лет. В 2020 году выполнил норматив КМС по универсальному бою",
      ],
      [
        "Тренер ск. «ЭРОН» Федерации рукопашного боя. Черный пояс по спортивному каратэ, КМС , судья 1 категории.",
        "Старший тренер ск. «ЭРОН» Федерации рукопашного боя и каратэ г. Ангарска.",
        "Руководитель Мегетского отделения.",
        "Кандидат в мастера спорта по армейскому рукопашному бою. Черный пояс 1 дан по спортивному каратэ.",
        "Начал заниматься с 2000 г. Тренировать начал с 2002 г.",
        "За это время воспитал 8 черных поясов по спортивному каратэ, 15 кандидатов в мастера спорта по универсальному бою, 6 мастеров спорта по универсальному бою.",
        "Тренировки проходят по адресу: п. Мегет, Мегетская средняя школа, Школьный переулок 8.",
      ],
    ],
  },
  kuda: {
    name: "д. Куда, ул. Спортивная, 1Б ",
    map: mapKuda,
    address: "https://go.2gis.com/qq9h0",
    trainer: ["Чупин Вадим Владимирович"],
    trainerPhoto: [chupin],
    preText: [
      "Тренер ск. «ЭРОН» Федерации рукопашного боя. Черный пояс 2 дан по спортивному каратэ. Мастер спорта судья Всероссийской и Международной категории",
    ],
    text: [
      [
        "Тренер ск. «ЭРОН» Федерации рукопашного боя. Черный пояс 2 дан по спортивному каратэ. Мастер спорта судья Всероссийской и Международной категории",
        "черный пояс II – ой дан по спортивному каратэ , мастер спорта по рукопашному бою, тренер высшей категории ,окончил ИТФК, РГУФК, судья всероссийской и международной категории, Бывший главный тренер сборной Дальней авиации и сборной Военно-воздушных сил , а с 2013 года по 2021 год Главный тренер Центрального военного округа по Армейскому рукопашному бою, Инструктор по специальной и физической подготовке Гвардейской 24 отдельной бригады специального назначения.) Отслужив 22 года в ВС Уволен по достижении предельного возраста нахождения на воинской службе по контракту.",
      ],
    ],
  },
  zima: {
    name: "г. Зима, Ухтуйская СОШ",
    map: mapZima,
    address: "https://go.2gis.com/1lbcs",
    trainer: ["Коваленко Роман Александрович"],
    trainerPhoto: [kovalenko],
    preText: [
      "Тренер ск. «ЭРОН» Федерации рукопашного боя. Черный пояс по спортивному каратэ, КМС, судья 2 категории",
    ],
    text: [
      [
        "Тренер ск. «ЭРОН» Федерации рукопашного боя. Черный пояс по спортивному каратэ, КМС, судья 2 категории",
        "КМС по универсальному бою, чёрный пояс (1 дан) по спортивному каратэ, спортивный стаж с 2005г. Тренерская деятельность с 2015г.",
      ],
    ],
  },
  urik: {
    name: "с. Урик, Советская, 3Б",
    map: mapUrik,
    address: "https://go.2gis.com/b4r3u",
    trainer: ["Одинаев Рустам Дилшодович"],
    trainerPhoto: [odinaev],
    preText: [
      "Тренер ск. «ЭРОН» Федерации рукопашного боя и каратэ с. Урик. Тренерский. Cтаж 3 года.",
    ],
    text: [
      [
        "МС по универсальному бою 5 кратный победитель чемпионата и первенства СФО по универсальному бою, победитель первенства России, серебряный и бронзовый призер первенства мира так же по универсальному бою. Тренируюсь 7 лет под руководством Чупина Вадима Владимировича.",
      ],
    ],
  },
}