import React from 'react';
import styles from './Books.module.css'

const Books = () => {
    return (
        <div className={`${styles.container} w-64 bg-base-100 shadow-xl m-4`}>
            <div>
                <figure><img className={styles.bookCover} src="" alt="Shoes" /></figure>
                <div>
                    <button className={styles.click}>Click Me!</button>
                </div>
            </div>
            <div className='bookInfo p-2'>
                <h2>A Mystery</h2>
                <p>by<span className='text-lime-600'> Lawrence Bendict</span></p>
            </div>
        </div>
    );
};

export default Books;