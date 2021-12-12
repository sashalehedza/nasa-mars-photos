const PhotoItem = (props) => {
  return (
    <div>
      <div>Sol - {props.photo.sol}</div>
      <div>Rover - {props.photo.rover.name}</div>
      <div>Camera - {props.photo.camera.name}</div>
      <div>
        <img
          style={{ width: 200, height: 200 }}
          alt={props.photo.id}
          src={props.photo.img_src.toString().replace('http', 'https')}
        />
      </div>

      <hr />
    </div>
  )
}

export default PhotoItem
