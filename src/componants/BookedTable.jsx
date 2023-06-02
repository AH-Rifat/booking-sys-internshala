/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const BookedTable = ({ data, onDelete }) => {
    // const { name, username, usernumber } = data
    console.log(data);



    return (
        <>
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <p > <span className="fw-bold me-4">Name: </span>{data.name}</p>
                    <p > <span className="fw-bold me-4">Username: </span>{data.username}</p>
                    <p > <span className="fw-bold me-4">User Number: </span>{data.usernumber}</p>
                </div>
                <button type="submit" onClick={onDelete} className="btn btn-outline-danger me-5">Delete</button>
            </div>
            <hr />
        </>
    );
};

export default BookedTable;