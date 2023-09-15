const Course = ({ course }) => {
    const { title, details, image, price, credit_hour } = course;
    return (
        <div className="course-container flex justify-center">
            <div className="course-card w-72 h-[353px] p-3 rounded-lg bg-white">
                <img src={image} alt="" />
                <h1 className="my-2 font-semibold">{title}</h1>
                <p className="text-gray-500 h-[72px]">
                    <small>{details}</small>
                </p>
                <div className="text-gray-500 flex justify-between items-center my-3 text-base">
                    <p ><span className='text-lg font-semibold'>$ </span>
                        Price: {price}
                    </p>
                    <p>Icon</p>
                    <p>Credit: {credit_hour}hr</p>
                </div>
                <button className="px-4 py-1 bg-blue-700 text-white rounded-md flex mx-auto w-full">
                    <span className="flex mx-auto">Select</span>
                </button>
            </div>
        </div>
    );
};

export default Course;