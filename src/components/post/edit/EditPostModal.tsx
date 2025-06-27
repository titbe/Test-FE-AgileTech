import { useState } from "react";
import styles from "../PostModal.module.css";
import type { Post } from "../../../dto/PostDto";
import { useGetTagsQuery, useUpdatePostMutation } from "../../../api/postApi";

interface EditPostModalProps {
  post: Post;
  onClose: () => void;
}

const EditPostModal = ({ post, onClose }: EditPostModalProps) => {
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [selectedTags, setSelectedTags] = useState<string[]>(post.tags);

  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const { data: fetchedTags = [] } = useGetTagsQuery();

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions).map(
      (opt) => opt.value
    );
    setSelectedTags(options);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updatePost({
        postId: post.id,
        data: {
          title,
          description,
          tags: selectedTags,
        },
      }).unwrap();
      onClose();
    } catch {
      alert("Failed to update post");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <select
            multiple
            className={styles.select}
            value={selectedTags}
            onChange={handleTagChange}
          >
            {fetchedTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <div className={styles.actions}>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update"}
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPostModal;
