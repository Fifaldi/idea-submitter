import './homepage.styles.scss';
import React, {useEffect, useState} from 'react';
import {Dictionary, keys, values} from 'lodash';
import {Chart} from 'primereact/chart';
import {IAppState} from '@store/reducers';
import {useSelector} from 'react-redux';

const StatisticsPage = () => {
    const [data, setData] = useState<Dictionary<number>>({});
    const [data2, setData2] = useState<Dictionary<number>>({});
    const {ideas} = useSelector((state: IAppState) => state.idea);
    const basicOptions = {
        maintainAspectRatio: false,
        aspectRatio: 1.2,
        plugins: {
            legend: {
                labels: {
                    color: '#495057',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057',
                },
                grid: {
                    color: '#ebedef',
                },
            },
            y: {
                ticks: {
                    color: '#495057',
                },
                grid: {
                    color: '#ebedef',
                },
            },
        },
    };
    useEffect(() => {
        const tmpData: Dictionary<number> = {};
        ideas.forEach((x) => {
            tmpData[x.author] = (tmpData[x.author] || 0) + 1;
        });
        setData(tmpData);
        const tmpData2: Dictionary<number> = {};
        ideas.forEach((x) => {
            tmpData2[x.status] = (tmpData2[x.status] || 0) + 1;
        });
        setData2(tmpData2);
    }, []);

    const usersData = {
        labels: ['Autor'],

        datasets: keys(data).map((el) => ({
            label: el,
            backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
            data: [data[el]],
        })),
    };
    const statusData = {
        labels: keys(data2),

        datasets: [
            {
                data: values(data2),
                backgroundColor: keys(data2).map(
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

            <div className="chart-container">
                <Chart type="bar" data={usersData} options={basicOptions} />
                <Chart type="doughnut" data={statusData} />
            </div>
        </main>
    );
};

export default StatisticsPage;
