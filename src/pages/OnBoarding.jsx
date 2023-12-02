import Navbar from "../components/Navbar";
import PrimaryInput from "../components/PrimaryInput";
function OnBoarding() {
  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <div className="">
      <Navbar setModal={() => {}} showModal={false} minimal={true} />

      <h1 className=" text-center font-extrabold italic text-5xl mt-10">
        Create Account
      </h1>
      <header className="flex flex-row justify-center">
        <section className="flex flex-col items-center  font-semibold">
          <div className="flex flex-row gap-5 ">
            <div className="flex flex-col">
              <label htmlFor="first-name">First Name</label>
              <PrimaryInput
                id="first-name"
                type="text"
                placeholder="First Name"
                onChange={() => {}}
                styles={
                  "p-4 rounded-lg border-2 border-gray-300 focus:outline-gray-400"
                }
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="last-name">Last Name</label>
              <PrimaryInput
                id="last-name"
                type="text"
                placeholder="Last Name"
                onChange={() => {}}
                styles={
                  "p-4 rounded-lg border-2 border-gray-300 focus:outline-gray-400"
                }
              />
            </div>
          </div>

          <div>
            <label>Birthday</label>
            <div>
              <PrimaryInput
                id="dob-day"
                type="number"
                placeholder="DD"
                onChange={() => {}}
                styles={
                  "p-4 rounded-lg border-2 border-gray-300 focus:outline-gray-400"
                }
              />
              <PrimaryInput
                id="dob-month"
                type="number"
                placeholder="MM"
                onChange={() => {}}
                styles={
                  "p-4 rounded-lg border-2 border-gray-300 focus:outline-gray-400"
                }
              />
              <PrimaryInput
                id="dob-year"
                type="number"
                placeholder="YYYY"
                onChange={() => {}}
                styles={
                  "p-4 rounded-lg border-2 border-gray-300 focus:outline-gray-400"
                }
              />
            </div>

            <div>
              <label>Gender</label>
              <div
                className={
                  "multiple-option-container" +
                  " flex flex-row gap-5 text-center"
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
          </div>
          <div className="flex flex-row gap-5">
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
              onChange={() => {}}
              styles={
                "p-4 rounded-lg border-2 border-gray-300 focus:outline-gray-400"
              }
            />
          </div>
          <button onSubmit={handleSubmit}>Submit</button>
        </section>
        <section className="flex flex-col items-center  font-semibold">
          <label htmlFor="url">Profile Picture</label>
          <PrimaryInput
            id="profile-pic"
            type="text"
            placeholder="URL"
            onChange={() => {}}
            styles={
              "p-3 rounded-lg border-2 border-gray-300 focus:outline-gray-400"
            }
          />
        </section>
      </header>
    </div>
  );
}

export default OnBoarding;
