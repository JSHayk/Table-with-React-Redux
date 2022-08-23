const Loader = ({ src, alt }) => {
  return (
    <div className="loader-container">
        <img src={src} alt={alt} />
    </div>
  )
}

export default Loader