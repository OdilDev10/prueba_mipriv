import "./ButtonLoginGoogle.css";

export const ButtonLoginGoogle = ({ onClick }: { onClick: () => void }) => {
  return (
    <div>
      <button
        type="button"
        className="login-with-google-btn"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        Sign in with Google
      </button>
    </div>
  );
};
