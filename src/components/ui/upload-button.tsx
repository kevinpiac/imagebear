import React, { FC, PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import Dropzone from "react-dropzone";
import {
  CursorArrowRaysIcon,
  DocumentArrowUpIcon,
} from "@heroicons/react/16/solid";

type Props = {
  onFileAdded: (files: File[]) => void;
};

export const UploadButton: FC<PropsWithChildren & Props> = ({
  children,
  onFileAdded,
}) => {
  const [isDragging, setIsDragging] = React.useState(false);

  const handleFileAdded = (files: File[]) => {
    setIsDragging(false);
    onFileAdded(files);
  };

  return (
    <Dropzone
      onDrop={(acceptedFiles) => {}}
      onDragEnter={() => setIsDragging(true)}
      onDragLeave={() => setIsDragging(false)}
      onDropRejected={() => setIsDragging(false)}
      onDropAccepted={handleFileAdded}
    >
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} className={"relative"}>
          {!isDragging && (
            <div className={"relative flex"}>
              <div
                className={
                  "bg-gradient-to-r animate-pulse from-amber-500 to-pink-500 blur-lg absolute top-2 left-2 bottom-2 right-2 rounded-full z-0"
                }
              ></div>
              <Button
                variant={"rounded"}
                className={
                  "w-full flex z-10 border-[#36212b] bg-black hover:bg-black/90"
                }
              >
                <DocumentArrowUpIcon className={"w-4 h-4 mr-2"} />
                Upload image
              </Button>
            </div>
          )}

          {isDragging && (
            <div className={"relative"}>
              <Button
                variant={"rounded"}
                className={
                  "w-full bg-gradient-to-r animate-pulse from-amber-500 to-pink-500 antialiased"
                }
              >
                <CursorArrowRaysIcon className={"w-4 h-4 mr-2"} />
                Drop your file here
              </Button>
            </div>
          )}
        </div>
      )}
    </Dropzone>
  );
};
