import { useState } from "react";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Import the resume PDF
import resumePdf from "@/assets/CVAASHISHKUSHWAH.pdf";

interface ResumeModalProps {
  children: React.ReactNode;
}

const ResumeModal = ({ children }: ResumeModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Aashish_Kushwah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="glass-card max-w-4xl max-h-[90vh] overflow-hidden p-0 border-white/20">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-semibold gradient-text text-center">
            Resume
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-hidden">
          {/* PDF Viewer */}
          <div className="w-full h-[70vh] relative">
            <iframe
              src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full rounded-b-2xl"
              title="Resume PDF"
            />
          </div>
        </div>

        {/* Download Button */}
        <div className="p-6 pt-4 border-t border-white/10">
          <Button 
            onClick={handleDownload}
            className="glass-button w-full group transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-all duration-300" />
            Download Resume
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal; 