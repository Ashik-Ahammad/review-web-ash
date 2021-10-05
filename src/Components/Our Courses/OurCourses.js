import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from './Course';

const OurCourses = () => {

    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('./ieltsData2.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    return (
        <div>
            <h2>Enroll in Our Course</h2>

            <div className="row row-cols-1 row-cols-md-2 g-4  ">


                {
                    course.map(courses => <Course
                        key={courses.id}
                        courses={courses}
                    ></Course>)
                }

            </div>
        </div>
    );
};

export default OurCourses;