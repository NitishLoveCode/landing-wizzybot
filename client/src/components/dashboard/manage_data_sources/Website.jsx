import React from "react";
import Input_field from "../../shared_components/Input_field";
import { MdDeleteOutline } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";
import Button from "../../shared_components/Button";
import {AiOutlineArrowRight} from "react-icons/ai"

export default function Website() {
  return (
    <>
      <div className="flex items-center gap-4 flex-col">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl sm:text-3xl font-bold">Crawl a new website</h3>
          <div className="flex sm:flex-row flex-col gap-2 items-center">
            <Input_field
              placeholder={"Enter Domain"}
              style={"border-2 w-[95vw] rounded-md sm:w-[30vw] h-[6vh] pl-2"}
            />
            <Button
              style={"bg-gray-800 w-[95vw] sm:w-[18vw] text-white p-2 pl-3 pr-3 rounded-md"}
              text={"Fetch new links from domain"}
            />
          </div>
        </div>
      </div>

      {/* ------------------scraped url form website---------------- */}
        <div className="flex w-full sm:w-[50vw] flex-col gap-2">
          <div className="flex w-full justify-between mb-10 gap-8 items-center">
            <div>
              <h3 className="text-md md:text-3xl font-bold">Imported Trained<br className="sm:hidden"></br> Web Pages</h3>
            </div>
            <div>
              <Button
                style={"border-2 text-sm rounded-md border-black p-1 pl-2 pr-2"}
                text={"Delete all"}
              />
            </div>
          </div>
            {/* =================MORE OPTIONS============== */}
            <div className="flex sm:hidden items-center gap-2 justify-end">
              <h3>More</h3>
              <AiOutlineArrowRight/>
            </div>
    
    
          {/* --------------------from here trained url------------------------------------- */}
          <div className="w-full overflow-x-scroll flex flex-col gap-2">
            <div className="w-full sm:w-[50vw] gap-2 flex items-center justify-between">
              <div className="flex w-full sm:w-[40vw] border-[1px] rounded-md p-2 pl-4 pr-4 border-gray-800 items-center justify-between">
                <div>
                  <h3>https://studyloverveer.in/feed</h3>
                </div>
                <div className="bg-blue-100 rounded-md p-[2px] pl-3 pr-3">
                  <h3 className="text-sm">Trained</h3>
                </div>
              </div>
    
              <div>
                <h3>345</h3>
              </div>
              <div className="cursor-pointer active:scale-95 hover:text-red-500">
                <MdDeleteOutline className="text-2xl" />
              </div>
              <div className="cursor-pointer active:scale-95">
                <LuRefreshCw className="text-2xl" />
              </div>
            </div>
    
            <div className="w-full sm:w-[50vw] gap-2 flex items-center justify-between">
              <div className="flex w-full sm:w-[40vw] border-[1px] rounded-md p-2 pl-4 pr-4 border-gray-800 items-center justify-between">
                <div>
                  <h3>https://studyloverveer.in/feed</h3>
                </div>
                <div className="bg-blue-100 rounded-md p-[2px] pl-3 pr-3">
                  <h3 className="text-sm">Trained</h3>
                </div>
              </div>
    
              <div>
                <h3>345</h3>
              </div>
              <div className="cursor-pointer active:scale-95 hover:text-red-500">
                <MdDeleteOutline className="text-2xl" />
              </div>
              <div className="cursor-pointer active:scale-95">
                <LuRefreshCw className="text-2xl" />
              </div>
            </div>
            <div className="w-full sm:w-[50vw] gap-2 flex items-center justify-between">
              <div className="flex w-full sm:w-[40vw] border-[1px] rounded-md p-2 pl-4 pr-4 border-gray-800 items-center justify-between">
                <div>
                  <h3>https://studyloverveer.in/feed</h3>
                </div>
                <div className="bg-blue-100 rounded-md p-[2px] pl-3 pr-3">
                  <h3 className="text-sm">Trained</h3>
                </div>
              </div>
    
              <div>
                <h3>345</h3>
              </div>
              <div className="cursor-pointer active:scale-95 hover:text-red-500">
                <MdDeleteOutline className="text-2xl" />
              </div>
              <div className="cursor-pointer active:scale-95">
                <LuRefreshCw className="text-2xl" />
              </div>
            </div>
            <div className="w-full sm:w-[50vw] gap-2 flex items-center justify-between">
              <div className="flex w-full sm:w-[40vw] border-[1px] rounded-md p-2 pl-4 pr-4 border-gray-800 items-center justify-between">
                <div>
                  <h3>https://studyloverveer.in/feed</h3>
                </div>
                <div className="bg-blue-100 rounded-md p-[2px] pl-3 pr-3">
                  <h3 className="text-sm">Trained</h3>
                </div>
              </div>
    
              <div>
                <h3>345</h3>
              </div>
              <div className="cursor-pointer active:scale-95 hover:text-red-500">
                <MdDeleteOutline className="text-2xl" />
              </div>
              <div className="cursor-pointer active:scale-95">
                <LuRefreshCw className="text-2xl" />
              </div>
            </div>
            <div className="w-full sm:w-[50vw] gap-2 flex items-center justify-between">
              <div className="flex w-full sm:w-[40vw] border-[1px] rounded-md p-2 pl-4 pr-4 border-gray-800 items-center justify-between">
                <div>
                  <h3>https://studyloverveer.in/feed</h3>
                </div>
                <div className="bg-blue-100 rounded-md p-[2px] pl-3 pr-3">
                  <h3 className="text-sm">Trained</h3>
                </div>
              </div>
    
              <div>
                <h3>345</h3>
              </div>
              <div className="cursor-pointer active:scale-95 hover:text-red-500">
                <MdDeleteOutline className="text-2xl" />
              </div>
              <div className="cursor-pointer active:scale-95">
                <LuRefreshCw className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      {/* --------------------------------------------------- */}




        <div className="flex gap-4 mt-8 items-center justify-center ">
          <div className="w-[25vw] h-[1px] bg-gray-400"></div>
          <div className="w-24 flex justify-center items-center">
            <h3>OR</h3>
          </div>
          <div className="w-[25vw] h-[1px] bg-gray-400"></div>
        </div>
      

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl sm:text-3xl font-bold">Crawl a single URL</h3>
        <div className="flex sm:flex-row flex-col gap-2 items-center">
          <Input_field
            placeholder={"Enter URL..."}
            style={"border-2 w-[95vw] rounded-md sm:w-[30vw] h-[6vh] pl-2"}
          />
          <Button
            style={"bg-gray-800 w-[95vw] sm:w-[18vw] text-white p-2 pl-3 pr-3 rounded-md"}
            text={"Fetch single link"}
          />
        </div>
      </div>
      {/* -------------------Imported & Trained Web Pages------------------- */}

      

      <div className="flex w-full sm:w-[50vw] flex-col gap-2">
        <div className="flex w-full justify-between mb-10 gap-8 items-center">
          <div>
            <h3 className="text-md md:text-3xl font-bold">Imported Trained<br className="sm:hidden"></br> Web Pages</h3>
          </div>
          <div>
            <Button
              style={"border-2 text-sm rounded-md border-black p-1 pl-2 pr-2"}
              text={"Delete all"}
            />
          </div>
        </div>
          {/* =================MORE OPTIONS============== */}
          <div className="flex sm:hidden items-center gap-2 justify-end">
            <h3>More</h3>
            <AiOutlineArrowRight/>
          </div>


        {/* --------------------from here trained url------------------------------------- */}
        <div className="w-full overflow-x-scroll flex flex-col gap-2">
          <div className="w-full sm:w-[50vw] gap-2 flex items-center justify-between">
            <div className="flex w-full sm:w-[40vw] border-[1px] rounded-md p-2 pl-4 pr-4 border-gray-800 items-center justify-between">
              <div>
                <h3>https://studyloverveer.in/feed</h3>
              </div>
              <div className="bg-blue-100 rounded-md p-[2px] pl-3 pr-3">
                <h3 className="text-sm">Trained</h3>
              </div>
            </div>

            <div>
              <h3>345</h3>
            </div>
            <div className="cursor-pointer active:scale-95 hover:text-red-500">
              <MdDeleteOutline className="text-2xl" />
            </div>
            <div className="cursor-pointer active:scale-95">
              <LuRefreshCw className="text-2xl" />
            </div>
          </div>

          <div className="w-full sm:w-[50vw] gap-2 flex items-center justify-between">
            <div className="flex w-full sm:w-[40vw] border-[1px] rounded-md p-2 pl-4 pr-4 border-gray-800 items-center justify-between">
              <div>
                <h3>https://studyloverveer.in/feed</h3>
              </div>
              <div className="bg-blue-100 rounded-md p-[2px] pl-3 pr-3">
                <h3 className="text-sm">Trained</h3>
              </div>
            </div>

            <div>
              <h3>345</h3>
            </div>
            <div className="cursor-pointer active:scale-95 hover:text-red-500">
              <MdDeleteOutline className="text-2xl" />
            </div>
            <div className="cursor-pointer active:scale-95">
              <LuRefreshCw className="text-2xl" />
            </div>
          </div>
          <div className="w-full sm:w-[50vw] gap-2 flex items-center justify-between">
            <div className="flex w-full sm:w-[40vw] border-[1px] rounded-md p-2 pl-4 pr-4 border-gray-800 items-center justify-between">
              <div>
                <h3>https://studyloverveer.in/feed</h3>
              </div>
              <div className="bg-blue-100 rounded-md p-[2px] pl-3 pr-3">
                <h3 className="text-sm">Trained</h3>
              </div>
            </div>

            <div>
              <h3>345</h3>
            </div>
            <div className="cursor-pointer active:scale-95 hover:text-red-500">
              <MdDeleteOutline className="text-2xl" />
            </div>
            <div className="cursor-pointer active:scale-95">
              <LuRefreshCw className="text-2xl" />
            </div>
          </div>
          <div className="w-full sm:w-[50vw] gap-2 flex items-center justify-between">
            <div className="flex w-full sm:w-[40vw] border-[1px] rounded-md p-2 pl-4 pr-4 border-gray-800 items-center justify-between">
              <div>
                <h3>https://studyloverveer.in/feed</h3>
              </div>
              <div className="bg-blue-100 rounded-md p-[2px] pl-3 pr-3">
                <h3 className="text-sm">Trained</h3>
              </div>
            </div>

            <div>
              <h3>345</h3>
            </div>
            <div className="cursor-pointer active:scale-95 hover:text-red-500">
              <MdDeleteOutline className="text-2xl" />
            </div>
            <div className="cursor-pointer active:scale-95">
              <LuRefreshCw className="text-2xl" />
            </div>
          </div>
          <div className="w-full sm:w-[50vw] gap-2 flex items-center justify-between">
            <div className="flex w-full sm:w-[40vw] border-[1px] rounded-md p-2 pl-4 pr-4 border-gray-800 items-center justify-between">
              <div>
                <h3>https://studyloverveer.in/feed</h3>
              </div>
              <div className="bg-blue-100 rounded-md p-[2px] pl-3 pr-3">
                <h3 className="text-sm">Trained</h3>
              </div>
            </div>

            <div>
              <h3>345</h3>
            </div>
            <div className="cursor-pointer active:scale-95 hover:text-red-500">
              <MdDeleteOutline className="text-2xl" />
            </div>
            <div className="cursor-pointer active:scale-95">
              <LuRefreshCw className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
