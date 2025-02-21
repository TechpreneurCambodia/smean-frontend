import React from 'react';

function UploadBox() {
    return (
        <div className="border-2 border-solid border-sky-400 rounded-lg mx-4 sm:mx-8 md:mx-0 my-4">
            <div className="flex flex-col items-center p-4 sm:p-6">
                <img 
                    className="my-4 sm:my-6 w-12 h-12 sm:w-16 sm:h-16" 
                    src="/upload.svg" 
                    alt="upload" 
                />
                <p className="text-sm sm:text-base text-center">
                    អូស និងទម្លាក់កំណត់ត្រានៅទីនេះ ឬកម្មវិធី
                </p>
                <p className="text-sky-800 text-sm sm:text-base my-2">
                    រុករកតាមអ៊ីនធឺណិត
                </p>
                <p className="font-light text-xs sm:text-sm text-gray-600">
                    ទម្រង់គាំទ្រ: mp3, wav, mov
                </p>
            </div>
        </div>
    );  
}

export default UploadBox;