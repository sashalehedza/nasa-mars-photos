import React, { useState, useEffect, useCallback } from 'react'
import PhotoList from './components/PhotoList'
import MySelect from './components/UI/MySelect'

import { getPhotos } from './service/api'
import './App.css'

const App = () => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [photosPerPage, setPhotoPerPage] = useState(5)

  const [filteredList, setFilteredList] = useState(photos)
  const [selectedRover, setSelectedRover] = useState('')
  const [selectedCamera, setSelectedCamera] = useState('')
  const [selectedSol, setSelectedSol] = useState('')

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true)
      const res = await getPhotos()
      setPhotos(res.data.photos)
      setLoading(false)
    }
    fetchPhotos()
  }, [])

  const handleRoverChange = (event) => {
    setSelectedRover(event)
    setPhotoPerPage(5)
    console.log(event)
  }
  const handleCameraChange = (event) => {
    setSelectedCamera(event)
    setPhotoPerPage(5)
    console.log(event)
  }
  const handleSolChange = (event) => {
    setSelectedSol(event)
    setPhotoPerPage(5)
    console.log(event)
  }

  useEffect(() => {
    const filterByRover = (filteredData) => {
      if (!selectedRover) {
        return filteredData
      }

      const filteredPhotos = filteredData.filter(
        (photo) =>
          photo.rover.name
            .toString()
            .toLowerCase()
            .split(' ')
            .indexOf(selectedRover.toString().toLowerCase()) !== -1
      )
      return filteredPhotos
    }
    const filterByCamera = (filteredData) => {
      if (!selectedCamera) {
        return filteredData
      }

      const filteredPhotos = filteredData.filter(
        (photo) =>
          photo.camera.name
            .toString()
            .toLowerCase()
            .split(' ')
            .indexOf(selectedCamera.toString().toLowerCase()) !== -1
      )
      return filteredPhotos
    }

    const filterBySol = (filteredData) => {
      if (!selectedSol) {
        return filteredData
      }

      const filteredPhotos = filteredData.filter(
        (photo) =>
          photo.sol.toString().toLowerCase() ===
          selectedSol.toString().toLowerCase()
      )
      return filteredPhotos
    }

    var filteredData = filterByRover(photos)
    filteredData = filterByCamera(filteredData)
    filteredData = filterBySol(filteredData)

    setFilteredList(filteredData)
  }, [selectedRover, selectedCamera, selectedSol, photos])

  const handleClick = useCallback(() => {
    setPhotoPerPage((prevVisiblePhotos) => prevVisiblePhotos + 5)
  }, [])

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Nasa Mars Photos</h1>
      <MySelect
        value={selectedRover}
        onChange={(event) => handleRoverChange(event)}
        defaultValue='Rover'
        options={[{ value: 'Curiosity', name: 'Curiosity' }]}
      />
      <MySelect
        value={selectedCamera}
        onChange={(event) => handleCameraChange(event)}
        defaultValue='Camera'
        options={[
          { value: 'FHAZ', name: 'FHAZ' },
          { value: 'MAST', name: 'MAST' },
          { value: 'NAVCAM', name: 'NAVCAM' },
          { value: 'CHEMCAM', name: 'CHEMCAM' },
        ]}
      />
      <MySelect
        value={selectedSol}
        onChange={(event) => handleSolChange(event)}
        defaultValue='Sol'
        options={[
          { value: '1000', name: '1000' },
          { value: '2000', name: '2000' },
        ]}
      />

      {loading ? (
        <h3>Loading Photos</h3>
      ) : (
        <>
          <PhotoList photos={filteredList} visiblePhotos={photosPerPage} />
          <button
            style={{
              marginBottom: '20px',
              display: photosPerPage >= filteredList.length ? 'none' : 'block',
            }}
            type='button'
            onClick={handleClick}
          >
            Load more
          </button>
        </>
      )}
    </div>
  )
}

export default App
