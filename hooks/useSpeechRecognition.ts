import { useState, useEffect, useRef, useCallback } from 'react';

interface UseSpeechRecognitionReturn {
  isRecording: boolean;
  transcript: string | null;
  error: string | null;
  startRecording: () => void;
  stopRecording: () => void;
  reset: () => void;
  isSupported: boolean;
}

export const useSpeechRecognition = (): UseSpeechRecognitionReturn => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        setIsSupported(true);
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onstart = () => {
          setIsRecording(true);
          setError(null);
        };

        recognition.onend = () => {
          setIsRecording(false);
        };

        recognition.onresult = (event: any) => {
          const text = event.results[0][0].transcript;
          setTranscript(text);
        };

        recognition.onerror = (event: any) => {
          console.error("Speech recognition error", event.error);
          setError("Could not hear you clearly. Please try again.");
          setIsRecording(false);
        };

        recognitionRef.current = recognition;
      } else {
        setIsSupported(false);
        setError("Voice recognition is not supported in this browser.");
      }
    }
  }, []);

  const startRecording = useCallback(() => {
    if (!recognitionRef.current) return;
    try {
      setTranscript(null);
      setError(null);
      recognitionRef.current.start();
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }, []);

  const stopRecording = useCallback(() => {
    if (!recognitionRef.current) return;
    recognitionRef.current.stop();
  }, []);

  const reset = useCallback(() => {
    setTranscript(null);
    setError(null);
    setResult(null); // Note: This hook is purely for speech, result handling is external, but keeping reset clean.
  }, []);

  return {
    isRecording,
    transcript,
    error,
    startRecording,
    stopRecording,
    reset,
    isSupported
  };
};

function setResult(arg0: null) {
    // Helper placeholder if needed, but logic moved out.
}
