import { makeStyles } from '@material-ui/core'

import React from 'react'
import PhotoItem from './PhotoItem'

const useStyles = makeStyles(({ spacing }) => ({
  form: {
    '& > :not(:first-child)': {
      marginTop: spacing(2),
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  content: {
    padding: '0px',
    margin: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  profileContent: {
    padding: '20px',
    margin: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
}))

const PhotoList = ({ photos, visiblePhotos }) => {
  const classes = useStyles()
  if (!photos.length) {
    return <h1>Photos Not Found</h1>
  }
  return (
    <div className={classes.profileContent}>
      <div className={classes.content}>
        Total Images - {photos.length}
        {photos.slice(0, visiblePhotos).map((photo) => (
          <PhotoItem photo={photo} key={photo.id} />
        ))}
      </div>
    </div>
  )
}

export default PhotoList
