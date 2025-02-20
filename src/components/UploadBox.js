import React from 'react'

function UploadBox() {
  return (
    <div className="border-2 border-solid border-sky-400 m-4 mx-80  rounded-lg">
        <div className="flex flex-col items-center p-4">
            <img className="my-8" src="/upload.svg " alt="upload" />
            <p>អូស និងទម្លាក់កំណត់ត្រានៅទីនេះ ឬកម្មវិធី</p>
            <p className="text-sky-800">រុករកតាមអ៊ីនធឺណិត</p>
            <p className="font-light">ទម្រង់គាំទ្រ: mp3, wav, mov</p>
        </div>
    </div>
  );
}

export default UploadBox;
