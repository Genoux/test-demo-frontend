import NavigationBar from "@/app/components/NavigationBar";
import BlogData from "@/app/lib/blogData";
import NewsletterCard from "./components/NewsletterCard";
import BlogCard from "./components/BlogCard";

export default function Home() {
  return (
    <main className="xl:max-w-[1230px] mx-auto px-4 md:px-8 w-full flex flex-col gap-10 md:gap-20 justify-between items-center h-full overflow-hidden">
      <NavigationBar />
      <section className="gap-3 flex items-center justify-center flex-col w-full h-auto px-4">
        <h1 className="text-3xl md:text-[48px] leading-tight md:leading-[65px] font-bold text-center">
          Insights from our team
        </h1>
        <p className="text-center text-base md:text-lg leading-normal font-medium w-full md:w-[524px]">
          Powerful Trading Tools and Features for Experienced Investors
        </p>
      </section>
      <div className="w-full bg-[#E3E3E3] h-[1px]"></div>
      {/* Blog List */}
      <div className="overflow-y-scroll gap-6 w-full max-h-[626px] h-full flex flex-col justify-start items-center py-6 px-4">
        {BlogData.sort((a, b) => b.date - a.date).map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            author={blog.author}
            date={blog.date}
            thumbnail={blog.thumbnail}
            tag={blog.tag}
          />
        ))}
      </div>
      <NewsletterCard />
    </main>
  );
}