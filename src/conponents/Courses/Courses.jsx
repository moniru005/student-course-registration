import { useState } from "react";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";
import { useEffect } from "react";
import Swal from 'sweetalert2'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCreditHour, setTotalCreditHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    const handleSelectedCourse = course => {
        const isExist = selectedCourses.find(item => item.id == course.id);
        let countHour = course.credit_hour;
        let countPrice = course.price;
        if (isExist) {
            Swal.fire(
                'Course Selected Already',
                'You can not select same course more than single',
                'warning'
            )
        }
        else {
            selectedCourses.forEach(item => {
                countHour = countHour + item.credit_hour,
                    countPrice = countPrice + item.price
            })
            const totalRemaining = 20 - countHour;
            if (countHour > 20) {
                Swal.fire(
                    'Credit Limitation Locked!',
                    'You can not take more than 20 Credit Hour!',
                    'error'
                )
            }
            else {
                setTotalPrice(countPrice);
                setTotalCreditHour(countHour);
                setRemaining(totalRemaining);
                setSelectedCourses([...selectedCourses, course]);
            }

        }


    }

    return (
        <div className="container mx-auto mb-4">
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
                        totalPrice={totalPrice}
                        totalCreditHour={totalCreditHour}
                        remaining={remaining}
                        selectedCourses={selectedCourses}
                        handleSelectedCourse={handleSelectedCourse}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Courses;