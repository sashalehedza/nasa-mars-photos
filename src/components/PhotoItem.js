const PhotoItem = (props) => {
  return (
    <div>
      <div>Sol - {props.photo.sol}</div>
      <div>Rover - {props.photo.rover.name}</div>
      <div>Camera - {props.photo.camera.name}</div>
      <div>
        <img
          style={{ width: 100, height: 100 }}
          alt={props.photo.img_src}
          src={props.photo.img_src}
        />
      </div>

      <hr />
    </div>
  )
}

export default PhotoItem
