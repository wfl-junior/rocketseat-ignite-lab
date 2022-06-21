export interface Lesson {
  id: string;
  title: string;
}

export interface LessonsQueryResponse {
  lessons: Lesson[];
}
