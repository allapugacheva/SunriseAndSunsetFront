import React, {useEffect, useState} from 'react'
import { getAllSunrisesAndSunsets, deleteSunriseAndSunset } from '../services/SunriseAndSunsetService'
import { useNavigate } from 'react-router-dom'

function ListSunriseAndSunsetComponent() {

    const [data, setData] = useState([])

    const navigator = useNavigate()

    useEffect(() => {

        getAllSun();
        
    }, [])

    function getAllSun() {

        getAllSunrisesAndSunsets().then((response) => {
            setData(response.data);
        }).catch(error => {
            console.error(error);
        })

    }

    function addNewSun() {
        navigator('/add');
    }

    function updateSun(locationId, dateId) {
        navigator('/update/' + locationId + '/' + dateId);
    }

    function deleteSun(locationId, dateId) {
        
        deleteSunriseAndSunset(locationId, dateId).then(() => {
            getAllSun();
        })
        
    }

  return (
    <div className='container'>
        <br/><br/>
        <div className='d-flex justify-content-center align-items-center'>
            <h2 className='text-center mr-2'>List of sunrises and sunsets</h2>
            <button className='btn btn-success mb-2' onClick={addNewSun}
            style={{marginLeft: '50px'}}>Add sunrise and sunset</button>
        </div>
        <div className='text-center' style={{ display: 'flex', justifyContent: 'center'}}>
            <table className='table table-bordered' style={{ width: 'auto', verticalAlign: 'middle'}}>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Latituse</th>
                        <th>Longitude</th>
                        <th>Date</th>
                        <th>Sunrise time</th>
                        <th>Sunset time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(tempData =>
                            <tr key={tempData.locationId.toString() + tempData.dateId.toString()}>
                            <td>{tempData.location}</td> 
                            <td>{tempData.latitude}</td>
                            <td>{tempData.longitude}</td>
                            <td>{tempData.date}</td>
                            <td>{tempData.sunriseTime}</td>
                            <td>{tempData.sunsetTime}</td>
                            <td>
                                <button className='btn btn-warning' onClick={() => updateSun(
                                    tempData.locationId, tempData.dateId
                                )}>Update</button>
                                <button className='btn btn-danger' onClick={() => deleteSun(
                                    tempData.locationId, tempData.dateId
                                )} style={{marginLeft: '10px'}}>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListSunriseAndSunsetComponent