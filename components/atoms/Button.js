const Button = ({ icon, text }) => {
  return (
    <button className="p-2 bg-primary-100 rounded-xl text-white shadow-lg hover:bg-primary-200 hover:shadow flex space-x-2">
      {icon}
      <div className="font-semibold">{text}</div>
    </button>
  );
};

export default Button;
