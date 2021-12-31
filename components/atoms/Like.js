import { HeartFill, HeartOutline } from "./Icons";

const Like = ({ checkActive = false }) => {
  return <div>{checkActive === true ? <HeartFill /> : <HeartOutline />}</div>;
};

export default Like;
