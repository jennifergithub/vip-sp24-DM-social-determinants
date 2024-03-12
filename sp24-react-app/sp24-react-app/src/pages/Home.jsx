"use client"

import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Image from 'next/image'

function Home() {
    const [selectedYear, setSelectedYear] = useState("");

    const years=["1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]

    // Function to handle year selection
    const handleYearSelect = (year) => {
        setSelectedYear(year);
    };

    return (
        <div className="main">
            <h1>T2DM Social Determinants in Georgia</h1>

            <div className="county-discharge">
                <h2>County-Wide Discharges 1999-2022</h2>
                <Dropdown btnText="Year" btnOptions={ years } onSelect={handleYearSelect} />
            </div>

            <div className="image-viz-display">
                { selectedYear && (
                    <Image src={require(`../images/county-wide/${selectedYear}.png`)} alt="text" height={500} width={500}/>
                )}
                
            </div>
        </div>
    )
}

export default Home