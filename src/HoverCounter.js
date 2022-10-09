import withCounter from "./withCounter";

function HoverCounter({ count, incrementCount }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <button style={{ padding: "14px" }} onMouseOver={incrementCount}>
        {count}
      </button>
    </div>
  );
}

export default withCounter(HoverCounter);
