import React from "react";
import axios from "axios";
type Itwit = {
  id: string;
  Summry: string;
};
export default function Twittws() {
  const ApiTwitts = "https://64e1142f50713530432cee2a.mockapi.io/courses";

  const [Twit, setTwit] = React.useState<Itwit[]>([]);
  React.useEffect(() => {
    axios.get(ApiTwitts).then((res) => {
      setTwit(res.data);
    });
  }, []);

  const deleteID = (id: string) => {
    axios
      .delete(`https://64e1142f50713530432cee2a.mockapi.io/courses/${id}`)
      .then((res) => {
        setTwit((prevTwit) => prevTwit.filter((item) => item.id !== id));
        {
          res;
        }
      });
  };
  return (
    <>
      <div className="  h-screen grid grid-cols-2 max-sm:grid-cols-1  bg-slate-50 p-10">
        {Twit.map((item) => {
          return (
            <div className="rounded-sm border-2 h-20 w-10/12 max-sm:w-48 text-black  flex flex-col justify-start text-left ">
              <h1 className="font-bold  ml-8 mt-3  max-sm:ml-3 text-base">
                {item.Summry}
              </h1>
              <div className="flex">
                <a onClick={() => deleteID(item.id)}>
                  <img
                    className="ml-8 mt-3 w-5 max-sm:w-6 cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
                    alt="delete"
                  />
                </a>

                <a>
                  <img
                    className="ml-8 mt-3 w-5 max-sm:w-6 cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
