export const SkillsItem = (props) => {
  return (
    <li className="text-sm text-white">
      <div>{props.children}</div>
      <div className="ml-2">
        {props.institution && <div className="italic">{props.institution}</div>}
        {props.date && <date>{props.date}</date>}
      </div>
    </li>
  );
};
