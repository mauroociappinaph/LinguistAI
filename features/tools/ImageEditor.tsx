import React, { useState, useRef } from 'react';
import { editImage } from '../../services';
import { Button } from '../../components';

export const ImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setGeneratedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!selectedImage || !prompt) return;
    setIsProcessing(true);
    try {
      const result = await editImage(selectedImage, prompt);
      if (result) {
        setGeneratedImage(result);
      } else {
        alert("Failed to generate image.");
      }
    } catch (err) {
      alert("Error processing image");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Visual Vocabulary Lab</h2>
        <p className="text-slate-600 mt-2">Upload an image and describe how you want to change it using English instructions. (e.g., "Add a red hat", "Make it vintage style")</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
            <div 
                className="border-2 border-dashed border-slate-300 rounded-2xl h-64 flex flex-col items-center justify-center bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors overflow-hidden relative"
                onClick={() => !selectedImage && fileInputRef.current?.click()}
            >
                {selectedImage ? (
                    <>
                        <img src={selectedImage} alt="Original" className="w-full h-full object-contain" />
                        <button 
                            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                            className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md text-red-500"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </>
                ) : (
                    <>
                        <svg className="w-12 h-12 text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <span className="text-sm text-slate-500 font-medium">Click to upload reference image</span>
                    </>
                )}
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Edit Instruction (English)</label>
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="E.g., 'Change the background to a beach'"
                    className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none h-24"
                />
            </div>

            <Button 
                onClick={handleEdit} 
                disabled={!selectedImage || !prompt || isProcessing} 
                className="w-full"
                isLoading={isProcessing}
            >
                {isProcessing ? 'Generating...' : 'Generate Edit'}
            </Button>
        </div>

        {/* Output Section */}
        <div className="border-2 border-slate-200 rounded-2xl h-[500px] bg-white flex items-center justify-center overflow-hidden relative shadow-sm">
             {generatedImage ? (
                 <img src={generatedImage} alt="Generated" className="w-full h-full object-contain" />
             ) : (
                 <div className="text-center p-6">
                     {isProcessing ? (
                         <div className="animate-pulse flex flex-col items-center">
                             <div className="h-12 w-12 bg-indigo-200 rounded-full mb-4"></div>
                             <div className="h-4 w-48 bg-slate-200 rounded mb-2"></div>
                             <div className="h-4 w-32 bg-slate-200 rounded"></div>
                         </div>
                     ) : (
                         <p className="text-slate-400">Generated image will appear here</p>
                     )}
                 </div>
             )}
        </div>
      </div>
    </div>
  );
};