function Card(props) {
  return (
    <>
      <div className="bg-amber-800 p-8 m-4 rounded-3xl w-fit">
        <h1 className="text-white">{props.id}</h1>
        <p className="text-amber-300">
          In react we can create custom components and render them..{" "}
        </p>
      </div>
    </>
  );
}

export default Card;
