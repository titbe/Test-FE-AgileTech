import { useEffect, useState } from "react";
import Sidebar from "../../layout/Sidebar";
import styles from "./Profile.module.css";
import type { Post } from "../../dto/PostDto";
import edit from "../../assets/icons8-edit-24-4.png";
import deleted from "../../assets/icons8-delete-30-4.png";
import {
  useDeletePostMutation,
  useGetPostsQuery,
  useGetTagsQuery,
} from "../../api/postApi";
import CreatePostModal from "../../components/post/create/CreatePostModal";
import EditPostModal from "../../components/post/edit/EditPostModal";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const Profile = () => {
  const [title, setTitle] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState<Post | null>(null);

  const { data: fetchedTags = [] } = useGetTagsQuery();
  const { data: postData } = useGetPostsQuery({
    title,
    tags: selectedTag,
    page: currentPage,
  });

  const [deletePost] = useDeletePostMutation();

  useEffect(() => {
    if (postData) {
      setPosts(postData.posts);
      setCurrentPage(postData.current_page);
      setTotalPages(postData.total_page);
    }
  }, [postData]);

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTag(e.target.value);
  };
  const handleDelete = async (postId: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        await deletePost(postId).unwrap();
        alert("Deleted post successfully!");
      } catch (error: unknown) {
        const err = error as FetchBaseQueryError;
        const message =
          typeof err.data === "string"
            ? err.data
            : (err.data as { message?: string })?.message;

        alert(message || "Failed delete post!");
      }
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Inter" }}>
      <Sidebar />
      <div className={styles.wrapper}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <button className={styles.btnAdd} onClick={() => setIsOpenAdd(true)}>
            Add new
          </button>
          {isOpenAdd && <CreatePostModal onClose={() => setIsOpenAdd(false)} />}

          <form className={styles.formFilter}>
            <input
              type="text"
              className={styles.input}
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className={styles.selectWrapper}>
              <select
                value={selectedTag}
                onChange={handleTagChange}
                className={styles.select}
              >
                <option value="">All tags</option>
                {fetchedTags.map((tag, index) => (
                  <option key={index} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>

        {/* Table */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "30px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#D9D9D9" }}>
              <th style={{ padding: "12px", borderRight: "1px solid #000" }}>
                ID
              </th>
              <th style={{ padding: "12px", borderRight: "1px solid #000" }}>
                Title
              </th>
              <th style={{ padding: "12px", borderRight: "1px solid #000" }}>
                Description
              </th>
              <th style={{ padding: "12px", borderRight: "1px solid #000" }}>
                Tags
              </th>
              <th style={{ padding: "12px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} style={{ height: "10px", border: "none" }}></td>
            </tr>
            {posts.map((post, index) => (
              <tr key={index} style={{ backgroundColor: "#D9D9D9" }}>
                <td
                  style={{ padding: "12px", border: "1px solid #000" }}
                  data-label="ID"
                >
                  {post.id || index + 1}
                </td>
                <td
                  style={{ padding: "12px", border: "1px solid #000" }}
                  data-label="Title"
                >
                  {post.title}
                </td>
                <td
                  style={{ padding: "12px", border: "1px solid #000" }}
                  data-label="Description"
                >
                  {post.description}
                </td>
                <td
                  style={{ padding: "12px", border: "1px solid #000" }}
                  data-label="Tags"
                >
                  {post.tags.join(", ")}
                </td>
                <td
                  style={{ padding: "12px", border: "1px solid #000" }}
                  data-label="Actions"
                >
                  <img
                    src={edit}
                    alt="Edit"
                    style={{ cursor: "pointer", marginRight: "10px" }}
                    onClick={() => setIsOpenEdit(post)}
                  />
                  {isOpenEdit && (
                    <EditPostModal
                      post={isOpenEdit}
                      onClose={() => setIsOpenEdit(null)}
                    />
                  )}
                  <img
                    src={deleted}
                    alt="Remove"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(post.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
