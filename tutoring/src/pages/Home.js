import React, { Component } from 'react';
import styles from './css/home.module.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import LessonIcon from '../constants/images/lessonPlans.svg'
import HwHelpIcon from '../constants/images/hwHelp.svg'
import AssignmentIcon from '../constants/images/assignment.svg'
import AssignmentIconHover from '../constants/images/assignmentHover.svg'
import Scrollbar from "react-scrollbars-custom";

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            search: '',
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = () => {
        //this is the easiest way to create a function without having to bind it
    }
    
    render() {
        return (
            <section className={styles.container}>
                <header className={styles.header}>
                    <input
                        className={styles.searchBar}
                        value={this.state.search}
                        name='search'
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Search . . .'
                    />
                </header>
                <div className={styles.qsAndCal}>
                        <Scrollbar className={styles.recentQuestionsExContainer}>
                            <div className={styles.recentQuestions}>
                                <h3 className={styles.recentQuestionsTitle}>Recent Questions</h3>
                            </div>
                            <Link className={styles.recentQuestionsContainer}>
                                <h4 className={styles.recentQuestionsExTitle}>Question 1 Title</h4>
                                <p className={styles.recentQuestionsExDesc}>How do you teach a kid pythagorean theorem?</p>
                            </Link>
                            <Link className={styles.recentQuestionsContainer}>
                                <h4 className={styles.recentQuestionsExTitle}>Question 2 Title</h4>
                                <p className={styles.recentQuestionsExDesc}>How do you teach a kid pythagorean theorem?</p>
                            </Link>
                            <Link className={styles.recentQuestionsContainer}>
                                <h4 className={styles.recentQuestionsExTitle}>Question 3 Title</h4>
                                <p className={styles.recentQuestionsExDesc}>How do you teach a kid pythagorean theorem?</p>
                            </Link>
                            <Link className={styles.recentQuestionsContainer}>
                                <h4 className={styles.recentQuestionsExTitle}>Question 4 Title</h4>
                                <p className={styles.recentQuestionsExDesc}>How do you teach a kid pythagorean theorem?</p>
                            </Link>
                            <Link className={styles.recentQuestionsContainer}>
                                <h4 className={styles.recentQuestionsExTitle}>Question 5 Title</h4>
                                <p className={styles.recentQuestionsExDesc}>How do you teach a kid pythagorean theorem?</p>
                            </Link>
                            <Link className={styles.recentQuestionsContainer}>
                                <h4 className={styles.recentQuestionsExTitle}>Question 6 Title</h4>
                                <p className={styles.recentQuestionsExDesc}>How do you teach a kid pythagorean theorem?</p>
                            </Link>
                        </Scrollbar>
                    <Calendar/>
                </div>
                <div className={styles.selectContainer}>
                    <Link to='/lessons' className={styles.selectBox}>
                        <h2 className={styles.selectTitle}>Lesson Plan</h2>
                        <img src={LessonIcon} className={styles.selectImage}/>
                        <p className={styles.selectText}>Find or upload lesson plans by other parents just like you</p>
                    </Link>
                    <Link to='/hwHelp' className={styles.selectBox}>
                        <h2 className={styles.selectTitle}>Homework Help</h2>
                        <img src={HwHelpIcon} className={styles.selectImage}/>
                        <p className={styles.selectText}>Ask questions regarding specific homework problems or upload answers to help fellow parents</p>
                    </Link>
                    <Link to='/exResources' className={styles.selectBox}>
                        <h2 className={styles.selectTitle}>Assignments & Worksheets</h2>
                        <img src={AssignmentIcon} className={styles.selectImage}/>
                        <img src={AssignmentIconHover} className={styles.selectImageHover}/>
                        <p className={styles.selectText}>Find or upload worksheets and assignmnets for your student</p>
                    </Link>
                </div>
            </section>
        );
    }
}

export default Home;