import MoviesCard from '../componants/MoviesCard';
import useGetMovieData from '../hooks/useGetMovieData';

const Home = () => {
    const moviesData = useGetMovieData()

    return (
        <div className="container">
            <div className='my-5' style={{ display: 'grid', gap: 30, gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                {
                    moviesData.map(data => {
                        const detailInfo = data.show
                        return <MoviesCard key={detailInfo.id} detailInfo={detailInfo} />
                    })
                }
            </div>
        </div>
    );
};

export default Home;