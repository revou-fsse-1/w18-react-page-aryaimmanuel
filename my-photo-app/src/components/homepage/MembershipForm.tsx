import { useState } from "react";

export const MemberForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  // const [isSuccess, setIsSuccess] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name;
    console.log(field);

    if (field === "email") setEmail(event.target.value);
    if (field === "firstname") setFirstName(event.target.value);
    if (field === "lastname") setLastName(event.target.value);
  };
  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();

    if (!trimmedEmail || trimmedEmail === undefined) {
      const field: string | undefined = "email must not empty";
      setEmailError(field);
    } else if (!isValidEmail(trimmedEmail)) {
      setEmailError("Invalid email format");
    }

    if (!trimmedFirstName || trimmedFirstName === undefined) {
      const field: string | undefined = "firstname must not empty";
      setFirstNameError(field);
    } else if (!isValidName(trimmedFirstName)) {
      setFirstNameError("firstname must not empty");
    }

    if (!trimmedLastName || trimmedLastName === undefined) {
      const field: string | undefined = "lastname must not empty";
      setLastNameError(field);
    } else if (!isValidName(trimmedLastName)) {
      setLastNameError("lastname must not empty");
    }
    console.log({ email, firstName, lastName });
    if (trimmedEmail && trimmedFirstName && trimmedLastName) {
      onSuccess(); // Call the onSuccess callback provided by the parent component
    }

    // if (trimmedEmail || trimmedFirstName || trimmedLastName) {
    //   setIsSuccess("Success! You have become a member.");
    // }
  };

  const isValidEmail = (value: string): boolean => {
    // Email validation logic using regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(value);
  };

  const isValidName = (value: string): boolean => {
    // Name validation logic using regex
    const nameRegex = /^[^\s]+$/;
    return nameRegex.test(value);
  };

  return (
    <div>
      {/* <p>state: {email}</p>
      <p>state: {firstName}</p>
      <p>state: {lastName}</p> */}
      <form className="flex flex-col justify-center" onSubmit={handleForm}>
        <label className="font-bold" htmlFor="member-email">
          User Email
        </label>
        <input
          onChange={handleInputChange}
          className="border border-black rounded-lg px-2 py2 text-xl "
          name="email"
          value={email}
          id="member-email"
          type="text"
        />
        {!email || !isValidEmail(email) ? (
          <span className="my-1 text-red-600">{emailError}</span>
        ) : (
          <span></span>
        )}
        <label className="font-bold" htmlFor="first-name">
          First Name
        </label>
        <input
          onChange={handleInputChange}
          className="border border-black rounded-lg px-2 py2 text-xl"
          name="firstname"
          value={firstName}
          id="first-name"
          type="text"
        />
        {!firstName || !isValidName(firstName) ? (
          <span className="my-1 text-red-600">{firstNameError}</span>
        ) : (
          <span></span>
        )}
        <label className="font-bold" htmlFor="last-name">
          Last Name
        </label>
        <input
          onChange={handleInputChange}
          className="border border-black rounded-lg px-2 py2 text-xl"
          name="lastname"
          value={lastName}
          id="last-name"
          type="text"
        />
        {!lastName || !isValidName(lastName) ? (
          <span className="my-1 text-red-600">{lastNameError}</span>
        ) : (
          <span></span>
        )}
        <input
          className="border my-3 px-1 py-1 font-bold text-white border-black rounded-lg cursor-pointer bg-green-700 hover:bg-green-400"
          type="submit"
          value="Become Member !!!"
        />
        {/* {!isSuccess ? (
          <span></span>
        ) : (
          <span className="my-1 text-green-600">{isSuccess}</span>
        )} */}
      </form>
    </div>
  );
};