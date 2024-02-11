"use client";
import { useAddCauseMutation } from "@/redux/api/apiSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const AddCausePage = () => {
  const router = useRouter();
  const [addCause, { error, isSuccess }] = useAddCauseMutation();
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(currentDate);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const photoUrl = event.target.photoUrl.value;
    const category = event.target.category.value;

    const goal = event.target.goal.value;
    const raised = event.target.raised.value;

    const description = event.target.description.value;

    const cause = {
      name: category,
      title,
      primary_img: photoUrl,
      title,
      goal,
      raised,
      description,
      date: formattedDate,
    };
    if (category === "" || title === "" || photoUrl === "") {
      toast.error("Please fill all the fields... 😔 Check selected filed");
      return;
    }
    addCause(cause);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Lens added successfully...");
      router.push("/admin/manage-causes");
    }
  }, [isSuccess]);
  return (
    <div>
      <div className="p-6 flex items-center justify-center my-10">
        <div className="container max-w-screen-lg mx-auto">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-10 ">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className=" text-xl font-semibold">Add Causes</p>
                <p className="text-lg">Please fill out all the fields.</p>
              </div>
              <form className="lg:col-span-2" onSubmit={handleSubmit}>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2">
                    <label> Title</label>
                    <input
                      type="text"
                      name="title"
                      className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700 "
                      placeholder="title....."
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label>Photo Url</label>
                    <input
                      type="text"
                      name="photoUrl"
                      className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                      placeholder="Photo Url...."
                      required
                    />
                  </div>

                  <div className="md:col-span-2 ">
                    <label>Category</label>
                    <select
                      id="category"
                      className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none  dark:border-gray-600 dark:focus:border-gray  focus:ring-0  peer focus:border-gray-800"
                      name="category"
                    >
                      <option disabled selected value={""}>
                        Select category
                      </option>
                      <option value="Healthcare"> Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Humanitarian Aid">
                        {" "}
                        Humanitarian Aid
                      </option>
                      <option value="Animal Welfare">Animal Welfare</option>
                      <option value="The Right of Childen">
                        {" "}
                        The Right of Childen
                      </option>
                      <option value="Winter Survival Pack">
                        {" "}
                        Winter Survival Pack
                      </option>
                      <option value="Clean Water"> Clean Water</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label> Goal</label>
                    <input
                      type="number"
                      name="goal"
                      className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700 "
                      placeholder="Goal....."
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label> Raised</label>
                    <input
                      type="number"
                      name="raised"
                      className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700 "
                      placeholder="Raised....."
                      required
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label>Description</label>
                    <div className=" border-gray-400 rounded items-center mt-1">
                      <textarea
                        className="h-14 border mt-1 rounded px-4 pt-1 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                        name="description"
                        placeholder="Description...."
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className="text-gray-200 rounded px-5 py-1 text-lg 
                    bg-blue-400"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCausePage;
