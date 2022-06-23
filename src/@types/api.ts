export interface Lesson {
  id: string;
  lessonType: "live" | "class";
  availableAt: string;
  title: string;
  slug: string;
  description: string;
  videoId: string;
  teacher: Teacher;
}

export type LessonForLessonQuery = Pick<
  Lesson,
  "id" | "lessonType" | "availableAt" | "title" | "slug"
>;

export type LessonForLessonBySlugQuery = Pick<
  Lesson,
  "title" | "videoId" | "description" | "teacher"
>;

export interface Teacher {
  bio: string;
  avatarURL: string;
  name: string;
}

export interface LessonsQueryResponse {
  lessons: Lesson[];
}

export interface LessonQueryResponse {
  lesson: LessonForLessonBySlugQuery;
}

export interface LessonBySlugQueryVariables {
  slug: string;
}
