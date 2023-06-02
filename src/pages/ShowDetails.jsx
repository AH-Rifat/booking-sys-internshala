import { Rating } from '@smastrom/react-rating';
import { Link, useParams } from 'react-router-dom';
import useGetMovieData from '../hooks/useGetMovieData';

const ShowDetails = () => {
    const { movieId } = useParams()
    const moviesData = useGetMovieData()

    const movies = moviesData.find(data => data.show.id === parseInt(movieId));

    if (!movies) {
        return <div className="text-center mt-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>; // or display a loading indicator
    }

    const { id, name, image, genres, summary, premiered, language, rating } = movies.show
    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <img src={image.original} alt={name} className='img-fluid rounded' />
                        </div>
                        <div className="col-7 ms-5 d-flex justify-content-center align-items-center">
                            <div>
                                <h1 className='mb-3'>{name}</h1>
                                {new DOMParser().parseFromString(summary, 'text/html').documentElement.textContent}
                                <div className='d-flex align-items-center gap-3'>
                                    <Rating
                                        style={{ maxWidth: 200, margin: '1rem 0' }}
                                        readOnly
                                        orientation="horizontal"
                                        value={rating?.average}
                                    />
                                    {rating?.average}
                                </div>
                                <ul className="list-group mt-3" style={{ width: '20rem' }}>
                                    <li className="list-group-item d-flex">
                                        <span>Genre<label style={{ marginLeft: '43px', marginRight: '10px' }}>:</label></span>
                                        <p>{genres}</p>
                                    </li>
                                    <li className="list-group-item d-flex">
                                        <span>Release<label style={{ marginLeft: '33px', marginRight: '10px' }}>:</label></span>
                                        <p>{premiered}</p>
                                    </li>
                                    <li className="list-group-item d-flex">
                                        <span>language<label style={{ marginLeft: '20px', marginRight: '10px' }}>:</label></span>
                                        <p>{language}</p>
                                    </li>
                                </ul>
                                <Link to={`/bookingFrom/${id}`} type="button" className="btn btn-danger btn-lg mt-4" style={{ width: '20rem' }}>Book a ticket</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;