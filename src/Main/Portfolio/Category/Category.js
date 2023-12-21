import React, { useState } from 'react'

export default function Category({ filteredCategories, allCategories }) {

    const [mainCategory, setMainCategory] = useState('All')

    return (
        <>
            {

                allCategories.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => {
                            setMainCategory(item)
                            filteredCategories(item)
                        }}
                        className={`${item === mainCategory ? 'highlight' : ''}`}
                    >
                        {item}
                    </li>
                ))
            }
        </>
    )
}
