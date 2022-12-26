import React from 'react'
import "./Report.css"
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';
import Navbar from '../Navbar/Navbar';

const Report = () => {

    const data = [

        {
            alert: "Trespassing detected",
            type: "danger",
            message: "a car without verfication passes"
        },

        {
            alert: "Neelgaie detected",
            type: "warning",
            message: "a Neelgaie passes in area"
        },

        {
            alert: "Trespassing detected",
            type: "danger",
            message: "a car without verfication passes"
        },

        {
            alert: "Neelgaie detected",
            type: "warning",
            message: "a Neelgaie passes in area"
        },

        {
            alert: "Neelgaie detected",
            type: "alert",
            message: "a Neelgaie passes in area "
        },

    ]

    const colors = {
        danger: "red",
        warning: "orange",
        alert: "purple"
    }

    const [value, setValue] = React.useState(new Date());


    return (
        <div className='report_main'>
            <Navbar />
            {/* <div> */}
                <div className='calendarContainer'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            // open
                            // disableOpenPicker
                            className='calander'
                            label="Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            // PopperProps={{style:{marginTop:'40px'}}}
                            PaperProps={{style:{marginTop:'40px', marginLeft:'40px'}}}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        {console.log(value)}
                    </LocalizationProvider>
                </div>
                <div className='reports-container'>
                <div className="reports">
                    <h4>Recent Alerts</h4>
                    {data.map((obj) => (
                        <div className='alerts' style={{ border: `1px solid ${colors[obj.type]}`, borderLeft: `4px solid ${colors[obj.type]}` }}>
                            <h5 style={{ color: `${colors[obj.type]}`, }}>{obj.alert}</h5>
                            <div style={{ color: "gray" }}>{obj.message}</div>
                        </div>
                    ))}

                </div>
                <Button color={'success'} style={{ padding:'10px 20px '}} className='download-btn'>Download</Button>

            </div>
        </div>
    )
}

export default Report
