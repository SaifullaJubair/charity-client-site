"use client";
import { Collapse } from "antd";
import { FaMinus, FaPlus } from "react-icons/fa";

const CollapseFaQ = () => {
  const onChange = (key) => {};
  return (
    <Collapse
      accordion={true}
      defaultActiveKey={["1"]}
      onChange={onChange}
      className="my-10 lg:w-3/4 w-full border-x-0 rounded-none shadow-none bg-transparent"
      expandIconPosition="right"
      expandIcon={({ isActive }) =>
        isActive ? (
          <p className="w-8 h-8 bg-white rounded-full mt-3 ring-2 ring-secondary flex flex-col justify-center items-center p-2">
            {" "}
            <FaPlus className="text-lg  text-secondary" />
          </p>
        ) : (
          <p className="w-8 h-8 bg-white rounded-full mt-3 ring-2 ring-gray-500 flex flex-col justify-center items-center  p-2">
            {" "}
            <FaMinus className="text-lg  text-gray-500" />
          </p>
        )
      }
    >
      <Collapse.Panel
        header="What is your refund policy?"
        className="font-semibold text-2xl rounded-none py-4 "
        key="1"
      >
        <p className="font-normal text-base ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          praesentium molestias animi, maxime cumque modi exercitationem aliquid
          necessitatibus veniam?
        </p>
      </Collapse.Panel>
      <Collapse.Panel
        header="How Can I Get Help?"
        className="font-semibold text-2xl rounded-none py-4 "
        key="2"
      >
        <p className="font-normal text-base">
          Lorem ipsum dolor sit amet, vix an natum labitur eleifnd, mel am
          laoreet menandri. Ei justo complectitur duo. Ei mundi solet ut soletu
          possit quo.
        </p>
      </Collapse.Panel>
      <Collapse.Panel
        header="What’s Service We Provided?"
        className="font-semibold text-2xl rounded-none py-4 "
        key="3"
      >
        <p className="font-normal text-base">
          Lorem ipsum dolor sit amet, vix an natum labitur eleifnd, mel am
          laoreet menandri. Ei justo complectitur duo. Ei mundi solet ut soletu
          possit quo.
        </p>
      </Collapse.Panel>
      <Collapse.Panel
        header="Why we are best?"
        className="font-semibold text-2xl rounded-none py-4 "
        key="4"
      >
        <p className="font-normal text-base">
          Lorem ipsum dolor sit amet, vix an natum labitur eleifnd, mel am
          laoreet menandri. Ei justo complectitur duo. Ei mundi solet ut soletu
          possit quo.
        </p>
      </Collapse.Panel>
    </Collapse>
  );
};
export default CollapseFaQ;
