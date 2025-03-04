import React, { useState, useCallback } from 'react';

function UploadBox({ onFilesSelected }) {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState([]);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const onDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        handleFiles(Array.from(e.dataTransfer.files));
    }, []);

    const onFileSelect = (e) => {
        handleFiles(Array.from(e.target.files));
    };

    const handleFiles = (newFiles) => {
        const validFiles = newFiles.filter(
            (newFile) =>
                !files.some(
                    (file) => file.name === newFile.name && file.size === newFile.size
                )
        );
    
        const filePromises = validFiles.map((file) => {
            return new Promise((resolve) => {
                const fileURL = URL.createObjectURL(file);
                const audio = new Audio(fileURL);
    
                audio.onloadedmetadata = () => {
                    resolve({
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        duration: Math.round(audio.duration), // Convert to seconds
                        fileURL, // Save for preview
                    });
                };
    
                // Handle cases where metadata might not load
                audio.onerror = () => {
                    resolve({
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        duration: 0, // Fallback duration
                        fileURL,
                    });
                };
            });
        });
    
        Promise.all(filePromises).then((updatedFiles) => {
            setFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
            if (onFilesSelected) onFilesSelected([...files, ...updatedFiles]);
        });
    };
    

    const onDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const clearFiles = () => {
        setFiles([]);
        if (onFilesSelected) onFilesSelected([]);
    };

    const viewFile = (file) => {
        setSelectedFile(file);
        setIsPreviewOpen(true);
    };

    const removeFile = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
        if (onFilesSelected) onFilesSelected(updatedFiles);
    };

    // Function to format duration (seconds to minutes if > 60s)
    const formatDuration = (duration) => {
        if (duration > 60) {
            const minutes = Math.floor(duration / 60);
            const remainingSeconds = duration % 60;
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')} min`; // e.g., "2:30 min"
        }
        return `${duration} sec`;
    };

    return (
        <div 
            className={`border-2 border-dashed border-sky-400 rounded-lg mx-4 sm:mx-8 md:mx-0 my-4 p-6 w-full max-w-4xl mx-auto ${isDragging ? 'bg-sky-100' : 'bg-white'} transition-colors duration-300 hover:shadow-md`}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
        >
            <label className="cursor-pointer w-full">
                <div className="flex flex-col items-center">
                    <img 
                        className="my-4 w-12 h-12 sm:w-16 sm:h-16" 
                        src="/upload.svg" 
                        alt="upload" 
                    />
                    <p className="text-sm sm:text-lg text-center text-gray-700">
                        អូស និងទម្លាក់កំណត់ត្រានៅទីនេះ ឬ
                    </p>
                    <p className="text-primary text-sm sm:text-lg my-2 hover:underline">
                        ជ្រើសរើសឯកសារពីឧបករណ៍
                    </p>
                    <p className="font-light text-xs sm:text-base text-gray-600">
                        ទម្រង់គាំទ្រ: mp3, wav, mov
                    </p>
                    <input
                        type="file"
                        className="hidden"
                        onChange={onFileSelect}
                        accept=".mp3,.wav,.mov"
                        multiple
                    />
                </div>
            </label>

            {files.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        ឯកសារដែលបានផ្ទុកឡើង ({files.length})
                    </h3>
                    <div className="flex flex-col gap-3 w-full">
                        {/* Table Header */}
                        <div className="flex flex-row justify-between w-full bg-primary rounded-xl p-2 text-white">
                            <div>ឈ្មោះ</div>
                            <div className="flex flex-row gap-5">
                                <div className='mr-5'>ទំហំ</div>
                                <div className='mr-10'>រយៈពេល</div>
                            </div>
                        </div>

                        {/* Table Data - Clickable rows for preview with enhanced hover effect */}
                        {files.map((file, index) => (
                            <div 
                                key={index} 
                                className="flex flex-row justify-between w-full bg-gray-500 rounded-xl p-2 text-black cursor-pointer hover:bg-gray-200 hover:shadow-2xl hover:border-primary transition-all duration-300 ease-in-out hover:border-2"
                                onClick={() => viewFile(file)} // Click to preview
                            >
                                <div className="flex items-center gap-2 flex-1">
                                    {file.name}
                                </div>
                                <div className="flex flex-row items-center gap-5">
                                    <div className='mr-2'>{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                                    <div >{file.duration ? formatDuration(file.duration) : 'កំពុងគណនា...'}</div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent triggering viewFile
                                            removeFile(index);
                                        }}
                                        className="text-red-600 hover:text-red-800 text-xl"
                                    >
                                        ❌
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={clearFiles}
                        className="mt-4 px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full hover:from-red-700 hover:to-red-900 hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                        ជម្រះឯកសារទាំងអស់
                    </button>
                </div>
            )}

            {/* File Preview Modal */}
            {isPreviewOpen && selectedFile && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full">
                        <h2 className="text-lg font-bold mb-4">
                            ការមើលឯកសារជាមុន: {selectedFile.name}
                        </h2>

                        {/* Preview logic for audio files */}
                        {selectedFile.type.startsWith('audio/') ? (
                            <audio controls className="w-full">
                                <source src={selectedFile.fileURL} type={selectedFile.type} />
                                Your browser does not support the audio element.
                            </audio>
                        ) : (
                            <p className="text-gray-600">
                                ការមើលជាមុនមិនមានសម្រាប់ប្រភេទឯកសារនេះទេ។ គាំទ្រតែ៖ mp3, wav ។
                            </p>
                        )}
                        <button
                            onClick={() => setIsPreviewOpen(false)}
                            className="mt-4 text-sm text-red-600 hover:text-red-800"
                        >
                            បិទ
                        </button>
                    </div>
                </div>
            )}
        </div>
    );  
}

export default UploadBox;