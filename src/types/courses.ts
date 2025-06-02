export interface CourseProps {
  id: string;
  title: string;
  description: string;
  durationInHours: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  language: string;
  isFree: boolean;
}
