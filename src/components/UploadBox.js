import React, { useState, useCallback } from 'react';

function UploadBox({ onFilesSelected }) {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState([]);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [selectedFileIndex, setSelectedFileIndex] = useState(null);

    const onDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFiles(droppedFiles);
    }, []);

    const onFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files);
        handleFiles(selectedFiles);
    };

    const handleFiles = (newFiles) => {
        // Ensure new files are appended to the existing list, with detailed duplicate checking
        const uniqueFiles = [...files];
        newFiles.forEach(newFile => {
            // Check for duplicates by name and size to ensure uniqueness (more robust than just name)
            if (!uniqueFiles.some(file => file.name === newFile.name && file.size === newFile.size)) {
                uniqueFiles.push(newFile);
            }
        });
        setFiles(uniqueFiles);
        if (onFilesSelected) onFilesSelected(uniqueFiles);
    };

    const onDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const clearFiles = () => {
        setFiles([]);
        if (onFilesSelected) onFilesSelected([]);
    };

    const viewFile = (index) => {
        setSelectedFileIndex(index);
        setIsPreviewOpen(true);
    };

    const removeFile = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
        if (onFilesSelected) onFilesSelected(updatedFiles);
    };

    return (
        <div 
            className={`border-2 border-dashed border-sky-400 rounded-lg mx-4 sm:mx-8 md:mx-0 my-4 p-6
                ${isDragging ? 'bg-sky-100' : 'bg-white'} transition-colors duration-300 hover:shadow-md`}
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
                    <p className="text-sm sm:text-base text-center text-gray-700">
                        អូស និងទម្លាក់កំណត់ត្រានៅទីនេះ ឬ
                    </p>
                    <p className="text-sky-800 text-sm sm:text-base my-2 hover:underline">
                        ជ្រើសរើសឯកសារពីឧបករណ៍
                    </p>
                    <p className="font-light text-xs sm:text-sm text-gray-600">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {files.map((file, index) => (
                            <div
                                key={index}
                                className="border border-gray-300 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                            >
                                <p className="text-sm font-medium text-gray-800 truncate">
                                    {file.name}
                                </p>
                                <p className="text-xs text-gray-600">
                                    ទំហំ: {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                                <p className="text-xs text-gray-600">
                                    ប្រភេទ: {file.type}
                                </p>
                                <div className="mt-2 flex gap-2">
                                    <button
                                        onClick={() => viewFile(index)}
                                        className="text-sm text-blue-600 hover:text-blue-800"
                                    >
                                        មើល
                                    </button>
                                    <button
                                        onClick={() => removeFile(index)}
                                        className="text-sm text-red-600 hover:text-red-800"
                                    >
                                        ដកចេញ
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={clearFiles}
                        className="mt-4 text-sm text-red-600 hover:text-red-800"
                    >
                        ជម្រះឯកសារទាំងអស់
                    </button>
                </div>
            )}

            {/* File Preview Modal */}
            {isPreviewOpen && selectedFileIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full">
                        <h2 className="text-lg font-bold mb-4">
                            ការមើលឯកសារជាមុន: {files[selectedFileIndex].name}
                        </h2>
                        {/* Preview logic for audio files */}
                        {files[selectedFileIndex].type.startsWith('audio/') ? (
                            <audio controls className="w-full">
                                <source src={URL.createObjectURL(files[selectedFileIndex])} type={files[selectedFileIndex].type} />
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