import { useState } from 'react';

const Search = (props) => {
    const send = (e) =>{
        e.preventDefault();

        props.callBack(country);
    }
    
    const [country, setName] = useState('');
    return (
        <>
            <form onSubmit={send}>
                <div>
                    <div>
                        <label htmlFor='country'>country : </label>
                        <input id='country' type='text' required
                            value={country}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <button type="submit" disabled={!(/^[A-Za-z]+$/).test(country) || country ===''} >Search</button>
                </div>
            </form>
        </>
    );

};
export default Search;