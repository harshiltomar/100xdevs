import { ExistingCourseCard } from "./ExistingCourseCard";

const NEW_COURSES = [{
    title: "Web Dev Cohort 2.0",
    imageUrl: "/web-cohort-2.jpg",
    href: "https://harkirat.classx.co.in/new-courses/8/"
}, {
    title: "Web Dev Cohort 1.0",
    imageUrl: "/web-cohort-1.jpg",
    href: "https://harkirat.classx.co.in/new-courses/2"
}];

export const ExistingCourses = () => {   
    return (
        <div className="w-max-screen-md px-8">
            <div className="flex justify-center pt-8">
                <div className="text-3xl">Existing Courses</div>
            </div>
            <div className="flex justify-center">
                {NEW_COURSES.map(course => <ExistingCourseCard href={course.href} title={course.title} imageUrl={course.imageUrl} />)}
            </div>
        </div>
    )
}