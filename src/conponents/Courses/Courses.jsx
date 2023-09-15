import { useState } from "react";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";
import { useEffect } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    const handleSelectedCourse = course => {
        const isExist = selectedCourses.find(item => item.id == course.id);
        if(isExist){
            alert('Course selected already')
        }
        else{
            setSelectedCourses([...selectedCourses, course]);
        }
        
        
    }

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
                            handleSelectedCourse={handleSelectedCourse}
                        ></Course>
                    ))}
                </div>
                <div className="w-1/4 flex flex-col items-center mr-4">
                    <Cart
                        selectedCourses={selectedCourses}
                        handleSelectedCourse={handleSelectedCourse}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Courses;