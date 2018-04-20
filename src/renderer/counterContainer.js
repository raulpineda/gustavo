import { connect } from "react-redux";
import Counter from "./counter";

const getValue = state => state.value;

const incrementCounter = () => ({
  type: "incremenThor"
});

const mapStateToProps = state => ({
  value: getValue(state)
});

const mapDispatchToProps = {
  handleClick: incrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
