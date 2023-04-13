function Icon ({ iconName, Size, Link }) {
  return (
    <a href={Link} target="_blank">
    <img src={`/icons/${iconName}.svg`} width={Size} />
    </a>
  )
}


Icon.defaultProps = {
Size: "30px"
}

export default Icon