import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Mock Data Generation ---

type Product = {
    id: number;
    title: string;
    sku: string;
    price: string;
    image: string;
    badge?: string;
};

// Helper: Generate mock products
const generateProducts = (category: 'Cricket', count: number): Product[] => {
    const images = ['/1.png', '/2.png', '/3.jpg', '/4.jpg', '/5.png', '/6.jpg'];
    const titles = [
        'Pro Performance Jersey', 'Elite Training Kit', 'Match Day Uniform',
        'Fan Edition Tee', 'Club Merchandise', 'Sublimated Sportswear',
        'Tournament Gear', 'Practice Vest', 'Team Warmup Jacket', 'Custom Player Kit'
    ];

    return Array.from({ length: count }, (_, i) => {
        const imgIndex = i % images.length;
        const titleIndex = i % titles.length;
        const price = 499 + Math.floor(Math.random() * 1500); // Random price between 499 and 1999

        return {
            id: category === 'Cricket' ? i + 1 : i + 1001,
            title: `${category} ${titles[titleIndex]} ${Math.floor(i / 10) + 1}`,
            sku: `${category.substring(0, 3).toUpperCase()}-${1000 + i}`,
            price: `₹${price}`,
            image: images[imgIndex],
            badge: i % 15 === 0 ? 'New' : (i % 23 === 0 ? 'Sale' : undefined)
        };
    });
};

const cricketProducts = generateProducts('Cricket', 100);

// --- Components ---


const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="group relative aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
            />
            {/* Bottom Overlay with Caption */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <p className="text-white text-xs md:text-sm font-medium opacity-90">
                    {product.title}
                </p>
            </div>

            {/* Optional badge */}
            {product.badge && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded text-black uppercase tracking-wide z-10">
                    {product.badge}
                </span>
            )}
        </div>
    );
};

const GalleryPage = () => {
    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const allProducts = cricketProducts;

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = allProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(allProducts.length / itemsPerPage);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navigation />

            {/* Video Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    <iframe
                        className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
                        src="https://www.youtube.com/embed/CO8iWd1IiQ0?autoplay=1&mute=1&controls=0&loop=1&playlist=CO8iWd1IiQ0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
                        title="Background Process Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
                <div className="relative z-20 text-center px-4 animate-fadeIn">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-wide">
                        OUR GALLERY
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light">
                        Explore Our Premium Collections
                    </p>
                </div>
            </div>

            <main className="flex-grow py-8 md:py-16 bg-white container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Gallery Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-4 border-b border-gray-100 gap-4">
                    <h2 className="text-2xl md:text-3xl font-black text-navy-dark tracking-tight uppercase">
                        JERSEY  COLLECTION
                    </h2>
                    <div className="bg-gray-100 text-gray-400 text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                        {allProducts.length} IMAGES
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex flex-col items-center gap-6 mt-8">
                    <div className="flex justify-center items-center space-x-2">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${currentPage === 1
                                ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                                : 'text-gray-600 border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            &lt; Previous
                        </button>

                        <div className="flex items-center gap-1">
                            {Array.from({ length: totalPages }, (_, i) => {
                                const page = i + 1;
                                if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                                    return (
                                        <button
                                            key={page}
                                            onClick={() => paginate(page)}
                                            className={`w-10 h-10 rounded-lg text-sm font-bold transition-all border ${currentPage === page
                                                ? 'bg-navy-dark text-white border-navy-dark shadow-md'
                                                : 'bg-white text-gray-500 border-gray-200 hover:border-navy-dark hover:text-navy-dark'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    );
                                } else if (page === currentPage - 2 || page === currentPage + 2) {
                                    return <span key={page} className="text-gray-300 px-1">...</span>;
                                }
                                return null;
                            })}
                        </div>

                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${currentPage === totalPages
                                ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                                : 'text-gray-600 border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            Next &gt;
                        </button>
                    </div>

                    <p className="text-xs md:text-sm text-gray-400 font-medium">
                        Page {currentPage} of {totalPages} ({allProducts.length} images in Boys Collection)
                    </p>
                </div>
            </main>

            <Footer />
            <WhatsAppIcon />
        </div>
    );
};

export default GalleryPage;
