import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Share2, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';

const articles = [
    {
        id: 'cricket-jersey-design-tips',
        title: 'Cricket Jersey Design Tips for Teams',
        date: 'Feb 1, 2026',
        image: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
      Designing a cricket jersey is about more than just looks – it's about team identity, comfort, and professional appearance. Here are some essential tips for creating the perfect design:

      1. **Choose the Right Fabric**: Performance is key. Look for moisture-wicking materials that keep players cool during intense matches.
      2. **Color Psychology**: Choose colors that represent your team's spirit. Bright colors like orange and yellow signify energy, while blues and greens are often seen as more professional and calm.
      3. **Logo Placement**: Ensure your team logo is prominently displayed on the chest. Sponsor logos should be clearly visible but not overshadow the team identity.
      4. **Modern Patterns**: Sublimation printing allows for complex gradients and patterns. Don't be afraid to experiment with geometric designs or subtle textures.
      5. **Typography**: Use bold, readable fonts for player names and numbers. Visibility from a distance is crucial.
    `,
        author: 'Design Team',
        readTime: '5 min read'
    },
    {
        id: 'choose-perfect-cricket-jersey-colors',
        title: 'How to Choose Perfect Cricket Jersey Colors',
        date: 'Jan 28, 2026',
        image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
      Color selection is one of the most important aspects of your team's branding. Your jersey colors will define how your team is perceived on and off the field.

      - **Primary Colors**: This should be your main brand color. It usually covers about 60-70% of the jersey.
      - **Secondary Colors**: Used for accents, sleeves, and side panels. These should complement your primary color.
      - **Contrast**: Ensure high contrast between the base color and the text (names/numbers).
      - **Tournament Rules**: Always check if there are specific color restrictions in the tournaments you play.
    `,
        author: 'Color Expert',
        readTime: '4 min read'
    },
    {
        id: 'maintaining-your-cricket-jerseys',
        title: 'Maintaining Your Cricket Jerseys',
        date: 'Jan 20, 2026',
        image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
      Premium cricket jerseys are an investment. Proper care ensures they last many seasons and continue to look vibrant.

      1. **Washing**: Always wash inside out in cold water. Avoid harsh detergents or bleach.
      2. **Drying**: Air dry only. High heat from dryers can damage the sublimation fibers and cause logos to peel if they are heat-pressed.
      3. **Storage**: Fold neatly or hang in a cool, dry place. Avoid direct sunlight for long periods as it can fade even high-quality prints over years.
      4. **Stain Removal**: Treat grass or dirt stains immediately with mild stain removers before washing.
    `,
        author: 'Maintenance Pro',
        readTime: '3 min read'
    }
];

const BlogPage = () => {
    const { id } = useParams();
    const article = articles.find(a => a.id === id);

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                    <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            <main className="pt-32 pb-20">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                        {/* Header Image */}
                        <div className="relative h-[400px]">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-8 text-white">
                                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                        {article.title}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-6 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            {article.date}
                                        </div>
                                        <div className="px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold">
                                            {article.readTime}
                                        </div>
                                        <div>By {article.author}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12">
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                                {article.content}
                            </div>

                            {/* Share & Actions */}
                            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700">
                                        <Share2 size={18} />
                                        <span>Share</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700">
                                        <MessageCircle size={18} />
                                        <span>Comment</span>
                                    </button>
                                </div>

                                <div className="flex gap-2">
                                    <span className="text-sm text-gray-400 italic">Interested in custom designs?</span>
                                    <a href="https://wa.me/919489500000" className="text-sm font-bold text-green-600 hover:text-green-700">Contact Us on WhatsApp</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Articles Suggestion (Simplified) */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-8 text-navy-dark">More from our Blog</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {articles.filter(a => a.id !== id).slice(0, 2).map((a) => (
                                <Link key={a.id} to={`/blog/${a.id}`} className="group">
                                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                                        <div className="h-40 overflow-hidden">
                                            <img
                                                src={a.image}
                                                alt={a.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-lg text-navy-dark group-hover:text-blue-600 transition-colors line-clamp-1">
                                                {a.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1">{a.date}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
            <WhatsAppIcon />
        </div>
    );
};

export default BlogPage;
