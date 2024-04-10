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
    url: "",
    about: "",
    matches: [],
  });

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
    <div className="h-screen flex flex-col justify-center">
      <Navbar setModal={() => {}} showModal={false} minimal={true} />

      <h1 className=" text-center font-extrabold italic text-5xl mt-10">
        Create Account
      </h1>
      <header className="flex flex-row self-center w-[75%] h-full mt-24">
        <section className="flex flex-col w-[50%] gap-6 ">
          <div className="flex flex-row gap-5 self-start justify-evenly">
            <div className="flex flex-col">
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
            <div className=" flex flex-col">
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
          <div className="flex flex-col">
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
          </div>

          <div className="flex flex-col self-right">
            <label>Gender</label>
            <div
              className={
                "multiple-option-container" + " flex flex-row gap-5 text-center"
              }
            >
              <input
                type="radio"
                id="man-radio"
                value="man"
                name="gender_identity"
                checked={formData.gender_identity == "man"}
                onChange={handleChangeText}
              ></input>
              <label
                className="w-[100px] h-[50px] flex justify-center items-center rounded-lg border-2  border-gray-300"
                htmlFor="man-radio"
              >
                Man
              </label>

              <input
                type="radio"
                id="woman-radio"
                value="woman"
                name="gender_identity"
                checked={formData.gender_identity == "woman"}
                onChange={handleChangeText}
              ></input>
              <label
                className="w-[100px] h-[50px] flex justify-center items-center rounded-lg border-2 border-gray-300 "
                htmlFor="woman-radio"
              >
                Woman
              </label>

              <input
                type="radio"
                id="more-radio"
                value="more"
                name="gender_identity"
                checked={formData.gender_identity == "more"}
                onChange={handleChangeText}
              ></input>
              <label
                className="w-[100px] h-[50px] flex justify-center items-center rounded-lg border-2 border-gray-300 "
                htmlFor="more-radio"
              >
                More
              </label>
            </div>
          </div>

          <div className="flex flex-col self-right">
            <label>I am interseted in...</label>
            <div
              className={
                "multiple-option-container" + " flex flex-row gap-5 text-center"
              }
            >
              <input
                type="radio"
                id="man-interest-radio"
                value="man"
                name="gender_interest"
                checked={formData.gender_interest == "man"}
                onChange={handleChangeText}
              ></input>
              <label
                className="w-[100px] h-[50px] flex justify-center items-center rounded-lg border-2 border-gray-300"
                htmlFor="man-interest-radio"
              >
                Man
              </label>

              <input
                type="radio"
                id="woman-interest-radio"
                value="woman"
                name="gender_interest"
                checked={formData.gender_interest == "woman"}
                onChange={handleChangeText}
              ></input>
              <label
                className="w-[100px] h-[50px] flex justify-center items-center rounded-lg border-2 border-gray-300 "
                htmlFor="woman-interest-radio"
              >
                Woman
              </label>

              <input
                type="radio"
                id="more-interest-radio"
                value="more"
                name="gender_interest"
                checked={formData.gender_interest == "more"}
                onChange={handleChangeText}
              ></input>
              <label
                className="w-[100px] h-[50px] flex justify-center items-center rounded-lg border-2 border-gray-300 "
                htmlFor="more-interest-radio"
              >
                More
              </label>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <label htmlFor="gender-profile-display">
              Show gender on my profile
            </label>
            <input
              id="gender-profile-display"
              type="checkbox"
              name="show_gender"
              onChange={handleChangeText}
            ></input>
          </div>

          <div className="flex flex-col">
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
          </div>
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
