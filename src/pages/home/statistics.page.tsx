import './homepage.styles.scss';
import React, {useEffect, useState} from 'react';
import {Dictionary, keys, values} from 'lodash';
import {Chart} from 'primereact/chart';
import {CountUp} from 'use-count-up';
import {IAppState} from '@store/reducers';
import {useSelector} from 'react-redux';

const StatisticsPage = () => {
    const [data, setData] = useState<Dictionary<number>>({});
    const {ideas} = useSelector((state: IAppState) => state.idea);

    useEffect(() => {
        const tmpData: Dictionary<number> = {};
        [].forEach((x) => {
            tmpData[x] = (tmpData[x] || 0) + 1;
        });
        setData(tmpData);
    }, []);

    const usersData = {
        labels: keys(data),

        datasets: [
            {
                data: values(data),
                backgroundColor: keys(data).map(
                    () => '#' + Math.floor(Math.random() * 16777215).toString(16),
                ),
            },
        ],
    };
    return (
        <main className="container">
            <header className="home-header">
                <h1>Statystyki</h1>
            </header>
            <CountUp isCounting end={ideas.length} duration={1} thousandsSeparator=",">
                {(e: any) => (
                    <div className=" flex number-of-ideas-container  justify-content-center align-items-center mb-5 ">
                        <span className="number-of-ideas">
                            {e.value} <span className="text-3xl ">zgłoszonych pomysłów!</span>
                        </span>
                    </div>
                )}
            </CountUp>
            <div className="chart-container">
                <Chart type="doughnut" data={usersData} />
                <Chart type="doughnut" data={usersData} />
                <Chart type="doughnut" data={usersData} />
            </div>
        </main>
    );
};

export default StatisticsPage;
