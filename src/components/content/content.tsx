import style from "./content.module.css";
import { Icons } from "../icons/icons";
import { Button } from "antd";
import { ExamplePicture } from "./example";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { removeBackground, Config } from "@imgly/background-removal";

const config: Config = {
  debug: false,
  proxyToWorker: false,
  device: "gpu",
  publicPath: "https://189966.xyz", // path to the wasm files
  progress: (key, current, total) => {
    console.log(`Progress for ${key}: ${current}/${total}`);
  },
};

export const Content: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState<string>("");
  const [resData, setResData] = useState<string>("");
  const reset = () => {
    setImageData("");
    setResData("");
  };
  const accept = {
    "image/*": [".jpg", ".jpeg", ".png", ".gif"],
  };
  const onDrop = useCallback((acceptedFiles: File[]) => {
    reset();
    const file = acceptedFiles[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageData(url);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    multiple: false,
    onDrop,
    noDragEventsBubbling: true,
  });

  const removeBg = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setLoading(true);
    removeBackground(imageData, config).then((blob: Blob) => {
      const url = URL.createObjectURL(blob);
      setImageData("");
      setResData(url);
      setLoading(false);
    });
  };

  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = resData!;
    link.download = `remove-bg-${Date.now()}.png`;
    link.click();
    reset();
  };

  return (
    <div className={`${style.dot} ${"container"}`}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {isDragActive && <div className={style.drag}>Drop Images Here</div>}
        <div className={`${style.content}`}>
          <Icons.cube className={style.cubeLeft} />
          <Icons.cube className={style.cubeRight} />
          <Icons.cube className={style.cubeBottomLeft} />
          <Icons.cube className={style.cubeBottomRight} />
          <div className={style.board}>
            {loading && <div className={style.loading}></div>}
            {imageData || resData ? (
              <img src={imageData || resData} alt="" className={style.img} />
            ) : (
              <ExamplePicture />
            )}
          </div>
          {loading && (
            <Button
              className={style.btn}
              icon={<Icons.loader width={20} height={20} />}
            >
              Removing
            </Button>
          )}
          {!resData && !loading && (
            <Button
              disabled={imageData === ""}
              onClick={removeBg}
              className={style.btn}
              icon={<Icons.magic width={32} height={32} />}
            >
              Remove
            </Button>
          )}
          {resData && (
            <Button
              onClick={handleDownload}
              className={style.btn}
              icon={<Icons.arrowDownToLine width={20} height={20} />}
            >
              Download
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
