import React, { useEffect, useState } from 'react'
import { addSuntiseAndSunset, getSunriseAndSunset, updateSunriseAndSunset } from '../services/SunriseAndSunsetService';
import { useNavigate, useParams } from 'react-router-dom';

function AddSunriseAndSunsetComponent() {

    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [date, setDate] = useState('')

    const {locationId, dateId} = useParams()

    const [errors, setErrors] = useState({
        latitude: '',
        longitude: '',
        date: ''
    })

    const navigator = useNavigate()

    useEffect(() => {

        if(locationId && dateId) {
            getSunriseAndSunset(locationId, dateId).then((response) => {
                setLatitude(response.data.latitude)
                setLongitude(response.data.longitude)
                setDate(response.data.date)
            })
        }

    }, [locationId, dateId])

    function saveSunriseAndSunset(e) {
        e.preventDefault();

        if(validateForm()) {

            console.log('save validated')
            if(locationId && dateId) {
                console.log('update')
                updateSunriseAndSunset(locationId, dateId, latitude, longitude, date).then(() => {
                    console.log('update executed')
                    navigator('/sunrisesAndSunsets')
                })
            } else {
                console.log('save')
                addSuntiseAndSunset(latitude, longitude, date).then(() => {
                    console.log('save executed')
                    navigator('/sunrisesAndSunsets')
                })
            }

        }
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = {... errors}

        if(latitude) {
            errorsCopy.latitude = ''
        } else {
            errorsCopy.latitude = 'Latitude must be not null'
            valid = false
        }

        if(longitude) {
            errorsCopy.longitude = ''
        } else {
            errorsCopy.longitude = 'Longitude must be not null'
            valid = false
        }

        if(date) {
            errorsCopy.date = ''
        } else {
            errorsCopy.date = 'Date must be not null'
            valid = false
        }

        setErrors(errorsCopy)

        return valid
    }

    function pageTitle() {

        if(locationId && dateId) {
            return <h2 className='text-center'>Update new sunrise and sunset</h2>
        } else {
            return <h2 className='text-center'>Add sunrise and sunset</h2>
        }
    }

  return (
    <div className='container'>
        <br/><br/>        
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Latitude:</label>
                            <input
                                type='text'
                                placeholder='Enter latitude'
                                name='latitude'
                                value={latitude}
                                className= {'form-control' + (errors.latitude ? ' is-invalid' : '')}
                                onChange={(e) => { setLatitude(e.target.value); latitude.trim() }}
                            />
                            { errors.latitude && <div className='invalid-feedback'>{errors.latitude}</div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Longitude:</label>
                            <input
                                type='text'
                                placeholder='Enter longitude'
                                name='longitude'
                                value={longitude}
                                className= {'form-control' + (errors.longitude ? ' is-invalid' : '')}
                                onChange={(e) => { setLongitude(e.target.value); longitude.trim() }}
                            />
                            { errors.longitude && <div className='invalid-feedback'>{errors.longitude}</div> }                            
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Date:</label>
                            <input
                                type='text'
                                placeholder='Enter date'
                                name='date'
                                value={date}
                                className= {'form-control' + (errors.date ? ' is-invalid' : '')}
                                onChange={(e) => { setDate(e.target.value); date.trim() }}
                            />
                            { errors.longitude && <div className='invalid-feedback'>{errors.longitude}</div> }                            
                        </div>

                        <button className='btn btn-success' onClick={saveSunriseAndSunset}>Ok</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddSunriseAndSunsetComponent