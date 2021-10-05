import React, { useEffect, useState } from 'react';
import Body from './Body/Body';
import Header from './Header/Header';

const Home = () => {

    const [test, setTest] = useState([]);

    useEffect(() => {
        fetch('./ieltsData.json')
            .then(res => res.json())
            .then(data => setTest(data))
    }, [])

    return (
        <div>
            <Header></Header>

            <div className="row row-cols-1 row-cols-md-2 g-4  ">


                {
                    test.map(tests => <Body
                        key={tests.id}
                        tests={tests}
                    ></Body>)
                }

            </div>

        </div>
    );
};

export default Home;