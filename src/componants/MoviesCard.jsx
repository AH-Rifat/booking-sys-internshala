import { Link } from "react-router-dom";


const MoviesCard = (data) => {
    const { id, name, image, genres, rating } = data.detailInfo

    return (
        <>
            <div className="card text-center shadow-lg" style={{ width: '20rem' }}>
                <img src={image.medium} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {genres[0]}
                    </p>
                    <div className="d-flex justify-content-around align-items-center">
                        <div className="p-1 rounded" style={{ backgroundColor: '#f2f5f5', }}>Rating: {rating.average}</div>
                        <Link to={`/showDetails/${id}`} className="btn btn-sm btn-success">Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoviesCard;