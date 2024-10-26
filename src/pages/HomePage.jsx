import axios from 'axios'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'
import { GeoJSON, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import '../styles/HomePage.css'

export default function HomePage() {
  const [trains, setTrains] = useState([])
  const [geoJsonData, setGeoJsonData] = useState([])

  const generateUniqueColor = (index) => {
    const colors = [
      '#c98761',
      '#6fd682',
      '#6579db',
      '#db58ba',
      '#a663e0',
      '#54cca8',
    ]
    return colors[index % colors.length]
  }

  useEffect(() => {
    document.title = 'Home Page'

    const cachedData = localStorage.getItem('trainTracksGeoJSON')

    const geo = async () => {
      if (cachedData) {
        setGeoJsonData(JSON.parse(cachedData))
      } else {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASEURL}/api/v1/trains/track-geo`
          )

          if (response.data) {
            setGeoJsonData(response.data)
            localStorage.setItem(
              'trainTracksGeoJSON',
              JSON.stringify(response.data)
            )
          } else {
            console.error('Expected an object but got:', response.data)
            setGeoJsonData({})
          }
        } catch (error) {
          console.error('Error fetching geojson data:', error)
        }
      }
    }

    const tdata = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASEURL}/api/v1/trains`)

        if (Array.isArray(response.data)) {
          setTrains(response.data) // Set the trains state if it's an array
        } else {
          console.error('Expected an array but got:', response.data)
          setTrains([]) // Set an empty array if the response is not an array
        }
      } catch (error) {
        console.error('Error fetching train data:', error)
      }
    }

    tdata()
    geo()
    const intervalId = setInterval(tdata, 20 * 1000)

    return () => clearInterval(intervalId)
  }, [])
  const center = [7.798588679284219, 80.6777562357943]

  return (
    <div className='container-fluid'>
      <div className='row text-start'>
        <div className='h1 mb-3 p-4'>Train Locations</div>
      </div>
      <div className='row'>
        <div className='col-xl-8 col-md-12 d-flex justify-content-center mb-5'>
          {trains.length === 0 ? (
            <p>No trains available.</p>
          ) : (
            <MapContainer
              center={center}
              zoom={7.5}
              style={{ height: '55vh', width: '60vw' }}
              className='rounded shadow-sm'
              scrollWheelZoom={true}>
              <TileLayer
                url={`https://api.maptiler.com/maps/dataviz-dark/{z}/{x}/{y}.png?key=${
                  import.meta.env.VITE_OPENMAP_KEY
                }`}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {geoJsonData && (
                <GeoJSON
                  data={geoJsonData}
                  style={{ color: '#07d2fa', weight: 2, opacity: 0.2 }}
                />
              )}
              {trains?.map((train, index) => (
                <Marker
                  key={train.id}
                  position={[
                    train.currentLocation.coordinates[0],
                    train.currentLocation.coordinates[1],
                  ]}
                  icon={
                    new L.divIcon({
                      className: 'custom-icon',
                      html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 16.5C9.32843 16.5 10 15.8284 10 15C10 14.1716 9.32843 13.5 8.5 13.5C7.67157 13.5 7 14.1716 7 15C7 15.8284 7.67157 16.5 8.5 16.5Z" fill="${generateUniqueColor(
                        index
                      )}"/>
<path d="M15.5 16.5C16.3284 16.5 17 15.8284 17 15C17 14.1716 16.3284 13.5 15.5 13.5C14.6716 13.5 14 14.1716 14 15C14 15.8284 14.6716 16.5 15.5 16.5Z" fill="${generateUniqueColor(
                        index
                      )}"/>
<path d="M12 2.5C8 2.5 4 3 4 6.5V16C4 17.93 5.57 19.5 7.5 19.5L6 21V21.5H8L10 19.5H14L16 21.5H18V21L16.5 19.5C18.43 19.5 20 17.93 20 16V6.5C20 3 16 2.5 12 2.5ZM12 4.5C15.51 4.5 16.96 4.98 17.57 5.5H6.43C7.04 4.98 8.49 4.5 12 4.5ZM6 7.5H11V10.5H6V7.5ZM18 16C18 16.83 17.33 17.5 16.5 17.5H7.5C6.67 17.5 6 16.83 6 16V12.5H18V16ZM18 10.5H13V7.5H18V10.5Z" fill="${generateUniqueColor(
                        index
                      )}"/>
</svg>
`,
                    })
                  }>
                  <Popup>
                    <b>{train.name}</b>
                    <br />
                    Latitude: {train.currentLocation.coordinates[0]}
                    <br />
                    Longitude: {train.currentLocation.coordinates[1]}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>
        <div className='col d-flex justify-content-center'>
          <div className='container'>
            <div className='row'>
              <div className='h3'>Trains</div>
            </div>
            <div className='row'>
              <div className='col'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Train</th>
                      <th scope='col'>Latitude</th>
                      <th scope='col'>Longitude</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trains.map((train) => (
                      <tr key={train.id}>
                        <td>{train.name}</td>
                        <td>{train.currentLocation.coordinates[0]}</td>
                        <td>{train.currentLocation.coordinates[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col d-flex justify-content-center'>
          <div className='container'>
            <div className='row'>
              <div className='h3'>Stations</div>
            </div>
            <div className='row'>
              <div className='col'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Station</th>
                      <th scope='col'>Latitude</th>
                      <th scope='col'>Longitude</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Colombo Fort</td>
                      <td>6.9345</td>
                      <td>79.8487</td>
                    </tr>
                    <tr>
                      <td>Kandy</td>
                      <td>7.2906</td>
                      <td>80.6337</td>
                    </tr>
                    <tr>
                      <td>Galle</td>
                      <td>6.0535</td>
                      <td>80.2209</td>
                    </tr>
                    <tr>
                      <td>Badulla</td>
                      <td>6.9934</td>
                      <td>81.0553</td>
                    </tr>
                    <tr>
                      <td>Anuradhapura</td>
                      <td>8.3114</td>
                      <td>80.4037</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col d-flex justify-content-center'>
          <div className='container'>
            <div className='row'>
              <div className='h3'>Routes</div>
            </div>
            <div className='row'>
              <div className='col'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Route</th>
                      <th scope='col'>Distance (km)</th>
                      <th scope='col'>Duration (hours)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Colombo Fort - Kandy</td>
                      <td>115</td>
                      <td>2.5</td>
                    </tr>
                    <tr>
                      <td>Colombo Fort - Galle</td>
                      <td>116</td>
                      <td>2.5</td>
                    </tr>
                    <tr>
                      <td>Colombo Fort - Badulla</td>
                      <td>220</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>Colombo Fort - Anuradhapura</td>
                      <td>206</td>
                      <td>4.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col d-flex justify-content-center'>
          <div className='container'>
            <div className='row'>
              <div className='h3'>Train Types</div>
            </div>
            <div className='row'>
              <div className='col'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Type</th>
                      <th scope='col'>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Intercity</td>
                      <td>Fast and comfortable</td>
                    </tr>
                    <tr>
                      <td>Express</td>
                      <td>Fast and stops at major stations</td>
                    </tr>
                    <tr>
                      <td>Local</td>
                      <td>Stops at all stations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col d-flex justify-content-center'>
          <div className='container'>
            <div className='row'>
              <div className='h6 fw-light'>
                &copy; 2021 Train Tracker. All rights reserved.
              </div>
              <a href='/privacy'>Privacy Policy</a>
              <a href='/terms'>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
