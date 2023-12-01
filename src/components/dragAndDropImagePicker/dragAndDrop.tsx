import React, { useState } from 'react';

function ImagePicker({ setSelectedImage }: any) {
    const [dragOver, setDragOver] = useState<boolean>(false);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        handleImageFile(file);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(false);

        const file = event.dataTransfer.files?.[0];
        handleImageFile(file);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = () => {
        setDragOver(false);
    };

    const handleImageFile = (file: File | undefined) => {
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const blob = new Blob([reader.result as ArrayBuffer], { type: file.type });
                setSelectedImage(blob);
            };
            reader.readAsArrayBuffer(file);
        }
    };

    return (
        <div>
            <div
                className={`drop-zone ${dragOver ? 'drag-over' : ''}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <p>Drag & drop an image here or click to select.</p>
            </div>
        </div>
    );
}

export default ImagePicker;
