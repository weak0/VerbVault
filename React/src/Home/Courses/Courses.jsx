import React, { useEffect, useState } from 'react'
import './Courses.css'
import CourseDetails from './CourseDetails'
import { learnTypeEnum } from '../../utils'
import { fetchData } from '../../user'
import { data } from '../../user'



const Courses = (props) => {


    const { setupLearn } = props
    const [courses, setCourses] = useState([])
    const [courseDetails, setCourseDetails] = useState({})
    const [courseDetailsIsActiv, setCourseDetailsIsActiv] = useState(false)

    const getCourses = async () => {
        const response = await fetchData("courses", "GET", null, false)
        setCourses(response)
    }

    const getCourseDetails = async (id) => {
        const response = await fetchData(`courses/${id}`, "GET")
        setCourseDetails(response)

    }

    const startCourse = async (courseId) => {
        await fetchData(`courses/${courseId}/users/${data.user.id}`, "POST")
        getCourses()
    }

    const handleCourseDetails = async (id) => {
        await getCourseDetails(id)
        setCourseDetailsIsActiv(!courseDetailsIsActiv)
    }

    useEffect(() => {
        getCourses()
    }, [])

    return (
        <>
            <h2 className='section-tittle'>Courses</h2>
            <div className='courses' >
                {courses.map(course => {
                    return (
                        <div key={course.id} className='course-container'>
                            <h3 className='courses-description'>{course.courseLevel}</h3>
                            <div className='courses-image'>
                                <img src="https://via.placeholder.com/300x200/333" alt="course" />
                            </div>
                            <div className='courses-actions'>
                                {course.users.some(user => user.id == data.user.id)
                                    ? <button onClick={() => setupLearn(course.id, learnTypeEnum.Default)}> Learn</button>
                                    : <button onClick={() => startCourse(course.id)}>Start</button>}
                                <button onClick={() => handleCourseDetails(course.id)}>Details</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            {courseDetailsIsActiv && <CourseDetails courseDetails={courseDetails} />}
        </>
    )
}

export default Courses