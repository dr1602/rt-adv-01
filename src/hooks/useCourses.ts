import { useQuery, type QueryFunction } from '@tanstack/react-query';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
}

const fetchCourses: QueryFunction<Course[]> = async () => {
  const res = await fetch('/api/courses.json');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const useCourses = () => {
  return useQuery<Course[], Error>({
    queryKey: ['courses'],
    queryFn: fetchCourses,
  });
};
