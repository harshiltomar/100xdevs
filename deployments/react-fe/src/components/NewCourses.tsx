import { UpcomingCourseCard } from "./UpcomingCourseCard";

const NEW_COURSES = [{
    title: "Web Dev Cohort 3.0",
    imageUrl: "/web-cohort-3.jpg"
}, {
    title: "Web3 Cohort 1.0",
    imageUrl: "/web3-cohort-1.png"
}];

export const NewCourses = () => {   
    return (
        <div className="w-max-screen-md px-8">
            <div className="flex justify-center pt-8">
                <div className="text-3xl">New Courses</div>
            </div>
            <div className="flex justify-center">
                {NEW_COURSES.map(course => <UpcomingCourseCard title={course.title} imageUrl={course.imageUrl} />)}
            </div>
        </div>
    )
}