import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const galleryItems = Array.from({ length: 40 }, (_, i) => ({
        id: i + 1,
        title: `Premium Collection ${i + 1}`,
        image: `/SUBLIMATION%20SERVER/${i + 1}.jpg`
    }));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const GridSection = ({ title, items }: { title: string; items: any[] }) => (
        <div className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-4 border-b border-gray-100 gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-navy-dark tracking-tight uppercase">
                    {title}
                </h2>
                <div className="bg-gray-100 text-gray-400 text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                    {items.length} IMAGES
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {items.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setSelectedImage({ image: item.image, title: item.title })}
                        className="group cursor-pointer relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-sm font-semibold">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = galleryItems.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        const gridSection = document.getElementById('gallery-grid');
        if (gridSection) {
            const navHeight = 100; // Account for fixed header
            const elementPosition = gridSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 400, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navigation />

            {/* Video Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 bg-gray-900">
                    <div className="absolute inset-0 z-10 bg-black/40"></div>
                    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="/500X1500.png"
                        >
                            <source src="/34594-402634196_small.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="relative z-20 text-center px-4 animate-fadeIn">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tighter uppercase">
                        OUR GALLERY
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light uppercase tracking-widest">
                        Premium Sublimation Print
                    </p>
                </div>
            </div>

            <main id="gallery-grid" className="flex-grow py-8 md:py-16 bg-white container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <GridSection title="OUR COLLECTIONS" items={paginatedItems} />

                {/* Pagination UI */}
                <div className="mt-12 flex justify-center items-center gap-2 md:gap-4 flex-wrap">
                    <button
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className={`flex items-center gap-1 px-4 py-2 border rounded-lg text-sm font-semibold transition-all ${currentPage === 1
                            ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                            : 'text-gray-600 border-gray-200 hover:bg-gray-50'
                            }`}
                    >
                        <ChevronLeft size={16} />
                        Previous
                    </button>

                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${currentPage === page
                                    ? 'bg-[#1a1c2e] text-white shadow-lg'
                                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className={`flex items-center gap-1 px-4 py-2 border rounded-lg text-sm font-semibold transition-all ${currentPage === totalPages
                            ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                            : 'text-gray-600 border-gray-200 hover:bg-gray-50'
                            }`}
                    >
                        Next
                        <ChevronRight size={16} />
                    </button>
                </div>
            </main>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors p-2"
                        >
                            <X size={32} />
                        </button>
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <p className="text-white text-center mt-6 text-2xl font-bold uppercase tracking-widest">
                            {selectedImage.title}
                        </p>
                    </div>
                </div>
            )}

            <Footer />
            <WhatsAppIcon />
        </div>
    );
};

export default GalleryPage;
