import Sidebar from "@/components/Sidebar";
import WhoToFollow from "@/components/WhoToFollow";
import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import { currentUser } from "@clerk/nextjs/server";

export default async function Redesocial() {
  const user = await currentUser();
  const posts = await getPosts();
  const dbUserId = await getDbUserId();

  return (
    <main className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="hidden lg:block lg:col-span-3">
            <Sidebar />
          </div>

          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
              <div className="lg:col-span-6">
                {user ? <CreatePost /> : null}

                <div className="space-y-6">
                  {posts.map((post) => (
                    <PostCard key={post.id} post={post} dbUserId={dbUserId} />
                  ))}
                </div>
              </div>

              <div className="hidden lg:block lg:col-span-4 sticky top-20">
                <WhoToFollow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
