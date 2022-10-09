import withCounter from "./withCounter";

function ClickCounter({ count, incrementCount }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <button style={{ padding: "14px" }} onClick={incrementCount}>
        {count}
      </button>
    </div>
  );
}

export default withCounter(ClickCounter, 1);
