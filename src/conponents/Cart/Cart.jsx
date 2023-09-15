
const Cart = ({ selectedCourses, remaining, totalCreditHour }) => {
    return (
        <div>
            <h1>This is the Cart</h1>
            <h2>Credit Hour Remaining {remaining} hr</h2>
            {selectedCourses.map(course => 
            <li className="list-decimal text-gray-500 text-sm leading-7" key={course.id}>
              {course.title}
            </li>
          )}
          <p>Total Credit Hour: {totalCreditHour}</p>
        </div>
    );
};

export default Cart;