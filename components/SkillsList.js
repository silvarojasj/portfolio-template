export const SkillsList = (props) => {
  return (
    <article className="mb-3">
      <div>
        <div>{props.icon}</div>
        <h4 className="font-bold text-xl text-ada">{props.name}</h4>
      </div>
      <ul className="ml-2">{props.children}</ul>
    </article>
  );
};
