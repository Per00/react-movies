export function FilmCard(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.overview}</p>
      <button onClick={props.CTA}>Clique Aqui!</button>
    </div>
  );
}
