export const ExperienceBox = (props) => {
  return (
    <article className="mb-4">
      <h2 className="text-md font-bold">{props.position}</h2>
      <h3 className="text-sm text-gray-400 italic">{props.place}</h3>
      <div>{props.children}</div>
      <date className="text-ada-purple text-sm">{props.date}</date>
    </article>
  );
};
