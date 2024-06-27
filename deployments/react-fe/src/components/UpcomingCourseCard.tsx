import { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";

interface CourseCardProps {
    imageUrl: string;
    title: string;
}

export function UpcomingCourseCard({
    imageUrl,
    title
}: CourseCardProps) {
    const [openModal, setOpenModal] = useState(false);

    return <div className="border rounded m-8">
        <img src={imageUrl} className="w-full border-b rounded-lg md:w-[450px]" />
        <div className="flex justify-between p-2">
            <div className="text-xl flex flex-col justify-center">
                {title}
            </div>
            <Button onClick={() => {
                setOpenModal(true)
            }}>Pre register</Button>
        </div>
        <div>
            {openModal ? <Modal onClose={() => setOpenModal(false)} /> : null}
        </div>
    </div>
}