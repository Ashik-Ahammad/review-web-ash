import React, { useEffect, useState } from 'react';
import Body from './Body/Body';
import Header from './Header/Header';
import './Home.css';

const Home = () => {

    const [test, setTest] = useState([]);

    useEffect(() => {
        fetch('./ieltsData.json')
            .then(res => res.json())
            .then(data => setTest(data))
    }, [])

    return (
        <div>
            <img className="bg-img" src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1183&q=80" alt="" />
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