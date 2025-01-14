
function ReduceForms({state})  {   
  return (
    <>
      {state.names.map((name, index) => (
        <div key={index}>
          <p>{name}</p>
        </div>
      ))}
    </>
  );
}

export default ReduceForms;
