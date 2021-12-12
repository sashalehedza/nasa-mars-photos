import React from 'react'
import PhotoItem from './PhotoItem'

const PhotoList = ({ photos, visiblePhotos }) => {
  if (!photos.length) {
    return <h1>Photos Not Found</h1>
  }
  return (
    <div>
      Total Images - {photos.length}
      {photos.slice(0, visiblePhotos).map((photo) => (
        <PhotoItem photo={photo} key={photo.id} />
      ))}
    </div>
  )
}

export default PhotoList
