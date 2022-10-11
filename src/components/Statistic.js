import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Chart from 'react-apexcharts';
import StatisticDetails from './StatisticDetails';



const Statistic = () => {
    const item = useLoaderData();
    const resData = item.data;
    const courses = item.data
    // console.log(subjects)

    const [sData, setSdata] = useState([]);
    useEffect(() => {
        const getvaluedata = async () => {
            const newvalue = [];
            // const reqData = await fetch('https://openapi.programming-hero.com/api/quiz');
            // const data = await reqData.json();
            // const resData = data.data
            // console.log(resData);
            for (let i = 0; i < resData.length; i++) {
                newvalue.push([{ name: resData[i].name, data: resData[i].total }]);

            }


            // for (const d in resData) {
            //     newvalue.push([{ name: d.name, data: d.total }]);
            // }
            setSdata(newvalue);

        }
        //     getvaluedata();
    }, []);

    return (
        <React.Fragment>
            <div className='container-fluid mt-3 mb-3'>

                <Chart type='line'
                    width={1450}
                    height={350}
                    series={sData}
                    options={{
                        title: { text: "Product sell in 2021" },
                        xaxis: {
                            title: { text: "Product Sell in Months" },
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                        },
                        yaxis: {
                            title: { text: "Product in K" }
                        }

                    }}
                >
                </Chart>

            </div>

        </React.Fragment >);

    // <div>
    //     {
    //         subjects.map(subject => <StatisticDetails
    //             key={subject.id}
    //             subject={subject}
    //         ></StatisticDetails>)
    //     }
    // </div>);


};

export default Statistic;




// <div>
// {
//     subjects.map(subject => <StatisticDetails
//         key={subject.id}
//         subject={subject}
//     ></StatisticDetails>)
// }
// </div>