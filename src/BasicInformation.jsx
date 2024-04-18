import useLocalStorage from "./hooks/useLocalStorage";

const BasicInformation = () => {
   const [firstName, setFirstName] =  useLocalStorage("firstName", "");

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <h2>firstName: {firstName}</h2>
    </div>
  );
};

export default BasicInformation;
