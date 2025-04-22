export default function DocumentEditPage() {
  return (
    <div className="h-full">
      {/* HEADER */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div>menu</div>
          <div className="flex items-center gap-2">
            <h2>Untitled Document</h2>
            <div>arrow icon</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>saved</div>
          <div>share icon</div>
          <div>Share Btn</div>
          <div>comment</div>
          <div>history</div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="flex flex-col h-full">
        {/* TOOLBAL */}
        <div className="flex gap-2">
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
        <div className="flex flex-1">
          {/* LIST */}
          <div className="flex gap-2 flex-col bg-[#F9FAFB] w-1/4 h-full">
            <div className="flex gap-2">
              <div>Documents</div>
              <div>Plus</div>
            </div>
            <div className="flex flex-col">
              <div>Current Document</div>
              <div>Document 2</div>
              <div>Document 3</div>
              <div>Document 4</div>
              <div>Document 5</div>
            </div>
          </div>
          {/* EDITOR */}
          <div className="flex flex-col flex-1 bg-red-50" />
          {/* COMMENTS */}
          <div className="flex flex-col bg-[#F9FAFB] w-1/4 h-full">
            <div className="flex gap-2">
              <div>Comments</div>
              <div>Plus</div>
            </div>
            <div className="flex flex-col">
              <div>Comment 1</div>
              <div>Comment 2</div>
              <div>Comment 3</div>
              <div>Comment 4</div>
              <div>Comment 5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
