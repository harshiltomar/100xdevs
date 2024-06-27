import { Button } from "./Button";

interface CourseCardProps {
    imageUrl: string;
    title: string;
    href: string;
}

export function ExistingCourseCard({
    imageUrl,
    title,
    href
}: CourseCardProps) {

    return <div className="border rounded m-8">
        <img src={imageUrl} className="w-full border-b rounded-lg w-full md:w-[450px]" />
        <div className="flex justify-between p-2">
            <div className="text-xl flex flex-col justify-center">
                {title}
            </div>
            <Button onClick={() => {
                window.location.href = href
            }}>Check it out</Button>
        </div>
    </div>
}