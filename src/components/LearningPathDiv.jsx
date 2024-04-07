import { FaBookmark } from "react-icons/fa";

const LearningPathDiv = () => {
  return (
    <div className={`p-4 border rounded md:flex gap-5`}>
      <div className="rounded-lg overflow-hidden flex-[0.6] max-h-[40vh]">
        <img
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="thumbnail"
          className="size-full object-cover"
        />
      </div>
      <div className="flex-1 text">
        <p className="text-sm my-3 line-clamp-1">6 courses</p>
        <h3 className="text-xl font-bold my-3">Learning Path Name</h3>
        <p className="text-neutral-500 mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          possimus quam ea nihil distinctio soluta cumque unde suscipit labore
          quidem, ipsa animi at quos vel doloremque odit a dicta adipisci?
        </p>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-full flex items-center gap-1 mb-7">
          <FaBookmark /> In Progress
        </button>
      </div>
    </div>
  );
};

export default LearningPathDiv;
