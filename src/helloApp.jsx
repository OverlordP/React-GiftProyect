const nombres= {
    nombre: "piero",
    apellido :"roca"
}




export const Holamundo = function ({tite}) {

  return (
    <>
      <h1>Hola mundo ps causita</h1>
      { tite }
      <h2>{ JSON.stringify(nombres) }</h2>
    </>
  );
};
