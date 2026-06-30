export interface GradeItem {
    id: string;
    title: string;
    date: string;
    mark: number; // 0 to 100
}

export interface Category {
    id: string;
    name: string; // e.g. assignments, quizzes
    weight: number; // percentage (e.g. 30)
    items: GradeItem[];
}

export interface Course {
    id: string;
    name: string;
    categories: Category[];
}

export const data: Course[] = [
  {
    id: "MHF4U",
    name: "Advanced Functions",
    categories: [
      {
        id: "mhf-cat-1",
        name: "Assignments",
        weight: 30,
        items: [
          { id: "mhf-i1", title: "Polynomial Functions Assignment", date: "2026-06-10", mark: 98 },
          { id: "mhf-i2", title: "Rational Functions Assignment", date: "2026-06-17", mark: 100 }
        ]
      },
      {
        id: "mhf-cat-2",
        name: "Quizzes",
        weight: 20,
        items: [
          { id: "mhf-i3", title: "Trigonometric Ratios Quiz", date: "2026-06-05", mark: 95 }
        ]
      },
      {
        id: "mhf-cat-3",
        name: "Tests",
        weight: 50,
        items: [
          { id: "mhf-i4", title: "Unit 1 Test: Functions", date: "2026-06-15", mark: 99 }
        ]
      }
    ]
  },
  {
    id: "MCV4U",
    name: "Calculus and Vectors",
    categories: [
      {
        id: "mcv-cat-1",
        name: "Assignments",
        weight: 25,
        items: [
          { id: "mcv-i1", title: "Limits and Continuity Problem Set", date: "2026-06-08", mark: 100 },
          { id: "mcv-i2", title: "Derivatives Rules Assignment", date: "2026-06-22", mark: 99 }
        ]
      },
      {
        id: "mcv-cat-2",
        name: "Quizzes",
        weight: 15,
        items: [
          { id: "mcv-i3", title: "First Principles Quiz", date: "2026-06-02", mark: 96 }
        ]
      },
      {
        id: "mcv-cat-3",
        name: "Tests",
        weight: 60,
        items: [
          { id: "mcv-i4", title: "Derivatives Unit Test", date: "2026-06-19", mark: 100 }
        ]
      }
    ]
  },
  {
    id: "ICS4U",
    name: "Computer Science",
    categories: [
      {
        id: "ics-cat-1",
        name: "Projects",
        weight: 40,
        items: [
          { id: "ics-i1", title: "Object-Oriented Programming Task", date: "2026-06-12", mark: 100 },
          { id: "ics-i2", title: "Data Structures Practical Lab", date: "2026-06-24", mark: 98 }
        ]
      },
      {
        id: "ics-cat-2",
        name: "Quizzes",
        weight: 20,
        items: [
          { id: "ics-i3", title: "Recursion & Searching Algorithms Quiz", date: "2026-06-04", mark: 100 }
        ]
      },
      {
        id: "ics-cat-3",
        name: "Tests",
        weight: 40,
        items: [
          { id: "ics-i4", title: "Unit 2 Assessment: Arrays & ArrayLists", date: "2026-06-18", mark: 99.5 }
        ]
      }
    ]
  },
  {
    id: "ENG4U",
    name: "English",
    categories: [
      {
        id: "eng-cat-1",
        name: "Essays",
        weight: 40,
        items: [
          { id: "eng-i1", title: "Literary Analysis Rough Draft", date: "2026-06-11", mark: 96 },
          { id: "eng-i2", title: "Persuasive Essay Final Submission", date: "2026-06-25", mark: 98 }
        ]
      },
      {
        id: "eng-cat-2",
        name: "Presentations",
        weight: 30,
        items: [
          { id: "eng-i3", title: "Seminar Presentation on Rhetoric", date: "2026-06-15", mark: 97 }
        ]
      },
      {
        id: "eng-cat-3",
        name: "Classwork",
        weight: 30,
        items: [
          { id: "eng-i4", title: "Socratic Seminar Participation", date: "2026-06-05", mark: 100 }
        ]
      }
    ]
  }
];