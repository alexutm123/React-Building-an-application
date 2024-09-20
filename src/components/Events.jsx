export default function Button({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
          {children}
        </button>
      );
  }
  