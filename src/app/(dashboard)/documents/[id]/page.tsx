import { CgFileDocument } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { LuHistory } from "react-icons/lu";

export default function DocumentEditPage() {
  return (
    <div className="h-full flex flex-col divide-y divide-border-primary text-foreground">
      {/* HEADER */}
      <div className="flex justify-between bg-background h-14 px-5">
        <div className="flex items-center gap-4">
          <IoMdMenu size={20} />
          <div className="flex items-center gap-2 w-44 justify-between">
            <h2 className="text-dark-gray">Untitled Document</h2>
            <IoIosArrowDown size={18} />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-dark-gray">Saved</div>
          <div>share icon</div>
          <div className="flex items-center bg-button-primary-background text-button-primary-text py-1 px-3 rounded-lg">
            <FaShare />
            Share
          </div>
          <FaRegComment />
          <LuHistory />
        </div>
      </div>
      {/* CONTENT */}
      <div className="flex flex-col h-full bg-background divide-y divide-border-primary">
        {/* TOOLBAL */}
        <div className="flex gap-2 h-10 items-center">
          <div>undo</div>
          <div>redo</div>
          <div>bold</div>
          <div>italic</div>
          <div>underline</div>
          <div>strikethrough</div>
          <div>code</div>
          <div>quote</div>
          <div>link</div>
          <div>image</div>
        </div>
        {/* EDITOR */}
        <div className="flex flex-1 divide-x divide-border-primary">
          {/* LIST */}
          <div className="flex gap-2 flex-col w-60 h-full px-3">
            <div className="flex gap-2 items-center w-full h-12 justify-between font-bold">
              <div>Documents</div>
              <HiPlus />
            </div>
            <ul className="flex flex-col gap-1">
              <li className="flex gap-2 items-center h-8 bg-light-gray px-2 rounded-lg">
                <CgFileDocument />
                Current Document
              </li>
              <li className="flex gap-2 items-center h-8 px-2">
                <CgFileDocument />
                Document 2
              </li>
              <li className="flex gap-2 items-center h-8 px-2">
                <CgFileDocument />
                Document 3
              </li>
              <li className="flex gap-2 items-center h-8 px-2">
                <CgFileDocument />
                Document 4
              </li>
              <li className="flex gap-2 items-center h-8 px-2">
                <CgFileDocument />
                Document 5
              </li>
            </ul>
          </div>
          {/* EDITOR */}
          <div className="flex flex-col flex-1 bg-background-editor" />
          {/* COMMENTS */}
          <div className="flex gap-2 flex-col w-60 h-full px-3">
            <div className="flex gap-2 items-center w-full h-12 justify-between font-bold">
              <div>Comments</div>
              <HiPlus />
            </div>
            <ul className="flex flex-col">
              <li>Comment 1</li>
              <li>Comment 2</li>
              <li>Comment 3</li>
              <li>Comment 4</li>
              <li>Comment 5</li>
            </ul>
            <div>
              <div className="flex gap-2 items-center w-full h-12 justify-between font-bold">
                Active Now
              </div>
              <ul className="flex flex-col text-sm">
                <li>You</li>
                <li>권규</li>
                <li>이린</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
