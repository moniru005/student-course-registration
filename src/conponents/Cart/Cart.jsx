
const Cart = ({ selectedCourses }) => {
    return (
        <div>
            <h1>This is the Cart</h1>
            {selectedCourses.map(course => 
            <li className="list-decimal text-gray-500 text-sm leading-7" key={course.id}>
              {course.title}
            </li>
          )}
        </div>
    );
};

export default Cart;