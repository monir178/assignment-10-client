import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://assignment-10-server-seven-lime.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    })
    return (
        <div className='sticky top-28 rounded-lg p-4  text-lg font-semibold bg-base-200'>
            <h2>Total Category: {categories.length}</h2>
            <div className='mt-4 text-center'>
                {
                    categories.map(category => <Link to={`/categories/${category.id}`}
                        key={category.id}

                    >

                        <button className='block w-full rounded-md p-2 bg-gradient-to-r from-cyan-500 to-blue-700 text-gray-700 mb-2' >
                            {category.name}
                        </button>
                    </Link>)
                }
            </div>
        </div>
    );
};



export default LeftSideNav;