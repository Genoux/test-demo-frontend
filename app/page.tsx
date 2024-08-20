import NavigationBar from "@/app/components/NavigationBar";
import BlogData from "@/app/lib/blogData";

export default function Home() {
  return (
    <main className="container flex flex-col gap-12">
      <NavigationBar />
      <section>
        <h1 className="text-4xl font-bold">Insights from our team</h1>
        <p>Powerful Trading Tools and Features for Experienced Investors</p>
      </section>
      {/* Blog List */}
      <div className="grid gap-4 grid-cols-2">
        {BlogData.map((blog) => (
          <div key={blog.id} className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">{blog.title}</h3>
            <p className="text-sm">{blog.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
