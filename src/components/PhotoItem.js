import { makeStyles } from '@material-ui/core'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

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
    border: '2px solid black',
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

// const PhotoItem = (props) => {
//   return (
//     <div>
//       <div>Sol - {props.photo.sol}</div>
//       <div>Rover - {props.photo.rover.name}</div>
//       <div>Camera - {props.photo.camera.name}</div>
//       <div>
//         <img
//           style={{ width: 200, height: 200 }}
//           alt={props.photo.id}
//           src={props.photo.img_src.toString().replace('http', 'https')}
//         />
//       </div>

//       <hr />
//     </div>
//   )
// }

const PhotoItem = (props) => {
  const classes = useStyles()
  return (
    <Card
      className={classes.profileContent}
      sx={{ maxWidth: '60%' }}
      style={{ marginBottom: 20 }}
    >
      <CardMedia
        component='img'
        alt={props.photo.id}
        height='auto'
        image={props.photo.img_src.toString().replace('http', 'https')}
      />
      <CardContent className={classes.content}>
        <Typography>Sol - {props.photo.sol}</Typography>
        <Typography>Rover - {props.photo.rover.name}</Typography>
        <Typography>Camera - {props.photo.camera.name}</Typography>
      </CardContent>
    </Card>
  )
}

export default PhotoItem
