const Main = ({ name, image, summary }) => {
  return <div>
    <h1>{name}</h1> 
    <img src={image} alt={name} />
    <p>{summary}</p>
  </div>;
};

export default Main;
