export const Header = (props) => {
  return (
    <header className="flex items-center">
      <img
        src={props.profilePicture}
        className="block mr-4 w-32 rounded-full p-4"
      />
      <div>
        <h1 className="font-bold text-4xl">{props.name}</h1>
        <h2 className="font-bold text-xl text-ada-purple">{props.position}</h2>
      </div>
    </header>
  );
};
