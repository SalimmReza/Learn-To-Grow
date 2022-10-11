import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const StatisticDetails = ({ subject }) => {
    const { name, id, logo, total } = subject
    console.log(subject)


    const [sData, setSdata] = useState([]);


    const newvalue = [];

    for (let i = 0; i < subject.length; i++) {
        newvalue.push([{ name: subject[i].name, data: subject[i].total }]);

    }


    // for (const d in resData) {
    //     newvalue.push([{ name: d.name, data: d.total }]);
    // }
    setSdata(newvalue);




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

        </React.Fragment >
        //     <BarChart
        //     //     width={500}
        //     //     height={300}
        //     //     data={data}
        //     //     margin={{
        //     //         top: 5,
        //     //         right: 30,
        //     //         left: 20,
        //     //         bottom: 5
        //     //     }}
        //     // >
        //     //     <CartesianGrid strokeDasharray="3 3" />
        //     //     <XAxis dataKey="name" />
        //     //     <YAxis />
        //     //     <Tooltip />
        //     //     <Legend />

        //     //     <Bar dataKey="uv" fill="#82ca9d" />
        //     </BarChart >
    );
};

export default StatisticDetails;