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
    gender_identity: "man",
    gender_interest: "woman",
    url: "",
    about: "",
    matches: [],
  });

  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleChangeText = (e) => {
    // console.log("e", e);
    const value = e.target.value;
    const name = e.target.name;

    console.log("value" + value, "name" + name);

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
              <input type="radio" htmlFor="man-radio"></input>
              <label
                className="p-3 w-[100px] rounded-lg border-2 border-gray-300 "
                htmlFor="man-radio"
              >
                Man
              </label>
              <input type="radio" htmlFor="woman-radio"></input>
              <label
                className="p-3 w-[100px] rounded-lg border-2 border-gray-300 "
                htmlFor="woman-radio"
              >
                Woman
              </label>
              <input type="radio" htmlFor="more-readio"></input>
              <label
                className="p-3 w-[100px] rounded-lg border-2 border-gray-300 "
                htmlFor="more-radio"
              >
                More
              </label>
            </div>
          </div>

          <div className="flex flex-col self-right">
            <label>I am interested in...</label>
            <div
              className={
                "multiple-option-container" + " flex flex-row gap-5 text-center"
              }
            >
              <input type="radio" htmlFor="man-radio"></input>
              <label
                className="p-3 w-[100px] rounded-lg border-2 border-gray-300 "
                htmlFor="man-radio"
              >
                Man
              </label>
              <input type="radio" htmlFor="woman-radio"></input>
              <label
                className="p-3 w-[100px] rounded-lg border-2 border-gray-300 "
                htmlFor="woman-radio"
              >
                Woman
              </label>
              <input type="radio" htmlFor="more-readio"></input>
              <label
                className="p-3 w-[100px] rounded-lg border-2 border-gray-300 "
                htmlFor="more-radio"
              >
                More
              </label>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <label htmlFor="gender-profile-display">
              Show gender on my profile
            </label>
            <input id="gender-profile-display" type="checkbox"></input>
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
        </section>
      </header>
    </div>
  );
}

export default OnBoarding;
