function InvalidInputModal(props) {
  return (
    <div>
      <div>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <button type="button" onClick={props.onConfirm}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
}

export default InvalidInputModal;
