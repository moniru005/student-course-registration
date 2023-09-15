import image from '../../../public/image/gd.jpg'
const Course = () => {
    return (
        <div className="course-container flex justify-center">
            <div className="course-card w-72 h-[353px] p-3 rounded-lg bg-white">
                <img src={image} alt="" />
                <h1>Title</h1>
                <p><small>Lorem ipsum dolor sit amet.</small></p>
                <div className="text-gray-500 flex justify-between items-center my-3 text-base">
                    <p>$ <span>Price: 200</span></p>
                    <p>Icon</p>
                    <p>Credit: 2hr</p>
                </div>
                <button className="px-4 py-1 bg-blue-700 text-white rounded-md flex mx-auto w-full">
                    <span className="flex mx-auto">Select</span>
                </button>
            </div>
        </div>
    );
};

export default Course;