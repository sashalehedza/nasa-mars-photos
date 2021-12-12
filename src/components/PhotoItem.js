import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

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
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        alt={props.photo.id}
        height='140'
        image={props.photo.img_src.toString().replace('http', 'https')}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Sol - {props.photo.sol}
        </Typography>
        <Typography>Rover - {props.photo.rover.name}</Typography>
        <Typography>Camera - {props.photo.camera.name}</Typography>
      </CardContent>
    </Card>
  )
}

export default PhotoItem
