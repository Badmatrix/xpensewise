import { SignupForm } from "./signupForm";

function page() {
  return (
    <div className="flex justify-center w-full p-6 px-2 md:p-10">
      <div className="md:w-5/6 w-full">
        <SignupForm/>
      </div>
    </div>
  );
}

export default page