import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Ola, I'm a software developer specializing in building exceptional digital experiences. Here are some of my recent blog posts:`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
