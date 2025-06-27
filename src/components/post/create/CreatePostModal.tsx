import { useState } from "react";
import styles from "../PostModal.module.css";
import { useCreatePostMutation, useGetTagsQuery } from "../../../api/postApi";

interface CreatePostModalProps {
  onClose: () => void;
}

const CreatePostModal = ({ onClose }: CreatePostModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const [createPost, { isLoading }] = useCreatePostMutation();
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
      await createPost({ title, description, tags: selectedTags }).unwrap();
      onClose();
    } catch {
      alert("Failed to create post");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Create New Post</h2>
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
              {isLoading ? "Creating..." : "Create"}
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

export default CreatePostModal;
