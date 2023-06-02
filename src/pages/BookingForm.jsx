import { useParams } from 'react-router-dom';
import useGetMovieData from '../hooks/useGetMovieData';
import BookedTable from '../componants/BookedTable';
import { useEffect, useState } from 'react';

const BookingForm = () => {
    const { id } = useParams()
    const moviesData = useGetMovieData()
    const [bookedData, setBookedData] = useState([]);
    const data = moviesData.find((data) => data.show.id === parseInt(id))

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.movieName.value;
        const username = form.username.value;
        const usernumber = form.userNumber.value;
        form.reset()
        const bookedData = { name, username, usernumber }

        const storedData = localStorage.getItem('bookedData');
        let parsedData = storedData ? JSON.parse(storedData) : [];
        // Add the new data to the existing data array
        parsedData.push(bookedData);
        // Store the updated data in localStorage
        localStorage.setItem('bookedData', JSON.stringify(parsedData));
        setBookedData(parsedData);
    }


    //show data from localStorage
    useEffect(() => {
        const storedData = localStorage.getItem('bookedData');
        const parsedData = storedData ? JSON.parse(storedData) : [];
        setBookedData(parsedData);
    }, []);

    const handleDelete = (userNumber) => {
        // Retrieve existing data from localStorage
        const storedData = localStorage.getItem('bookedData');
        let parsedData = storedData ? JSON.parse(storedData) : [];
        // Filter out the entry with the specified userNumber
        parsedData = parsedData.filter((data) => data.usernumber !== userNumber);
        // Store the updated data in localStorage
        localStorage.setItem('bookedData', JSON.stringify(parsedData));
        // Update the bookedData state directly
        setBookedData(parsedData);
    };

    if (!data) {
        return <div className="text-center mt-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>; // or display a loading indicator
    }

    const { name, schedule } = data.show

    return (
        <div className='container'>
            <div className="row mt-4">
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Booking Form</h5><hr />
                            <form action="" onSubmit={handleSubmit}>
                                <div className="mb-3 row">
                                    <label className="col-sm-2 col-lg-4 col-form-label fw-bold">Movie Name :</label>
                                    <div className="col-sm-10 col-lg-8">
                                        <input type="text" readOnly className="form-control-plaintext" name='movieName' defaultValue={name} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-2 col-lg-4 col-form-label fw-bold">Time Schedule :</label>
                                    <div className="col-sm-10 col-lg-8">
                                        <input type="text" readOnly className="form-control-plaintext" defaultValue={schedule.time || schedule.days[0] && "None"} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-2 col-lg-4 col-form-label fw-bold">Your Name :</label>
                                    <div className="col-sm-10 col-lg-8">
                                        <input type="text" name='username' className="form-control" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-2 col-lg-4 col-form-label fw-bold">Your Number :</label>
                                    <div className="col-sm-10 col-lg-8">
                                        <input type="number" name='userNumber' className="form-control" />
                                    </div>
                                </div>
                                <div className='mb-3 text-end'>
                                    <button type="submit" className="btn btn-primary w-25">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">My Booked List:</h5><hr />
                            {
                                bookedData.map((data, index) =>  {
                                    console.log(data.usernumber);
                                   return <BookedTable key={index} data={data} onDelete={() => handleDelete(data.usernumber)} />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;