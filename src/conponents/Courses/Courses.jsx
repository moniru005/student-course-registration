import { useState } from "react";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";
import { useEffect } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    return (
        <div className="container mx-auto">
            <div className="text-center my-6">
                <h1 className="text-3xl font-bold">Course Registration</h1>
            </div>
            <div className="flex  justify-center gap-2">
                <div className="flex flex-wrap justify-center w-3/4 gap-4 ml-4">
                    {courses.map((course) => (
                        <Course
                            key={course.id}
                            course={course}
                        ></Course>
                    ))}
                </div>
                <div className="w-1/4 flex flex-col items-center mr-4">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Courses;