import Navbar from "../components/Navbar";
import PrimaryInput from "../components/PrimaryInput";
import { useState } from "react";

// this is a test comment for commit
function OnBoarding() {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_identity: "",
    gender_interest: "",
    field_interest: "",
    programming_languages: [],
    gitub: "",
    programming_experience: "",
    marital_status: "",
    school: "",
    location: "",
    url: "",
    about: "",
    matches: [],
  });

  const gender_list = ["Man", "Woman", "Transgender", "More"];

  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleChangeText = (e) => {
    // console.log("e", e);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    // console.log("value" + value, "name" + name);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formData);

  return (
    <div className="h-full flex flex-col justify-center">
      <Navbar setModal={() => {}} showModal={false} minimal={true} />

      <h1 className=" text-center font-extrabold italic text-5xl mt-10">
        Create your profile
      </h1>
      <header className="flex flex-row self-center w-[75%] h-full mt-24">
        <section className="flex flex-col w-[50%] gap-4 ">
          <div className="flex flex-row gap-5 self-start justify-evenly">
            <div className="flex flex-col gap-6">
              <label htmlFor="first-name">First Name</label>
              <PrimaryInput
                required={true}
                id="first-name"
                type="text"
                placeholder="First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChangeText}
                styles={
                  "p-4  rounded-lg border-2 border-gray-300 focus:outline-gray-400"
                }
              />
            </div>
            <div className=" flex flex-col gap-6">
              <label htmlFor="last-name">Last Name</label>
              <PrimaryInput
                required={true}
                id="last-name"
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChangeText}
                styles={
                  "p-4  rounded-lg border-2 border-gray-300 focus:outline-gray-400"
                }
              />
            </div>
          </div>

          <label>Birthday</label>
          <div className=" flex flex-row gap-4">
            <PrimaryInput
              required={true}
              id="dob-day"
              type="number"
              placeholder="DD"
              name="dob_day"
              value={formData.dob_day}
              onChange={handleChangeText}
              styles={
                "p-4 w-[125px] rounded-lg border-2 border-gray-300 focus:outline-gray-400"
              }
            />
            <PrimaryInput
              required={true}
              id="dob-month"
              type="number"
              placeholder="MM"
              name="dob_month"
              value={formData.dob_month}
              onChange={handleChangeText}
              styles={
                "p-4 w-[125px] rounded-lg border-2 border-gray-300 focus:outline-gray-400"
              }
            />
            <PrimaryInput
              required={true}
              id="dob-year"
              type="number"
              placeholder="YYYY"
              name="dob_year"
              value={formData.dob_year}
              onChange={handleChangeText}
              styles={
                "p-4 w-[125px] rounded-lg border-2 border-gray-300 focus:outline-gray-4 w-[100px]00"
              }
            />
          </div>

          <label>Gender</label>
          <div className={" flex flex-row gap-5 text-center"}>
            {gender_list.map((gender) => {
              const gender_lower = gender.toLowerCase();
              return (
                <div key={gender} className="multiple-option-container">
                  <input
                    key={gender}
                    type="radio"
                    id={`${gender_lower}-radio`}
                    value={gender_lower}
                    name="gender_identity"
                    checked={formData.gender_identity == gender_lower}
                    onChange={handleChangeText}
                  ></input>
                  <label
                    className="w-[100px] h-[50px] flex justify-center items-center rounded-lg border-2 border-gray-300"
                    htmlFor={`${gender_lower}-radio`}
                  >
                    {gender}
                  </label>
                </div>
              );
            })}
          </div>

          <label>I am interseted in...</label>
          <div className={" flex flex-row gap-5 text-center"}>
            {gender_list.map((gender) => {
              const gender_lower = gender.toLowerCase();
              return (
                <div key={gender} className="multiple-option-container">
                  <input
                    key={gender}
                    type="radio"
                    id={`${gender_lower}-interest-radio`}
                    value={gender_lower}
                    name="gender_interest"
                    checked={formData.gender_interest == gender_lower}
                    onChange={handleChangeText}
                  ></input>
                  <label
                    className="w-[100px] h-[50px] flex justify-center items-center rounded-lg border-2 border-gray-300"
                    htmlFor={`${gender_lower}-interest-radio`}
                  >
                    {gender}
                  </label>
                </div>
              );
            })}
          </div>

          <label htmlFor="about-me">Field of Interest</label>
          <PrimaryInput
            id="field-interest"
            placeholder="Web Developer"
            name="field_interest"
            value={formData.field_interest}
            onChange={handleChangeText}
            styles={
              "p-4 w-[90%] rounded-lg border-2 border-gray-300 focus:outline-gray-400"
            }
          />

          <label htmlFor="gender-profile-display">
            Show gender on my profile
          </label>
          <input
            id="gender-profile-display"
            type="checkbox"
            name="show_gender"
            onChange={handleChangeText}
            className=" self-start"
          ></input>

          <label htmlFor="about-me">About Me</label>
          <PrimaryInput
            id="about-me"
            placeholder="I like programming..."
            name="about"
            value={formData.about}
            onChange={handleChangeText}
            styles={
              "p-4 w-[90%] rounded-lg border-2 border-gray-300 focus:outline-gray-400"
            }
          />

          <button
            className=" bg-blue-500 rounded-full p-4 text-white w-48 hover:bg-blue-300 self-center"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </section>
        {/* another  section */}
        <section className="flex flex-col w-[50%]">
          <label htmlFor="url">Profile Picture</label>
          <PrimaryInput
            id="profile-pic"
            type="text"
            placeholder="URL"
            name="url"
            value={formData.url}
            onChange={handleChangeText}
            styles={
              "p-3 w-[75%] rounded-lg border-2 border-gray-300 focus:outline-gray-400"
            }
          />
          <div>
            {formData.url && (
              <img className="h-[400px] w-[400px]" src={formData.url}></img>
            )}
          </div>
        </section>
      </header>
    </div>
  );
}

export default OnBoarding;
