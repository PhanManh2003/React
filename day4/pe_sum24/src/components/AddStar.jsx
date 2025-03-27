import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useContext, useState, useEffect } from 'react';

function AddStar() {
    const [star, movie, setMovie] = useContext(MyContext);
    const [mov, setMov] = useState({});
    const [checkBox, setCheckBox] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getMovieById = movie.find(mov => mov.id == id);
        setMov(getMovieById);
        setCheckBox(getMovieById?.stars);
    }, [id]);

    const handleOnChange = (e) => {
        const value = parseInt(e.target.value);
        setCheckBox(prev => {
            if (prev.includes(value)) {
                return checkBox.filter(ch => ch != value);
            } else {
                return [...checkBox, value];
            }
        });
    };

    const handleSubmit = async () => {
        const updateMovie = { ...mov, stars: checkBox };
        try {
            const res = await axios.put(`http://localhost:9999/movies/${id}`, updateMovie);
            setMovie(res.data);
        } catch (error) {
            // Handle error if needed
        }
    };

    return (
        <div className='container'>
            <h1 style={{ textAlign: 'center' }}>Add stars to the movie</h1>
            <h5>Movie title</h5>
            <input style={{ margin: '10px 0px' }} className='form-control' />
            <h5>Stars</h5>
            <div style={{ display: 'flex', margin: '10px 0px' }}>
                {star.map((item) => (
                    <div style={{ marginRight: '30px' }} key={item.id}>
                        <input 
                            style={{ marginRight: '10px' }} 
                            type='checkbox' 
                            value={item.id} 
                            checked={checkBox.includes(item.id)} 
                            onChange={handleOnChange} 
                        />
                        <label>{item.fullname}</label>
                    </div>
                ))}
            </div>
            <button className='btn btn-success' onClick={handleSubmit}>Add Stars</button>
        </div>
    );
}

export default AddStar;
