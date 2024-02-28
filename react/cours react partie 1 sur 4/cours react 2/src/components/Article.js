import React from "react";
import axios from "axios";

const Article = ({ article }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editContent, setEditContent] = React.useState("");
  const dateFormat = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  const handleEdit = () => {
    const data = {
      author: article.author,
      content: editContent ? editContent : article.content,
      date: article.date,
      updateDate: Date.now(),
    };
    axios.put(`http://localhost:3004/articles/${article.id}`, data).then(() => {
      setIsEditing(false);
    });
  };

  return (
    <div
      className="article"
      style={{ background: isEditing ? "#f3feff" : "#fff" }}
    >
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dateFormat(article.date)}</em>
      </div>
      {isEditing ? (
        <textarea
          defaultValue={editContent ? editContent : article.content}
          autoFocus
          onChange={(e) => setEditContent(e.target.value)}
        ></textarea>
      ) : (
        <p>{editContent ? editContent : article.content}</p>
      )}
      <div className="btn-container">
        {isEditing ? (
          <button onClick={() => handleEdit()}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Modifier</button>
        )}
        <button
          onClick={() => {
            if (window.confirm("Voulez-vous supprimer cet article ?")) {
              axios
                .delete(`http://localhost:3004/articles/${article.id}`)
                .then(() => {
                  window.location.reload();
                });
            }
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Article;
