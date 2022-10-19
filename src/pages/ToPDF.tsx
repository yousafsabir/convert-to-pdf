import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import jsPDF from 'jspdf';
import getImageDimensions from '../hooks/getImageDimensions';
import getImageDataUri from '../hooks/getImageDataUri';

const ToPDF: React.FC = () => {
  interface Image {
    lastModified: number;
    name: string;
    size: string;
    type: string;
    webkitRelativePath: string;
  }
  const [photo, setPhoto] = useState<File | null>()
  const [fileType, setFileType] = useState<string>()
  console.log(photo);

  useEffect(() => {
    if (fileType === "officedoc") {
      toast.error("we don't support office document yet")
    }
  }, [fileType])
  const handlePhoto = async (): Promise<void> => {
    const filename = getFileName(photo!);
    const imageDataURL = URL.createObjectURL(photo!);
    const dimensions = await getImageDimensions(imageDataURL)

    const pdf = new jsPDF({ unit: 'px', orientation: dimensions.height > dimensions.width ? "portrait" : "landscape", format: [dimensions.height, dimensions.width] })

    pdf.addImage(imageDataURL, 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
    pdf.save(filename + ".pdf")
  }

  function getFileName(file: File): string {
    let filename: string = file.name.slice(0, file.name.lastIndexOf("."))
    return filename
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#f7faff]">
      <div className='topdf-container rounded-2xl p-2 bg-container-gradient shadow-home-content'>
        <div className='bg-white rounded-lg p-8 flex flex-col items-center gap-6'>
          <h1 className="font-bold text=[#0a1530] text-7xl tracking-tight"
            style={{ wordSpacing: "0.5rem" }}>
            Convert to PDF
          </h1>
          <input type="file" className='' onChange={(e) => setPhoto(e.target.files![0])} />
          <fieldset className='self-stretch'>
            <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
              <label htmlFor="frm-whatever" className="sr-only">My field</label>
              <select className="appearance-none w-full py-1 px-2 bg-white" name="whatever" id="frm-whatever" onChange={(e) => setFileType(e.target.value)}>
                <option value="" >Choose file type &hellip;</option>
                <option value="image">Image</option>
                <option value="officedoc">Office Document</option>
              </select>
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </fieldset>
          <button
            className="w-44 rounded-xl h-10 inline-flex justify-center items-center text-white bg-[#0a1530]"
            onClick={handlePhoto}
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  )
}

export default ToPDF